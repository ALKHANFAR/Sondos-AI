import React, { useEffect, useState } from 'react';

interface CoreWebVitals {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

interface PerformanceScore {
  overall: number;
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [vitals, setVitals] = useState<CoreWebVitals>({});
  const [score, setScore] = useState<PerformanceScore>({
    overall: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development mode
  useEffect(() => {
    setIsVisible(import.meta.env.DEV);
  }, []);

  const calculateScore = (metric: string, value: number): number => {
    switch (metric) {
      case 'lcp':
        if (value <= 2500) return 100;
        if (value <= 4000) return 75;
        return 25;
      case 'fid':
        if (value <= 100) return 100;
        if (value <= 300) return 75;
        return 25;
      case 'cls':
        if (value <= 0.1) return 100;
        if (value <= 0.25) return 75;
        return 25;
      case 'fcp':
        if (value <= 1800) return 100;
        if (value <= 3000) return 75;
        return 25;
      case 'ttfb':
        if (value <= 800) return 100;
        if (value <= 1800) return 75;
        return 25;
      default:
        return 0;
    }
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return '#0cce6b';
    if (score >= 50) return '#ffa400';
    return '#ff4e42';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 90) return 'ممتاز';
    if (score >= 50) return 'يحتاج تحسين';
    return 'ضعيف';
  };

  useEffect(() => {
    if (!isVisible) return;

    const observePerformance = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcpValue = Math.round(lastEntry.startTime);
          setVitals(prev => ({ ...prev, lcp: lcpValue }));
          setScore(prev => ({ ...prev, lcp: calculateScore('lcp', lcpValue) }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.processingStart && entry.startTime) {
            const fidValue = Math.round(entry.processingStart - entry.startTime);
            setVitals(prev => ({ ...prev, fid: fidValue }));
            setScore(prev => ({ ...prev, fid: calculateScore('fid', fidValue) }));
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        const roundedCLS = Math.round(clsValue * 1000) / 1000;
        setVitals(prev => ({ ...prev, cls: roundedCLS }));
        setScore(prev => ({ ...prev, cls: calculateScore('cls', roundedCLS) }));
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const fcpValue = Math.round(lastEntry.startTime);
          setVitals(prev => ({ ...prev, fcp: fcpValue }));
          setScore(prev => ({ ...prev, fcp: calculateScore('fcp', fcpValue) }));
        }
      }).observe({ entryTypes: ['paint'] });

      // Time to First Byte (TTFB)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.name === window.location.href) {
            const ttfbValue = Math.round(entry.responseStart - entry.requestStart);
            setVitals(prev => ({ ...prev, ttfb: ttfbValue }));
            setScore(prev => ({ ...prev, ttfb: calculateScore('ttfb', ttfbValue) }));
          }
        });
      }).observe({ entryTypes: ['navigation'] });
    };

    // Start observing performance
    if (document.readyState === 'complete') {
      observePerformance();
    } else {
      window.addEventListener('load', observePerformance);
    }

    return () => {
      window.removeEventListener('load', observePerformance);
    };
  }, [isVisible]);

  // Calculate overall score
  useEffect(() => {
    const scores = [score.lcp, score.fid, score.cls, score.fcp, score.ttfb];
    const validScores = scores.filter(s => s > 0);
    if (validScores.length > 0) {
      const overall = Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length);
      setScore(prev => ({ ...prev, overall }));
    }
  }, [score.lcp, score.fid, score.cls, score.fcp, score.ttfb]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-4 z-50 min-w-[320px] border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">
          مراقب الأداء المباشر
        </h3>
        <div className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: getScoreColor(score.overall) }}
          />
          <span className="text-xs font-medium" style={{ color: getScoreColor(score.overall) }}>
            {getScoreLabel(score.overall)} ({score.overall})
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {/* LCP */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">LCP:</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono">{vitals.lcp ? `${vitals.lcp}ms` : '...'}</span>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: vitals.lcp ? getScoreColor(score.lcp) : '#gray' }}
            />
          </div>
        </div>

        {/* FID */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">FID:</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono">{vitals.fid ? `${vitals.fid}ms` : '...'}</span>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: vitals.fid ? getScoreColor(score.fid) : '#gray' }}
            />
          </div>
        </div>

        {/* CLS */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">CLS:</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono">{vitals.cls !== undefined ? vitals.cls : '...'}</span>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: vitals.cls !== undefined ? getScoreColor(score.cls) : '#gray' }}
            />
          </div>
        </div>

        {/* FCP */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">FCP:</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono">{vitals.fcp ? `${vitals.fcp}ms` : '...'}</span>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: vitals.fcp ? getScoreColor(score.fcp) : '#gray' }}
            />
          </div>
        </div>

        {/* TTFB */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">TTFB:</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono">{vitals.ttfb ? `${vitals.ttfb}ms` : '...'}</span>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: vitals.ttfb ? getScoreColor(score.ttfb) : '#gray' }}
            />
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          التحديث المباشر • {new Date().toLocaleTimeString('ar-SA')}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;