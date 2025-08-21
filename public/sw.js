// Sondos AI - Advanced Service Worker
// Version: 2.0.0
// Enhanced for international SEO and performance optimization

const CACHE_NAME = 'sondos-ai-v2.0.0';
const STATIC_CACHE = 'sondos-static-v2.0.0';
const DYNAMIC_CACHE = 'sondos-dynamic-v2.0.0';
const API_CACHE = 'sondos-api-v2.0.0';

// Define what to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/sondos-lockup-light.png',
  '/assets/sondos-lockup-dark.png',
  '/assets/sondos-mark-light.png',
  '/assets/sondos-mark-dark.png',
  // Critical CSS and JS will be added dynamically
];

const CACHE_STRATEGIES = {
  // Cache first strategy for static assets
  static: ['image/', 'font/', 'application/font', 'text/css', 'application/javascript'],
  // Network first strategy for dynamic content
  networkFirst: ['text/html', 'application/json'],
  // Stale while revalidate for API calls
  staleWhileRevalidate: ['/api/']
};

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirstStrategy(request));
  } else if (isAPIRequest(url)) {
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else if (isHTMLRequest(request)) {
    event.respondWith(networkFirstStrategy(request));
  } else {
    event.respondWith(genericFetchStrategy(request));
  }
});

// Cache first strategy - for static assets
async function cacheFirstStrategy(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Update cache in background
      fetchAndCache(request, cache);
      return cachedResponse;
    }
    
    // Not in cache, fetch and cache
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return createErrorResponse();
  }
}

// Network first strategy - for HTML pages
async function networkFirstStrategy(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    
    // Try network first
    try {
      const response = await fetch(request);
      if (response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (networkError) {
      // Network failed, try cache
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // If requesting HTML and nothing in cache, return offline page
      if (request.headers.get('accept')?.includes('text/html')) {
        return createOfflinePage();
      }
      
      throw networkError;
    }
  } catch (error) {
    console.error('Network first strategy failed:', error);
    return createErrorResponse();
  }
}

// Stale while revalidate strategy - for API calls
async function staleWhileRevalidateStrategy(request) {
  try {
    const cache = await caches.open(API_CACHE);
    const cachedResponse = await cache.match(request);
    
    // Always try to fetch fresh data
    const fetchPromise = fetch(request).then((response) => {
      if (response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    }).catch((error) => {
      console.warn('API fetch failed:', error);
      return null;
    });
    
    // Return cached response immediately if available
    if (cachedResponse) {
      // Update cache in background
      fetchPromise;
      return cachedResponse;
    }
    
    // No cache, wait for network
    const networkResponse = await fetchPromise;
    if (networkResponse) {
      return networkResponse;
    }
    
    throw new Error('No cached response and network failed');
  } catch (error) {
    console.error('Stale while revalidate strategy failed:', error);
    return createErrorResponse();
  }
}

// Generic fetch strategy
async function genericFetchStrategy(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    return cachedResponse || createErrorResponse();
  }
}

// Helper function to fetch and cache
async function fetchAndCache(request, cache) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
  } catch (error) {
    console.warn('Background fetch failed:', error);
  }
}

// Helper functions to determine request types
function isStaticAsset(request) {
  const url = new URL(request.url);
  return CACHE_STRATEGIES.static.some(type => 
    request.headers.get('accept')?.includes(type) ||
    url.pathname.match(/\.(css|js|png|jpg|jpeg|webp|avif|svg|woff|woff2|ttf|eot)$/i)
  );
}

function isAPIRequest(url) {
  return url.pathname.startsWith('/api/') || 
         url.hostname !== self.location.hostname;
}

function isHTMLRequest(request) {
  return request.headers.get('accept')?.includes('text/html') ||
         request.url.endsWith('/') ||
         !request.url.includes('.');
}

// Create error responses
function createErrorResponse() {
  return new Response(
    JSON.stringify({ 
      error: 'Network error occurred',
      message: 'الخدمة غير متاحة حالياً'
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }
  );
}

function createOfflinePage() {
  const offlineHTML = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>سندس AI - غير متصل</title>
      <style>
        body {
          font-family: 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
          margin: 0;
          padding: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          max-width: 500px;
          background: rgba(255, 255, 255, 0.1);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        h1 { font-size: 2.5rem; margin-bottom: 1rem; }
        p { font-size: 1.2rem; line-height: 1.6; margin-bottom: 2rem; }
        .retry-btn {
          background: #4CAF50;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .retry-btn:hover {
          background: #45a049;
          transform: translateY(-2px);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🔌 غير متصل</h1>
        <p>يبدو أنك غير متصل بالإنترنت. تحقق من اتصالك وحاول مرة أخرى.</p>
        <button class="retry-btn" onclick="window.location.reload()">
          إعادة المحاولة
        </button>
      </div>
    </body>
    </html>
  `;

  return new Response(offlineHTML, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    }
  });
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered');
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle any queued offline actions
      handleBackgroundSync()
    );
  }
});

async function handleBackgroundSync() {
  try {
    // Implement your background sync logic here
    console.log('Handling background sync...');
    
    // Example: Send queued form submissions
    const queuedData = await getQueuedData();
    for (const data of queuedData) {
      try {
        await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // Remove from queue on success
        await removeFromQueue(data.id);
      } catch (error) {
        console.warn('Failed to sync data:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'إشعار جديد من سندس AI',
    icon: '/assets/sondos-mark-light.png',
    badge: '/assets/sondos-mark-light.png',
    tag: 'sondos-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'عرض',
        icon: '/icons/view.png'
      },
      {
        action: 'dismiss',
        title: 'إغلاق',
        icon: '/icons/close.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('سندس AI', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Placeholder functions for queue management
async function getQueuedData() {
  // Implement queue retrieval from IndexedDB
  return [];
}

async function removeFromQueue(id) {
  // Implement queue item removal from IndexedDB
  console.log('Removing from queue:', id);
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MARK') {
    // Handle performance marks from the main thread
    console.log('Performance mark received:', event.data.mark);
  }
});

console.log('Sondos AI Service Worker v2.0.0 loaded successfully');