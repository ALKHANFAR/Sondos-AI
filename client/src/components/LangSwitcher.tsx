import { useState } from 'react'
import { Globe, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { locales, localeNames, localeFlags, Locale } from '@/lib/locales'
import Button from './Button'

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, changeLocale } = useLanguage()

  const handleLanguageChange = (newLocale: Locale) => {
    changeLocale(newLocale)
    setIsOpen(false)

    // Show success toast
    const toast = document.createElement('div')
    toast.className =
      'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50'
    const msg =
      newLocale === 'ar'
        ? `تم تغيير اللغة إلى ${localeNames[newLocale]}`
        : `Language switched to ${localeNames[newLocale]}`
    toast.textContent = msg
    document.body.appendChild(toast)

    setTimeout(() => {
      toast.remove()
    }, 3000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='flex items-center text-gray-700 transition-colors hover:text-primary'
      >
        <Globe className='mr-1 h-4 w-4' />
        {locale.toUpperCase()}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
          <div className='mx-4 w-full max-w-sm rounded-2xl bg-white p-6'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>
                {locale === 'ar' ? 'اختر اللغة' : 'Select Language'}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              {locales.map(loc => (
                <button
                  key={loc}
                  className='flex items-center rounded-lg p-2 text-left hover:bg-gray-100'
                  onClick={() => handleLanguageChange(loc)}
                >
                  <span className='mr-2'>{localeFlags[loc]}</span>
                  {localeNames[loc]}
                </button>
              ))}
            </div>

            <Button variant='ghost' className='mt-4 w-full' onClick={() => setIsOpen(false)}>
              {locale === 'ar' ? 'إلغاء' : 'Cancel'}
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
