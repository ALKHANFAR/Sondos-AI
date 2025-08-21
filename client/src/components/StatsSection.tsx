import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { TrendingUp, Users, Clock, Star } from 'lucide-react'

export default function StatsSection() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  // Fallback if stats.items is undefined
  const statsItems = t.stats?.items || []
  
  const stats = [
    {
      icon: Users,
      number: statsItems[0]?.number || '10,000+',
      label: statsItems[0]?.label || 'Active Users',
      description: statsItems[0]?.description || 'Global businesses scaling with AI',
    },
    {
      icon: TrendingUp,
      number: statsItems[1]?.number || '2.5M+',
      label: statsItems[1]?.label || 'Calls Handled',
      description: statsItems[1]?.description || 'Monthly successful conversations',
    },
    {
      icon: Clock,
      number: statsItems[2]?.number || '250%',
      label: statsItems[2]?.label || 'Average ROI',
      description: statsItems[2]?.description || 'Proven revenue increase',
    },
    {
      icon: Star,
      number: statsItems[3]?.number || '4.9/5',
      label: statsItems[3]?.label || 'Customer Rating',
      description: statsItems[3]?.description || 'From 2,850+ satisfied businesses',
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
          <h2 className='mb-6 text-4xl font-bold md:text-5xl'>{t.stats?.title || 'Transforming Businesses Worldwide'}</h2>
          <p className='mx-auto max-w-3xl text-xl opacity-90'>
            {t.stats?.subtitle || 'Join thousands of companies already experiencing the power of AI voice agents'}
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
