import { useEffect, useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

export default function PerformanceOptimizer() {
  const { locale } = useLanguage()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Optimize images with lazy loading
    optimizeImages()
    
    // Optimize fonts loading
    optimizeFonts()
    
    // Setup intersection observer for animations
    setupIntersectionObserver()
    
    // Preload critical resources
    preloadCriticalResources()
    
    // Setup service worker
    setupServiceWorker()

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const optimizeImages = () => {
    const images = document.querySelectorAll('img:not([data-optimized])')
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement
      
      // Add loading="lazy" to non-critical images
      if (!imgElement.classList.contains('critical-image')) {
        imgElement.loading = 'lazy'
      }
      
      // Add decoding="async" for better performance
      imgElement.decoding = 'async'
      
      // Mark as optimized
      imgElement.setAttribute('data-optimized', 'true')
    })
  }

  const optimizeFonts = () => {
    // Preload critical fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = '/fonts/inter-var.woff2'
    fontLink.as = 'font'
    fontLink.type = 'font/woff2'
    fontLink.crossOrigin = 'anonymous'
    document.head.appendChild(fontLink)

    // Add font-display: swap for better performance
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('/fonts/inter-var.woff2') format('woff2');
      }
    `
    document.head.appendChild(style)
  }

  const setupIntersectionObserver = () => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            
            // Add animation classes
            if (element.dataset.animate) {
              element.classList.add('animate-in')
            }
            
            // Load background images
            if (element.dataset.bgImage) {
              element.style.backgroundImage = `url(${element.dataset.bgImage})`
            }
            
            // Unobserve after animation
            observerRef.current?.unobserve(element)
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    // Observe elements with data attributes
    const animatedElements = document.querySelectorAll('[data-animate], [data-bg-image]')
    animatedElements.forEach((element) => {
      observerRef.current?.observe(element)
    })
  }

  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link')
    criticalCSS.rel = 'preload'
    criticalCSS.href = '/src/index.css'
    criticalCSS.as = 'style'
    document.head.appendChild(criticalCSS)

    // Preload critical JavaScript
    const criticalJS = document.createElement('link')
    criticalJS.rel = 'preload'
    criticalJS.href = '/src/main.tsx'
    criticalJS.as = 'script'
    document.head.appendChild(criticalJS)
  }

  const setupServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('Service Worker registered:', registration)
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available
                if (confirm(locale === 'ar' ? 'إصدار جديد متاح. هل تريد تحديث الصفحة؟' : 'New version available. Update page?')) {
                  window.location.reload()
                }
              }
            })
          }
        })
      } catch (error) {
        console.log('Service Worker registration failed:', error)
      }
    }
  }

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false
    
    const updateScroll = () => {
      ticking = false
      // Add scroll-based optimizations here
    }
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', requestTick)
    }
  }, [])

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout
    
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Handle resize optimizations
        optimizeImages()
      }, 250)
    }
    
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return null // This component doesn't render anything
} 