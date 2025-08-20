import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { PhoneOff, Clock, DollarSign, UserX } from 'lucide-react'

const iconMap = {
  'phone-off': PhoneOff,
  clock: Clock,
  'dollar-sign': DollarSign,
  'user-x': UserX,
}

export default function ProblemsSection() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  return (
    <Section className='relative'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{
          background: 'linear-gradient(135deg, rgba(255,68,59,0.04), rgba(61,45,170,0.03))',
        }}
      ></div>
      <Container>
        {/* Header */}
        <div className='mx-auto mb-10 max-w-3xl text-center'>
          <h2 className='heading-2 mb-3 text-gray-900'>{t.home.problems.title}</h2>
          <p className='subtitle'>{t.home.problems.subtitle}</p>
        </div>

        {/* Problems Grid - compact */}
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {t.home.problems.items.map((problem: any, index: number) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className='rounded-xl border bg-white p-5 transition-colors duration-200 hover:bg-gray-50'
                style={{ borderColor: '#FFE1DE' }}
              >
                <div className='mb-3 flex items-start justify-between'>
                  <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <div
                      className='flex h-12 w-12 items-center justify-center rounded-xl'
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,68,59,0.12), rgba(61,45,170,0.10))',
                      }}
                    >
                      <IconComponent className='h-6 w-6' style={{ color: '#ff443b' }} />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900'>{problem.title}</h3>
                  </div>
                  <span
                    className='rounded-full px-2 py-1 text-xs font-semibold'
                    style={{ background: 'rgba(255,68,59,0.08)', color: '#b52e27' }}
                  >
                    {t.home.problems.impact}
                  </span>
                </div>
                <p className='body-lg leading-relaxed text-gray-600'>{problem.description}</p>
              </div>
            )
          })}
        </div>

        {/* Slim inline CTA */}
        <div className='mt-8 text-center'>
          <span className='text-sm text-gray-600'>{t.home.problems.soundsFamiliar}</span>{' '}
          <a href='#solution' className='text-sm font-semibold' style={{ color: '#ff443b' }}>
            {t.home.problems.ctaLabel}
          </a>
        </div>
      </Container>
    </Section>
  )
}
