import { locales, Locale } from './locales'
import { messages } from './messages'

export interface I18nConfig {
  locale: Locale
  messages: (typeof messages)[Locale]
  dir: 'ltr' | 'rtl'
}

export function getI18nConfig(locale: Locale = 'en'): I18nConfig {
  const isRTL = locale === 'ar'

  return {
    locale,
    messages: messages[locale] || messages.en,
    dir: isRTL ? 'rtl' : 'ltr',
  }
}

export function formatMessage(
  key: string,
  messages: any,
  params?: Record<string, string | number>,
): string {
  const keys = key.split('.')
  let value = messages

  for (const k of keys) {
    value = value?.[k]
  }

  if (typeof value !== 'string') {
    return key // Return key if translation not found
  }

  if (!params) {
    return value
  }

  // Simple parameter replacement
  return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
    return params[paramKey]?.toString() || match
  })
}

export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const browserLang = navigator.language.split('-')[0] as Locale
  return locales.includes(browserLang) ? browserLang : 'en'
}

export function setDocumentDirection(locale: Locale) {
  if (typeof document === 'undefined') return

  const isRTL = locale === 'ar'
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  document.documentElement.lang = locale

  if (isRTL) {
    document.body.classList.add('font-arabic')
  } else {
    document.body.classList.remove('font-arabic')
  }
}

// SEO and metadata helpers
export function getLocalizedMetadata(locale: Locale) {
  const t = messages[locale] || messages.en

  return {
    title: t.home.title + ' | AutoVoice',
    description: t.home.subtitle,
    keywords: 'AI voice agents, automated calls, business automation, customer support',
    author: 'AutoVoice',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'UTF-8',
  }
}

// JSON-LD structured data for SEO
export function getStructuredData(locale: Locale) {
  const t = messages[locale] || messages.en

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AutoVoice',
    description: t.home.subtitle,
    url: 'https://autovoice.ai',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '34',
      priceValidUntil: '2025-12-31',
    },
    provider: {
      '@type': 'Organization',
      name: 'AutoVoice',
      url: 'https://autovoice.ai',
    },
  }
}

export default {
  getI18nConfig,
  formatMessage,
  detectBrowserLocale,
  setDocumentDirection,
  getLocalizedMetadata,
  getStructuredData,
}
