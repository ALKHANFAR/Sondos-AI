import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  overall: 'good' | 'needs-improvement' | 'poor'
}

export default function PerformanceMonitor() {
  const { locale } = useLanguage()
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    overall: 'good'
  })

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcp = entries[entries.length - 1]
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }))
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries[entries.length - 1]
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }))
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fid = entries[entries.length - 1]
        if (fid) {
          const fidEntry = fid as PerformanceEntry & { processingStart: number; startTime: number }
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }))
      }

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    // Calculate overall performance score
    let score = 0
    let totalMetrics = 0

    if (metrics.fcp !== null) {
      score += metrics.fcp < 1800 ? 100 : metrics.fcp < 3000 ? 50 : 0
      totalMetrics++
    }

    if (metrics.lcp !== null) {
      score += metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 50 : 0
      totalMetrics++
    }

    if (metrics.fid !== null) {
      score += metrics.fid < 100 ? 100 : metrics.fid < 300 ? 50 : 0
      totalMetrics++
    }

    if (metrics.cls !== null) {
      score += metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 50 : 0
      totalMetrics++
    }

    if (metrics.ttfb !== null) {
      score += metrics.ttfb < 600 ? 100 : metrics.ttfb < 1800 ? 50 : 0
      totalMetrics++
    }

    if (totalMetrics > 0) {
      const averageScore = score / totalMetrics
      let overall: 'good' | 'needs-improvement' | 'poor'
      
      if (averageScore >= 90) overall = 'good'
      else if (averageScore >= 50) overall = 'needs-improvement'
      else overall = 'poor'

      setMetrics(prev => ({ ...prev, overall }))
    }
  }, [metrics.fcp, metrics.lcp, metrics.fid, metrics.cls, metrics.ttfb])

  const getScoreColor = (score: number, good: number, needsImprovement: number) => {
    if (score <= good) return 'text-green-600'
    if (score <= needsImprovement) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number, good: number, needsImprovement: number) => {
    if (score <= good) return locale === 'ar' ? 'ممتاز' : 'Good'
    if (score <= needsImprovement) return locale === 'ar' ? 'يحتاج تحسين' : 'Needs Improvement'
    return locale === 'ar' ? 'ضعيف' : 'Poor'
  }

  const isArabic = locale === 'ar'

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className={`font-semibold text-sm ${isArabic ? 'text-right' : 'text-left'}`}>
          {isArabic ? 'أداء الموقع' : 'Performance Monitor'}
        </h3>
        <div className={`flex items-center space-x-2 ${isArabic ? 'space-x-reverse' : ''}`}>
          <div className={`w-3 h-3 rounded-full ${
            metrics.overall === 'good' ? 'bg-green-500' : 
            metrics.overall === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {isArabic ? 
              (metrics.overall === 'good' ? 'ممتاز' : 
               metrics.overall === 'needs-improvement' ? 'يحتاج تحسين' : 'ضعيف') :
              metrics.overall.charAt(0).toUpperCase() + metrics.overall.slice(1)
            }
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {metrics.fcp !== null && (
          <div className="flex justify-between text-xs">
            <span className={isArabic ? 'text-right' : 'text-left'}>FCP:</span>
            <span className={getScoreColor(metrics.fcp, 1800, 3000)}>
              {Math.round(metrics.fcp)}ms {getScoreLabel(metrics.fcp, 1800, 3000)}
            </span>
          </div>
        )}

        {metrics.lcp !== null && (
          <div className="flex justify-between text-xs">
            <span className={isArabic ? 'text-right' : 'text-left'}>LCP:</span>
            <span className={getScoreColor(metrics.lcp, 2500, 4000)}>
              {Math.round(metrics.lcp)}ms {getScoreLabel(metrics.lcp, 2500, 4000)}
            </span>
          </div>
        )}

        {metrics.fid !== null && (
          <div className="flex justify-between text-xs">
            <span className={isArabic ? 'text-right' : 'text-left'}>FID:</span>
            <span className={getScoreColor(metrics.fid, 100, 300)}>
              {Math.round(metrics.fid)}ms {getScoreLabel(metrics.fid, 100, 300)}
            </span>
          </div>
        )}

        {metrics.cls !== null && (
          <div className="flex justify-between text-xs">
            <span className={isArabic ? 'text-right' : 'text-left'}>CLS:</span>
            <span className={getScoreColor(metrics.cls, 0.1, 0.25)}>
              {metrics.cls.toFixed(3)} {getScoreLabel(metrics.cls, 0.1, 0.25)}
            </span>
          </div>
        )}

        {metrics.ttfb !== null && (
          <div className="flex justify-between text-xs">
            <span className={isArabic ? 'text-right' : 'text-left'}>TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, 600, 1800)}>
              {Math.round(metrics.ttfb)}ms {getScoreLabel(metrics.ttfb, 600, 1800)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => window.location.reload()}
          className="w-full text-xs bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 transition-colors"
        >
          {isArabic ? 'إعادة تحميل' : 'Refresh'}
        </button>
      </div>
    </div>
  )
} 