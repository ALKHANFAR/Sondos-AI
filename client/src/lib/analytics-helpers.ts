// Analytics helper functions
// This file separates utility functions from the Analytics component for better Fast Refresh support

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackConversion = (eventName: string, value?: number, currency = 'USD') => {
  // Google Analytics conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `G-XXXXXXXXXX/${eventName}`,
      value: value,
      currency: currency,
    })
  }

  // Facebook Pixel conversion
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      value: value,
      currency: currency,
    })
  }
}

export const trackDemoRequest = () => {
  trackEvent('demo_request', 'engagement', 'header_cta')
  trackConversion('Lead')

  // Facebook Pixel specific event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead')
  }
}

export const trackSignup = () => {
  trackEvent('sign_up', 'engagement', 'signup_form')
  trackConversion('CompleteRegistration')

  // Facebook Pixel specific event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration')
  }
}

export const trackPurchase = (value: number, currency = 'USD') => {
  trackEvent('purchase', 'ecommerce', 'subscription', value)
  trackConversion('Purchase', value, currency)

  // Facebook Pixel specific event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
    })
  }
} 