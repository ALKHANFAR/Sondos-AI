import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'
import ProblemsSection from '@/components/ProblemsSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import SEOHead from '@/components/SEOHead'

// Lazy load components below the fold for better performance
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'))
const StatsSection = lazy(() => import('@/components/StatsSection'))
const PlayCard = lazy(() => import('@/components/PlayCard'))
const FeatureRow = lazy(() => import('@/components/FeatureRow'))
const UseCases = lazy(() => import('@/components/UseCases'))
const PricingTable = lazy(() => import('@/components/PricingTable'))
const Integrations = lazy(() => import('@/components/Integrations'))
const Faq = lazy(() => import('@/components/Faq'))

import Container from '@/components/Container'
import Section from '@/components/Section'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function Home() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const playCards = [
    {
      title: t.home.cards.lisa,
      description: t.home.cardsDesc.lisa,
      gradientFrom: 'from-red-100',
      gradientTo: 'to-purple-100',
    },
    {
      title: t.home.cards.alex,
      description: t.home.cardsDesc.alex,
      gradientFrom: 'from-purple-100',
      gradientTo: 'to-red-100',
    },
    {
      title: t.home.cards.cold,
      description: t.home.cardsDesc.cold,
      gradientFrom: 'from-red-200',
      gradientTo: 'to-purple-200',
    },
  ]

  return (
    <>
      <SEOHead page="home" />
      {/* Hero */}
      <Hero />

      {/* Social Proof (Stats) */}
      <Suspense fallback={<LoadingSkeleton type='section' />}>
        <StatsSection />
      </Suspense>

      {/* Problems → Solution */}
      <ProblemsSection />
      <SolutionSection />

      {/* Features Grid */}
      <FeatureRow />

      {/* How it works */}
      <HowItWorksSection />

      {/* Live demos */}
      <Section className='bg-gradient-to-br from-red-200/40 via-white to-purple-100/30'>
        <Container>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-4xl font-bold text-gray-900'>{t.home.liveDemos.title}</h2>
            <p className='text-xl text-gray-600'>{t.home.liveDemos.subtitle}</p>
          </div>
          <div className='grid gap-8 md:grid-cols-3'>
            <Suspense
              fallback={
                <div className='grid gap-8 md:grid-cols-3'>
                  {[...Array(3)].map((_, i) => (
                    <LoadingSkeleton key={i} type='card' />
                  ))}
                </div>
              }
            >
              {playCards.map((card, index) => (
                <PlayCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  gradientFrom={card.gradientFrom}
                  gradientTo={card.gradientTo}
                  onPlay={() => trackEvent('demo_play', 'engagement', card.title)}
                />
              ))}
            </Suspense>
          </div>
        </Container>
      </Section>

      {/* Use cases */}
      <UseCases />

      {/* Integrations */}
      <Suspense fallback={<LoadingSkeleton type='section' />}>
        <Integrations />
      </Suspense>

      {/* Testimonials */}
      <Suspense fallback={<LoadingSkeleton type='testimonial' />}>
        <TestimonialsSection />
      </Suspense>

      {/* Pricing */}
      <Suspense fallback={<LoadingSkeleton type='pricing' />}>
        <PricingTable />
      </Suspense>

      {/* FAQ */}
      <Suspense fallback={<LoadingSkeleton type='section' />}>
        <Faq />
      </Suspense>
    </>
  )
}
