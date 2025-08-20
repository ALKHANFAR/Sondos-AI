export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ar: '🇸🇦',
}

export const rtlLocales: Locale[] = ['ar']

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}
