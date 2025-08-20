import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <Section
      id='resources'
      className='bg-gradient-to-br from-red-200/20 via-white to-purple-100/20'
    >
      <Container>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900'>{t.resources.title}</h2>
        </div>

        <div className='mx-auto max-w-3xl space-y-4'>
          {t.resources.faq.map((faq, index) => (
            <div key={index} className='rounded-2xl bg-white shadow-custom'>
              <button
                className='flex w-full items-center justify-between rounded-2xl px-6 py-4 text-left transition-colors hover:bg-gray-50'
                onClick={() => toggleFaq(index)}
              >
                <span className='font-semibold'>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className='px-6 pb-4'>
                  <p className='text-gray-600'>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className='mt-12 text-center'>
          <div className='flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0 rtl:sm:space-x-reverse'>
            <a href='#changelog' className='font-medium text-primary hover:text-red-600'>
              {t.resources.links.changelog}
            </a>
            <a href='#status' className='font-medium text-primary hover:text-red-600'>
              {t.resources.links.status}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
