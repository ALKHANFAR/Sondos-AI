import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Locale, isRTL } from '@/lib/locales'

type LanguageContextValue = {
  locale: Locale
  changeLocale: (newLocale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function updateDocument(locale: Locale) {
  document.documentElement.lang = locale
  document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr'
  if (isRTL(locale)) {
    document.body.classList.add('font-arabic')
  } else {
    document.body.classList.remove('font-arabic')
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = (
      typeof window !== 'undefined' ? localStorage.getItem('locale') : null
    ) as Locale | null
    return saved ?? 'en'
  })

  useEffect(() => {
    updateDocument(locale)
  }, [locale])

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }, [])

  const value = useMemo(() => ({ locale, changeLocale }), [locale, changeLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    const [fallbackLocale, setFallbackLocale] = useState<Locale>('en')
    useEffect(() => updateDocument(fallbackLocale), [fallbackLocale])
    return {
      locale: fallbackLocale,
      changeLocale: (l: Locale) => setFallbackLocale(l),
    } as LanguageContextValue
  }
  return ctx
}
