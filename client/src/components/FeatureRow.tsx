import { Check } from 'lucide-react'
import Container from './Container'
import Section from './Section'
import CalendarMock from './CalendarMock'
import CallTranscriptMock from './CallTranscriptMock'
import StatsCard from './StatsCard'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function FeatureRow() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  return (
    <Section id='solution'>
      <Container>
        {/* Feature 1: Calendar Integration */}
        <div className='mb-20 grid items-center gap-12 lg:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>
              {t.home.features.calendar.title}
            </h2>
            <ul className='mb-6 space-y-3'>
              {t.home.features.calendar.points.map((point, index) => (
                <li key={index} className='flex items-center'>
                  <Check className='mr-3 h-5 w-5 text-primary' />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <CalendarMock />
        </div>

        {/* Feature 2: Customer Support */}
        <div className='mb-20 grid items-center gap-12 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <CallTranscriptMock />
          </div>
          <div className='order-1 lg:order-2'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>
              {t.home.features.support.title}
            </h2>
            <ul className='space-y-3'>
              {t.home.features.support.points.map((point, index) => (
                <li key={index} className='flex items-center'>
                  <Check className='mr-3 h-5 w-5 text-primary' />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 3: Cold Calling */}
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>{t.home.features.sales.title}</h2>
            <ul className='space-y-3'>
              {t.home.features.sales.points.map((point, index) => (
                <li key={index} className='flex items-center'>
                  <Check className='mr-3 h-5 w-5 text-primary' />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <StatsCard
            title='Leads Performance'
            value='43.50%'
            description='Conversion rate this month'
            badge='On track'
            trend='up'
          />
        </div>
      </Container>
    </Section>
  )
}
