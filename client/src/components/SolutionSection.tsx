import Container from './Container'
import Section from './Section'
import Button from './Button'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { Phone, Zap, TrendingUp, CheckCircle } from 'lucide-react'

const iconMap = {
  phone: Phone,
  zap: Zap,
  'trending-up': TrendingUp,
  'check-circle': CheckCircle,
}

export default function SolutionSection() {
  const { locale } = useLanguage()
  const t = (messages[locale as keyof typeof messages] || messages.en) as any

  return (
    <Section className='bg-gradient-to-br from-green-50/50 to-blue-50/30'>
      <Container>
        <div id='solution' className='mx-auto mb-8 max-w-4xl text-center'>
          <h2 className='mb-3 text-3xl font-bold text-gray-900 md:text-4xl'>
            {t.home.solution.title}
          </h2>
          <p className='text-lg leading-relaxed text-gray-600 md:text-xl'>
            {t.home.solution.subtitle}
          </p>
        </div>

        {/* Solutions Grid - compact */}
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {t.home.solution.items.map((solution: any, index: number) => {
            const IconComponent = iconMap[solution.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className='rounded-xl border border-green-100 bg-white p-5 transition-colors duration-200 hover:border-green-200'
              >
                <div className='mb-3 flex items-start justify-between'>
                  <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200'>
                      <IconComponent className='h-6 w-6 text-green-600' />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900'>{solution.title}</h3>
                  </div>
                  <span className='rounded-full bg-green-600/10 px-2 py-1 text-xs font-semibold text-green-700'>
                    {solution.stat}
                  </span>
                </div>
                <p className='mb-3 text-sm leading-relaxed text-gray-600'>{solution.description}</p>
                <div className='flex items-center space-x-1 text-green-600 rtl:space-x-reverse'>
                  <CheckCircle className='h-4 w-4' />
                  <span className='text-xs font-medium'>{t.home.solution.provenLabel}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slim CTA bar */}
        <div className='mt-8'>
          <div className='rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 p-6 text-center text-white'>
            <div className='mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row'>
              <div className='text-left md:text-start'>
                <h3 className='text-2xl font-bold'>{t.home.cta.readyTitle}</h3>
                <p className='text-sm opacity-90'>{t.home.cta.readySubtitle}</p>
              </div>
              <div className='flex items-center gap-3'>
                <Button
                  size='sm'
                  className='bg-white px-5 font-semibold text-green-600 hover:bg-gray-100'
                >
                  {t.home.cta.startTrial}
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-2 border-white px-5 font-semibold text-white hover:bg-white hover:text-green-600'
                >
                  {t.home.cta.bookDemo}
                </Button>
              </div>
            </div>
            <div className='mt-4 flex items-center justify-center gap-6 text-xs opacity-90'>
              <div className='flex items-center gap-1'>
                <CheckCircle className='h-3 w-3' />
                <span>{t.home.cta.noSetup}</span>
              </div>
              <div className='flex items-center gap-1'>
                <CheckCircle className='h-3 w-3' />
                <span>{t.home.cta.cancelAnytime}</span>
              </div>
              <div className='flex items-center gap-1'>
                <CheckCircle className='h-3 w-3' />
                <span>{t.home.cta.support247}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
