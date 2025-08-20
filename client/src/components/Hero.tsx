import Container from './Container'
import Section from './Section'
import Button from './Button'
import DemoCallForm from './DemoCallForm'
import LogoMarquee from './LogoMarquee'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { trackDemoRequest, trackEvent } from '@/components/Analytics'
import { Play, CheckCircle, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  return (
    <Section className='relative flex min-h-screen items-center overflow-hidden pt-20'>
      {/* Enhanced Background with brand gradient mesh */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(135deg, rgba(61,45,170,0.06), rgba(255,68,59,0.05))',
          }}
        ></div>
        <div
          className='blur-blob absolute -left-20 top-10 h-96 w-96 animate-pulse rounded-full'
          style={{
            background: 'linear-gradient(90deg, rgba(61,45,170,0.18), rgba(255,68,59,0.12))',
          }}
        ></div>
        <div
          className='blur-blob absolute -right-32 top-1/3 h-80 w-80 animate-pulse rounded-full delay-1000'
          style={{
            background: 'linear-gradient(90deg, rgba(255,68,59,0.15), rgba(61,45,170,0.12))',
          }}
        ></div>
        <div
          className='blur-blob delay-2000 absolute bottom-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full'
          style={{
            background: 'linear-gradient(45deg, rgba(61,45,170,0.14), rgba(255,68,59,0.10))',
          }}
        ></div>
      </div>

      <Container>
        <div className='grid items-center gap-10 lg:grid-cols-2 xl:gap-16'>
          {/* Left side - Main Content */}
          <div className='space-y-8'>
            {/* Trust badges */}
            <div className='animate-fade-in-up flex items-center space-x-4 text-sm text-gray-600 rtl:space-x-reverse'>
              <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                <CheckCircle className='h-4 w-4 text-green-500' />
                <span>{t.home.badges.customers}</span>
              </div>
              <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                <TrendingUp className='h-4 w-4 text-blue-500' />
                <span>{t.home.badges.uptime}</span>
              </div>
              <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                <Users className='h-4 w-4 text-purple-500' />
                <span>{t.home.badges.support}</span>
              </div>
            </div>

            {/* Main headline */}
            <div className='space-y-4'>
              <h1 className='heading-1'>
                <span className='text-gradient-primary'>
                  {locale === 'ar' ? 'ولا مكالمة تروح عليك' : 'Never miss a call'}
                </span>
                <br />
                <span className='text-gradient-accent'>
                  {locale === 'ar'
                    ? 'وكلاؤنا بالذكاء الاصطناعي دايمًا يردّون'
                    : 'AI voice agents that always answer'}
                </span>
              </h1>
              <p className='subtitle max-w-2xl'>{t.home.subtitle}</p>
            </div>

            {/* Key benefits highlight */}
            <div
              className='rounded-2xl border p-6'
              style={{
                borderColor: '#EEF2F7',
                background: 'linear-gradient(90deg, rgba(61,45,170,0.06), rgba(255,68,59,0.05))',
              }}
            >
              <div className='grid gap-4 text-center md:grid-cols-3'>
                <div>
                  <div className='text-2xl font-bold' style={{ color: '#ff443b' }}>
                    100%
                  </div>
                  <div className='text-sm text-gray-600'>{t.home.kpis.pickupRate}</div>
                </div>
                <div>
                  <div className='text-2xl font-bold' style={{ color: '#3d2daa' }}>
                    5x
                  </div>
                  <div className='text-sm text-gray-600'>{t.home.kpis.fasterResponse}</div>
                </div>
                <div>
                  <div className='text-2xl font-bold text-green-600'>90%</div>
                  <div className='text-sm text-gray-600'>{t.home.kpis.costReduction}</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA buttons with urgency */}
            <div className='space-y-4'>
              {/* Primary CTA with urgency */}
              <div className='relative'>
                <Button
                  size='lg'
                  onClick={() => {
                    trackDemoRequest()
                    trackEvent('hero_cta_click', 'engagement', 'primary_demo_button')
                  }}
                  className='group relative w-full overflow-hidden px-8 py-4 text-lg font-semibold text-white shadow-lg sm:w-auto'
                  style={{ background: 'linear-gradient(90deg, #ff443b, #e63b33)' }}
                >
                  <span className='relative z-10 flex items-center justify-center'>
                    {t.home.liveDemo}
                    {t.home.liveDemoDuration}
                  </span>
                  <div className='absolute inset-0 translate-x-full bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 group-hover:translate-x-0'></div>
                </Button>
                {/* Urgency badge */}
                <div className='absolute -right-2 -top-2 animate-pulse rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-black'>
                  {t.home.freeLabel}
                </div>
              </div>

              {/* Secondary CTA */}
              <div className='flex flex-col items-start space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 rtl:sm:space-x-reverse'>
                <Button
                  variant='outline'
                  size='lg'
                  className='group border-2 px-6 py-3 text-base font-semibold transition-all'
                  style={{ borderColor: '#3d2daa' }}
                >
                  <Play className='mr-2 h-5 w-5 transition-colors' style={{ color: '#3d2daa' }} />
                  {t.home.tryFree}
                </Button>

                {/* Social proof mini CTA */}
                <div className='flex items-center space-x-2 text-sm text-gray-600 rtl:space-x-reverse'>
                  <div className='flex -space-x-2'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-bold text-white'>
                      J
                    </div>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-green-600 text-xs font-bold text-white'>
                      S
                    </div>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-purple-600 text-xs font-bold text-white'>
                      M
                    </div>
                  </div>
                  <span className='font-medium'>{t.home.socialProofBookedToday}</span>
                </div>
              </div>
            </div>

            {/* Trust text */}
            <p className='flex items-center space-x-2 text-sm text-gray-500 rtl:space-x-reverse'>
              <CheckCircle className='h-4 w-4 text-green-500' />
              <span>{t.home.trustText}</span>
            </p>
          </div>

          {/* Right side - Demo Form or Visual */}
          <div className='relative' id='demo'>
            {/* Enhanced demo form container */}
            <div className='relative z-10'>
              <DemoCallForm />
            </div>

            {/* Background decoration */}
            <div
              className='absolute inset-0 -rotate-3 scale-105 rounded-3xl opacity-50'
              style={{
                background: 'linear-gradient(135deg, rgba(61,45,170,0.12), rgba(255,68,59,0.10))',
              }}
            ></div>
          </div>
        </div>

        {/* Bottom section - Social proof marquee */}
        <LogoMarquee />
      </Container>
    </Section>
  )
}
