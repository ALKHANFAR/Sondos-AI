import Container from '@/components/Container'
import Section from '@/components/Section'
import { useLanguage } from '@/hooks/useLanguage'

export default function Blog() {
  const { locale } = useLanguage()
  const isArabic = locale === 'ar'

  return (
    <div className='min-h-screen'>
      <Section className='py-20'>
        <Container>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
              {isArabic ? 'المدونة' : 'Blog'}
            </h1>
            <p className='text-xl leading-relaxed text-gray-600'>
              {isArabic
                ? 'آخر الأخبار والنصائح حول الذكاء الاصطناعي ووكلاء الصوت.'
                : 'Latest news, tips and insights about AI and voice agents.'}
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
