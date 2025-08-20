import { useEffect } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function Login() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  // Redirect to external login page
  useEffect(() => {
    window.location.href = 'https://app.sondos-ai.com/login'
  }, [])

  return (
    <Section>
      <Container>
        <div className='mx-auto max-w-md py-20 text-center'>
          <div className='rounded-2xl bg-white p-8 shadow-custom'>
            <h1 className='mb-4 text-2xl font-bold'>{t.auth.loginTitle}</h1>
            <p className='text-gray-600'>
              {locale === 'ar' 
                ? 'جاري التحويل إلى صفحة تسجيل الدخول...'
                : 'Redirecting to login page...'
              }
            </p>
            <div className='mt-6'>
              <div className='animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto'></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}