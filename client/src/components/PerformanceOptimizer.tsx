import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableFontOptimization?: boolean;
  enableServiceWorker?: boolean;
  enableLazyLoading?: boolean;
  enablePrefetching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableFontOptimization = true,
  enableServiceWorker = true,
  enableLazyLoading = true,
  enablePrefetching = true
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      optimizeImages();
    }

    // Font optimization
    if (enableFontOptimization) {
      optimizeFonts();
    }

    // Service worker registration
    if (enableServiceWorker) {
      registerServiceWorker();
    }

    // Lazy loading setup
    if (enableLazyLoading) {
      setupLazyLoading();
    }

    // Resource prefetching
    if (enablePrefetching) {
      setupResourcePrefetching();
    }

    // General performance optimizations
    setupPerformanceOptimizations();

    // Cleanup function
    return () => {
      // Clean up any performance monitoring
      if (window.performanceObserver) {
        window.performanceObserver.disconnect();
      }
    };
  }, [enableImageOptimization, enableFontOptimization, enableServiceWorker, enableLazyLoading, enablePrefetching]);

  const optimizeImages = () => {
    // Set loading="lazy" for all images not marked as eager
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img: HTMLImageElement) => {
      img.loading = 'lazy';
      img.decoding = 'async';
      
      // Add srcset for responsive images if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        if (src.includes('.jpg') || src.includes('.png') || src.includes('.webp')) {
          // Generate responsive image URLs (assuming a responsive image service)
          img.srcset = `
            ${src}?w=400 400w,
            ${src}?w=800 800w,
            ${src}?w=1200 1200w,
            ${src}?w=1600 1600w
          `;
          img.sizes = '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1600px';
        }
      }
    });

    // Intersection Observer for images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            // Optimize image loading
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            
            // Add fade-in effect
            img.style.transition = 'opacity 0.3s ease-in-out';
            img.style.opacity = '1';
            
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observe all images with data-src
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  };

  const optimizeFonts = () => {
    // Add font-display: swap to all fonts
    const fontStyles = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontStyles.forEach((link: HTMLLinkElement) => {
      if (!link.href.includes('display=swap')) {
        link.href += link.href.includes('?') ? '&display=swap' : '?display=swap';
      }
    });

    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
      'https://fonts.gstatic.com/s/cairo/v28/SLXGc1nY6HkvalIhTp2mxdt0UX8gfwhB.woff2'
    ];

    criticalFonts.forEach((fontUrl) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  };

  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator && 'caches' in window) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  console.log('New version available');
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  };

  const setupLazyLoading = () => {
    // Intersection Observer for lazy loading sections
    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            
            // Add loaded class for animations
            section.classList.add('loaded');
            
            // Load background images
            if (section.dataset.bg) {
              section.style.backgroundImage = `url(${section.dataset.bg})`;
              section.removeAttribute('data-bg');
            }
            
            sectionObserver.unobserve(section);
          }
        });
      }, {
        rootMargin: '100px 0px',
        threshold: 0.1
      });

      // Observe all sections with lazy loading
      document.querySelectorAll('[data-lazy]').forEach((section) => {
        sectionObserver.observe(section);
      });
    }
  };

  const setupResourcePrefetching = () => {
    // Prefetch critical resources
    const criticalResources = [
      '/assets/sondos-lockup-light.png',
      '/assets/sondos-lockup-dark.png',
      // Add more critical resources
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Preload critical routes
    const criticalRoutes = ['/pricing', '/about', '/industries'];
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        criticalRoutes.forEach((route) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          document.head.appendChild(link);
        });
      });
    }
  };

  const setupPerformanceOptimizations = () => {
    // Throttle scroll events
    let scrollTimer: NodeJS.Timeout;
    const optimizedScrollHandler = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        // Scroll handling logic
        document.body.classList.toggle('scrolled', window.scrollY > 100);
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    // Throttle resize events
    let resizeTimer: NodeJS.Timeout;
    const optimizedResizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Resize handling logic
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      }, 250);
    };

    window.addEventListener('resize', optimizedResizeHandler, { passive: true });

    // Optimize touch events for mobile
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', () => {}, { passive: true });
    }

    // Setup performance monitoring
    if ('PerformanceObserver' in window) {
      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        window.performanceObserver = longTaskObserver;
      } catch (e) {
        // Longtask API not supported
        console.log('Longtask API not supported');
      }

      // Monitor memory usage
      if ('memory' in performance) {
        setInterval(() => {
          const memory = (performance as any).memory;
          if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.9) {
            console.warn('High memory usage detected');
          }
        }, 30000); // Check every 30 seconds
      }
    }

    // Setup Core Web Vitals reporting
    setupCoreWebVitalsReporting();
  };

  const setupCoreWebVitalsReporting = () => {
    // This would typically send data to an analytics service
    const reportWebVital = (metric: any) => {
      console.log('Web Vital:', metric);
      // Send to analytics service
      // gtag('event', metric.name, {
      //   value: Math.round(metric.value),
      //   metric_id: metric.id,
      //   metric_value: metric.value,
      //   metric_delta: metric.delta,
      // });
    };

    // Manual Core Web Vitals measurement
    if ('PerformanceObserver' in window) {
      // LCP measurement
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVital({
          name: 'LCP',
          value: lastEntry.startTime,
          id: 'manual-lcp'
        });
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID measurement
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          reportWebVital({
            name: 'FID',
            value: (entry as any).processingStart - entry.startTime,
            id: 'manual-fid'
          });
        });
      }).observe({ entryTypes: ['first-input'] });

      // CLS measurement
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        reportWebVital({
          name: 'CLS',
          value: clsValue,
          id: 'manual-cls'
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // FCP measurement
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            reportWebVital({
              name: 'FCP',
              value: entry.startTime,
              id: 'manual-fcp'
            });
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // TTFB measurement
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            reportWebVital({
              name: 'TTFB',
              value: navEntry.responseStart - navEntry.requestStart,
              id: 'manual-ttfb'
            });
          }
        });
      }).observe({ entryTypes: ['navigation'] });
    }
  };

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;