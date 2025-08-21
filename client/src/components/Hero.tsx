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
    <Section 
      className='relative flex min-h-screen items-center overflow-hidden pt-20'
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* Enhanced Background with brand gradient mesh */}
      <div 
        className='pointer-events-none absolute inset-0 overflow-hidden'
        aria-hidden="true"
      >
        <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(135deg, rgba(61,45,170,0.06), rgba(255,68,59,0.05))',
          }}
        ></div>
        <div
          className='hero-bg-blur hero-bg-blur--primary absolute -left-20 top-10 h-96 w-96 animate-pulse rounded-full'
          style={{
            background: 'linear-gradient(90deg, rgba(61,45,170,0.18), rgba(255,68,59,0.12))',
          }}
        ></div>
        <div
          className='hero-bg-blur hero-bg-blur--secondary absolute -right-32 top-1/3 h-80 w-80 animate-pulse rounded-full delay-1000'
          style={{
            background: 'linear-gradient(90deg, rgba(255,68,59,0.15), rgba(61,45,170,0.12))',
          }}
        ></div>
        <div
          className='hero-bg-blur hero-bg-blur--tertiary delay-2000 absolute bottom-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full'
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
            <div 
              className='hero-badges animate-fade-in-up flex items-center space-x-4 text-sm text-gray-600 rtl:space-x-reverse'
              role="list"
              aria-label={locale === 'ar' ? 'شارات الثقة' : 'Trust badges'}
            >
              <div className='hero-badge flex items-center space-x-1 rtl:space-x-reverse' role="listitem">
                <CheckCircle 
                  className='h-4 w-4 text-green-500' 
                  aria-hidden="true"
                />
                <span>{t.home.badges.customers}</span>
              </div>
              <div className='hero-badge flex items-center space-x-1 rtl:space-x-reverse' role="listitem">
                <TrendingUp 
                  className='h-4 w-4 text-blue-500' 
                  aria-hidden="true"
                />
                <span>{t.home.badges.uptime}</span>
              </div>
              <div className='hero-badge flex items-center space-x-1 rtl:space-x-reverse' role="listitem">
                <Users 
                  className='h-4 w-4 text-purple-500' 
                  aria-hidden="true"
                />
                <span>{t.home.badges.support}</span>
              </div>
            </div>

            {/* Main headline */}
            <div className='hero-content space-y-4'>
              <h1 
                id="hero-title"
                className='heading-1'
                role="heading"
                aria-level={1}
              >
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
              <p 
                className='subtitle max-w-2xl'
                role="text"
                aria-describedby="hero-title"
              >
                {t.home.subtitle}
              </p>
            </div>

            {/* Key benefits highlight */}
            <div
              className='hero-kpis rounded-2xl border p-6'
              style={{
                borderColor: '#EEF2F7',
                background: 'linear-gradient(90deg, rgba(61,45,170,0.06), rgba(255,68,59,0.05))',
              }}
              role="region"
              aria-labelledby="kpis-title"
            >
              <div 
                className='grid gap-4 text-center md:grid-cols-3'
                role="list"
                aria-label={locale === 'ar' ? 'مؤشرات الأداء الرئيسية' : 'Key Performance Indicators'}
              >
                <div 
                  className='hero-kpi'
                  role="listitem"
                  aria-labelledby="pickup-rate-value pickup-rate-label"
                >
                  <div 
                    id="pickup-rate-value"
                    className='text-2xl font-bold' 
                    style={{ color: '#ff443b' }}
                    aria-label="100 percent"
                  >
                    100%
                  </div>
                  <div 
                    id="pickup-rate-label"
                    className='text-sm text-gray-600'
                  >
                    {t.home.kpis.pickupRate}
                  </div>
                </div>
                <div 
                  className='hero-kpi'
                  role="listitem"
                  aria-labelledby="response-time-value response-time-label"
                >
                  <div 
                    id="response-time-value"
                    className='text-2xl font-bold' 
                    style={{ color: '#3d2daa' }}
                    aria-label="5 times"
                  >
                    5x
                  </div>
                  <div 
                    id="response-time-label"
                    className='text-sm text-gray-600'
                  >
                    {t.home.kpis.fasterResponse}
                  </div>
                </div>
                <div 
                  className='hero-kpi'
                  role="listitem"
                  aria-labelledby="cost-reduction-value cost-reduction-label"
                >
                  <div 
                    id="cost-reduction-value"
                    className='text-2xl font-bold text-green-600'
                    aria-label="90 percent"
                  >
                    90%
                  </div>
                  <div 
                    id="cost-reduction-label"
                    className='text-sm text-gray-600'
                  >
                    {t.home.kpis.costReduction}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA buttons with urgency */}
            <div 
              className='hero-actions space-y-4'
              role="group"
              aria-labelledby="cta-section-title"
            >
              {/* Primary CTA with urgency */}
              <div className='hero-primary-cta relative'>
                <Button
                  size='lg'
                  onClick={() => {
                    trackDemoRequest()
                    trackEvent('hero_cta_click', 'engagement', 'primary_demo_button')
                  }}
                  className='group relative w-full overflow-hidden px-8 py-4 text-lg font-semibold text-white shadow-lg sm:w-auto'
                  style={{ background: 'linear-gradient(90deg, #ff443b, #e63b33)' }}
                  aria-describedby="demo-description"
                  aria-label={`${t.home.liveDemo}${t.home.liveDemoDuration}`}
                >
                  <span className='relative z-10 flex items-center justify-center'>
                    {t.home.liveDemo}
                    {t.home.liveDemoDuration}
                  </span>
                  <div 
                    className='absolute inset-0 translate-x-full bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 group-hover:translate-x-0'
                    aria-hidden="true"
                  ></div>
                </Button>
                {/* Urgency badge */}
                <div 
                  className='hero-badge--free absolute -right-2 -top-2 animate-pulse rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-black'
                  aria-label={locale === 'ar' ? 'مجاني' : 'Free'}
                  role="note"
                >
                  {t.home.freeLabel}
                </div>
              </div>

              {/* Secondary CTA */}
              <div className='hero-secondary-actions flex flex-col items-start space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 rtl:sm:space-x-reverse'>
                <Button
                  variant='outline'
                  size='lg'
                  className='hero-btn--secondary group border-2 px-6 py-3 text-base font-semibold transition-all'
                  style={{ borderColor: '#3d2daa' }}
                  aria-label={t.home.tryFree}
                >
                  <Play 
                    className='mr-2 h-5 w-5 transition-colors' 
                    style={{ color: '#3d2daa' }} 
                    aria-hidden="true"
                  />
                  {t.home.tryFree}
                </Button>

                {/* Social proof mini CTA */}
                <div 
                  className='hero-social-proof flex items-center space-x-2 text-sm text-gray-600 rtl:space-x-reverse'
                  role="group"
                  aria-label={locale === 'ar' ? 'إثبات اجتماعي' : 'Social proof'}
                >
                  <div 
                    className='flex -space-x-2'
                    role="presentation"
                    aria-hidden="true"
                  >
                    <div className='hero-avatar hero-avatar--blue flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-bold text-white'>
                      J
                    </div>
                    <div className='hero-avatar hero-avatar--green flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-green-600 text-xs font-bold text-white'>
                      S
                    </div>
                    <div className='hero-avatar hero-avatar--purple flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-purple-600 text-xs font-bold text-white'>
                      M
                    </div>
                  </div>
                  <span className='font-medium'>{t.home.socialProofBookedToday}</span>
                </div>
              </div>
            </div>

            {/* Trust text */}
            <p 
              className='hero-trust-text flex items-center space-x-2 text-sm text-gray-500 rtl:space-x-reverse'
              role="note"
              aria-label={locale === 'ar' ? 'نص الثقة' : 'Trust indicator'}
            >
              <CheckCircle 
                className='h-4 w-4 text-green-500' 
                aria-hidden="true"
              />
              <span>{t.home.trustText}</span>
            </p>
          </div>

          {/* Right side - Demo Form or Visual */}
          <aside 
            className='hero-demo-section relative' 
            id='demo'
            role="complementary"
            aria-labelledby="demo-form-title"
          >
            {/* Enhanced demo form container */}
            <div 
              className='relative z-10'
              role="main"
            >
              <DemoCallForm />
            </div>

            {/* Background decoration */}
            <div
              className='hero-demo-bg absolute inset-0 -rotate-3 scale-105 rounded-3xl opacity-50'
              style={{
                background: 'linear-gradient(135deg, rgba(61,45,170,0.12), rgba(255,68,59,0.10))',
              }}
              aria-hidden="true"
            ></div>
          </aside>
        </div>

        {/* Bottom section - Social proof marquee */}
        <LogoMarquee />
      </Container>
    </Section>
  )
}
