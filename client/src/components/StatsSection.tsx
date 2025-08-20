import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { TrendingUp, Users, Clock, Star } from 'lucide-react'

export default function StatsSection() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const stats = [
    {
      icon: Users,
      number: '2,500+',
      label: 'Active Users',
      description: 'Businesses worldwide trust our AI',
    },
    {
      icon: Clock,
      number: '500K+',
      label: 'Calls Handled',
      description: 'Successfully processed this month',
    },
    {
      icon: TrendingUp,
      number: '150%',
      label: 'Average ROI',
      description: 'Return on investment for customers',
    },
    {
      icon: Star,
      number: '4.7/5',
      label: 'Customer Rating',
      description: 'Based on 850+ reviews',
    },
  ]

  return (
    <Section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white'>
      {/* Background Animation */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute left-10 top-10 h-32 w-32 animate-pulse rounded-full border border-white'></div>
        <div className='absolute bottom-10 right-10 h-24 w-24 animate-pulse rounded-full border border-white delay-1000'></div>
        <div className='delay-2000 absolute left-1/4 top-1/2 h-16 w-16 animate-pulse rounded-full border border-white'></div>
      </div>

      <Container>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>Transforming Businesses Worldwide</h2>
          <p className='mx-auto max-w-3xl text-xl opacity-90'>
            Join hundreds of companies already experiencing the power of AI voice agents
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className='group text-center'>
                <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20'>
                  <IconComponent className='h-8 w-8 text-white' />
                </div>

                <div className='mb-2 text-4xl font-bold transition-transform duration-300 group-hover:scale-110 md:text-5xl'>
                  {stat.number}
                </div>

                <div className='mb-2 text-xl font-semibold opacity-90'>{stat.label}</div>

                <div className='mx-auto max-w-32 text-sm opacity-75'>{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <div className='inline-flex cursor-pointer items-center space-x-4 rounded-2xl bg-white/10 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20'>
            <TrendingUp className='h-6 w-6' />
            <span className='text-lg font-semibold'>See Your Business Grow</span>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  )
}
