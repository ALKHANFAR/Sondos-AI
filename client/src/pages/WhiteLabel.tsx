import { Check } from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function WhiteLabel() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  return (
    <Section>
      <Container>
        <div className='mb-16 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>{t.whiteLabel.title}</h1>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>{t.whiteLabel.subtitle}</p>
          <p className='mx-auto max-w-3xl text-gray-600'>{t.whiteLabel.description}</p>
        </div>

        <div className='mx-auto max-w-4xl'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div>
              <ul className='space-y-4'>
                {t.whiteLabel.features.map((feature, index) => (
                  <li key={index} className='flex items-center'>
                    <Check className='mr-3 h-6 w-6 text-primary' />
                    <span className='text-lg'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='rounded-2xl bg-white p-8 text-center shadow-custom'>
              <h3 className='mb-4 text-2xl font-bold'>{t.whiteLabel.readyTitle}</h3>
              <p className='mb-6 text-gray-600'>
                {t.whiteLabel.readyDescription}
              </p>
              <Button size='lg'>{t.whiteLabel.cta}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
