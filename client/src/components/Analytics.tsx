import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
  }
}

const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your Google Analytics ID
const FB_PIXEL_ID = 'XXXXXXXXXX' // Replace with your Facebook Pixel ID

export default function Analytics() {
  useEffect(() => {
    // Google Analytics
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    // Facebook Pixel
    const script3 = document.createElement('script')
    script3.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script3)

    // Add noscript for Facebook Pixel
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1" />
    `
    document.body.appendChild(noscript)

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1)
      document.head.removeChild(script2)
      document.head.removeChild(script3)
      document.body.removeChild(noscript)
    }
  }, [])

  return null
}

// Analytics component only - tracking functions moved to lib/analytics-helpers.ts
