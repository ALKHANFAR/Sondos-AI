import { useState } from 'react'
import {
  CheckCircle,
  Star,
  Users,
  Zap,
  ArrowRight,
  Phone,
  Check,
  X,
  MessageSquare,
  BarChart,
} from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import CostCalculator from '@/components/CostCalculator'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { trackEvent } from '@/lib/analytics-helpers'
import SEOHead from '@/components/SEOHead'

export default function Pricing() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en


  const [isYearly, setIsYearly] = useState(false)
  


  const plans = [
    {
      name: locale === 'ar' ? t.pricing.plans.basic.name : 'Basic Package',
      subtitle: locale === 'ar' ? t.pricing.plans.basic.subtitle : 'Smart Start',
      description:
        locale === 'ar'
          ? 'مثالي للشركات الصغيرة التي تبدأ مع وكلاء الصوت الذكيين.'
          : 'Ideal for small businesses getting started with AI voice agents.',
      price: locale === 'ar' ? (isYearly ? '792 ريال' : '990 ريال') : isYearly ? '$211' : '$264',
      originalPrice: isYearly ? (locale === 'ar' ? '990 ريال' : '$264') : null,
      currency: '',
      period: locale === 'ar' ? '/شهرياً' : '/month',
      popular: false,
      gradient: 'from-emerald-500 to-teal-600',
      icon: '💡',
      features:
        locale === 'ar'
          ? t.pricing.plans.basic.features
          : [
              '700 included minutes',
              '2 virtual assistants',
              '5 concurrent calls',
              '2 campaigns',
              '1 voice clone + WhatsApp support',
              'Extra minute: $0.19',
              'Email support',
            ],
      highlight: locale === 'ar' ? 'الأكثر اقتصادية' : 'Most affordable',
    },
    {
      name: locale === 'ar' ? t.pricing.plans.professional.name : 'Professional Package',
      subtitle: locale === 'ar' ? t.pricing.plans.professional.subtitle : 'Growth & Expansion',
      description:
        locale === 'ar'
          ? 'مثالي للشركات النامية الجاهزة لتوسيع عملياتها.'
          : 'Ideal for growing businesses ready to scale their operations.',
      price:
        locale === 'ar' ? (isYearly ? '1,992 ريال' : '2,490 ريال') : isYearly ? '$531' : '$664',
      originalPrice: isYearly ? (locale === 'ar' ? '2,490 ريال' : '$664') : null,
      currency: '',
      period: locale === 'ar' ? '/شهرياً' : '/month',
      popular: true,
      gradient: 'from-blue-500 to-indigo-600',
      icon: '🚀',
      features:
        locale === 'ar'
          ? t.pricing.plans.professional.features
          : [
              '3,000 included minutes',
              'Multiple virtual assistants',
              '50 concurrent calls',
              'Multiple campaigns',
              '5 voice clones',
              '20,000 automation runs',
              'Free local number',
              'Priority support',
              'Extra minute: $0.16',
            ],
      highlight: locale === 'ar' ? t.pricing.plans.professional.popular : 'Most popular',
    },
    {
      name: locale === 'ar' ? t.pricing.plans.enterprise.name : 'Enterprise Package',
      subtitle: locale === 'ar' ? t.pricing.plans.enterprise.subtitle : 'Superior Performance',
      description:
        locale === 'ar'
          ? 'للمؤسسات الكبيرة التي تتطلب ميزات على مستوى المؤسسات.'
          : 'For large organizations requiring enterprise-grade features.',
      price:
        locale === 'ar' ? (isYearly ? '4,792 ريال' : '5,990 ريال') : isYearly ? '$1,278' : '$1,597',
      originalPrice: isYearly ? (locale === 'ar' ? '5,990 ريال' : '$1,597') : null,
      currency: '',
      period: locale === 'ar' ? '/شهرياً' : '/month',
      popular: false,
      gradient: 'from-purple-500 to-pink-600',
      icon: '⚡',
      features:
        locale === 'ar'
          ? t.pricing.plans.enterprise.features
          : [
              '8,000 included minutes',
              'Multiple virtual assistants',
              '500 concurrent calls',
              'Multiple campaigns',
              '10 voice clones',
              'Advanced automation',
              'Full CRM & API integration',
              'Premium local number',
              'Dedicated account manager',
              'Extra minute: $0.15',
            ],
      highlight: locale === 'ar' ? 'أفضل قيمة' : 'Best value',
    },
    {
      name: locale === 'ar' ? t.pricing.plans.corporate.name : 'Corporate Package',
      subtitle: locale === 'ar' ? t.pricing.plans.corporate.subtitle : 'Custom Enterprise',
      description:
        locale === 'ar'
          ? 'حلول مخصصة للشركات الكبيرة والجهات الحكومية.'
          : 'Tailored solutions for large corporations and government entities.',
      price: locale === 'ar' ? 'تواصل معنا' : 'Contact us',
      originalPrice: null,
      currency: '',
      period: locale === 'ar' ? '/لعرض مخصص' : '/custom quote',
      popular: false,
      gradient: 'from-amber-500 to-orange-600',
      icon: '👑',
      features:
        locale === 'ar'
          ? t.pricing.plans.corporate.features
          : [
              'High-volume minutes & calls',
              'Massive virtual agent deployment',
              '24/7 VIP dedicated support',
              'Full system integration',
              'Global secure infrastructure',
              'Strategic consulting',
              'Custom SLA agreements',
              'White-label options',
              'Advanced security features',
            ],
      highlight: locale === 'ar' ? 'مستوى المؤسسات' : 'Enterprise grade',
      isCustom: true,
    },
  ]

  const comparisonData = {
    categories: [
      {
        name: 'Core Features',
        features: [
          {
            name: 'Virtual Assistants',
            basic: '2',
            professional: 'Multiple',
            enterprise: 'Multiple',
            corporate: 'Many',
          },
          {
            name: 'Concurrent Calls',
            basic: '5',
            professional: '50',
            enterprise: '500',
            corporate: 'Unlimited',
          },
          {
            name: 'Campaigns',
            basic: '2',
            professional: 'Multiple',
            enterprise: 'Multiple',
            corporate: 'Many',
          },
          {
            name: 'Voice Clones',
            basic: '1',
            professional: '5',
            enterprise: '10',
            corporate: 'Unlimited',
          },
          {
            name: 'Multi-language Support',
            basic: true,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'WhatsApp Integration',
            basic: true,
            professional: true,
            enterprise: true,
            corporate: true,
          },
        ],
      },
      {
        name: 'Minutes & Pricing',
        features: [
          {
            name: 'Included Minutes/Month',
            basic: '700',
            professional: '3,000',
            enterprise: '8,000',
            corporate: 'High-volume',
          },
          {
            name: 'Extra Minute Cost',
            basic: locale === 'ar' ? '0.70 ريال' : '$0.19',
            professional: locale === 'ar' ? '0.60 ريال' : '$0.16',
            enterprise: locale === 'ar' ? '0.55 ريال' : '$0.15',
            corporate: 'Custom',
          },
          {
            name: isYearly ? (locale === 'ar' ? 'السعر السنوي' : 'Annual Price') : (locale === 'ar' ? 'السعر الشهري' : 'Monthly Price'),
            basic: isYearly 
              ? (locale === 'ar' ? '792 ريال' : '$211')
              : (locale === 'ar' ? '990 ريال' : '$264'),
            professional: isYearly 
              ? (locale === 'ar' ? '1,992 ريال' : '$531')
              : (locale === 'ar' ? '2,490 ريال' : '$664'),
            enterprise: isYearly 
              ? (locale === 'ar' ? '4,792 ريال' : '$1,278')
              : (locale === 'ar' ? '5,990 ريال' : '$1,597'),
            corporate: 'Custom Quote',
          },
          {
            name: 'Annual Discount',
            basic: '20%',
            professional: '20%',
            enterprise: '20%',
            corporate: 'Custom',
          },
        ],
      },
      {
        name: 'Phone & Connectivity',
        features: [
          {
            name: 'Saudi Phone Number',
            basic: false,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'Premium Number',
            basic: false,
            professional: false,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'SIP Trunk Integration',
            basic: true,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'Global Numbers',
            basic: false,
            professional: false,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'SMS Capabilities',
            basic: false,
            professional: true,
            enterprise: true,
            corporate: true,
          },
        ],
      },
      {
        name: 'Automation & Integration',
        features: [
          {
            name: 'Automation Runs/Month',
            basic: false,
            professional: '20,000',
            enterprise: 'Advanced',
            corporate: 'Full',
          },
          {
            name: 'CRM Integration',
            basic: false,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'API Access',
            basic: false,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'Custom Integrations',
            basic: false,
            professional: false,
            enterprise: true,
            corporate: true,
          },
          { name: 'Webhooks', basic: false, professional: true, enterprise: true, corporate: true },
          {
            name: 'White-label Options',
            basic: false,
            professional: false,
            enterprise: false,
            corporate: true,
          },
        ],
      },
      {
        name: 'Support & SLA',
        features: [
          {
            name: 'Email Support',
            basic: true,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'Priority Support',
            basic: false,
            professional: true,
            enterprise: true,
            corporate: true,
          },
          {
            name: 'Dedicated Account Manager',
            basic: false,
            professional: false,
            enterprise: true,
            corporate: true,
          },
          {
            name: '24/7 VIP Support',
            basic: false,
            professional: false,
            enterprise: false,
            corporate: true,
          },
          {
            name: 'SLA Guarantee',
            basic: false,
            professional: false,
            enterprise: '99.9%',
            corporate: 'Custom',
          },
          {
            name: 'Strategic Consulting',
            basic: false,
            professional: false,
            enterprise: false,
            corporate: true,
          },
        ],
      },
    ],
  }

  const pricingFAQs = [
    {
      question: 'How does Sondos AI pricing work?',
      answer:
        'Our transparent pricing includes a monthly subscription with included minutes and features. Each plan is designed for different business sizes - from startups to enterprises. You only pay for what you use beyond the included minutes at competitive per-minute rates.',
    },
    {
      question: 'What happens if I exceed my included minutes?',
      answer:
        "If you exceed your plan's included minutes, you'll be charged at the plan's per-minute rate (0.70 SAR for Basic, 0.60 SAR for Professional, 0.55 SAR for Enterprise). You can monitor usage in real-time and set alerts to avoid surprises.",
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer:
        'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle. All changes are prorated automatically.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        "Yes, we offer a 14-day free trial with no credit card required. You'll get access to all features of the Professional plan so you can experience the full power of Sondos AI.",
    },
    {
      question: "What's included in the setup process?",
      answer:
        'All plans include free setup with no additional fees. Our team provides onboarding support, training, and helps you configure your first AI voice agent. Enterprise plans include dedicated implementation support.',
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer:
        'Yes! Our Corporate Package offers fully customized solutions for large organizations. This includes high-volume usage, dedicated infrastructure, white-label options, and strategic consulting to meet your specific requirements.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, bank transfers, and can accommodate purchase orders for enterprise clients. Annual plans can be paid via invoice for qualifying businesses.',
    },
    {
      question: 'Is there a long-term contract requirement?',
      answer:
        'No contracts required! All plans are month-to-month. Annual plans offer 20% savings but are not binding - you can cancel anytime. Enterprise plans may have custom terms based on your needs.',
    },
  ]

  const renderValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className='mx-auto h-5 w-5 text-green-500' />
      ) : (
        <X className='mx-auto h-5 w-5 text-red-500' />
      )
    }
    return <span className='font-medium text-gray-900'>{value}</span>
  }

  return (
    <>
      <SEOHead page="pricing" />
      {/* Hero Section */}
      <Section className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pb-20 pt-32'>
        {/* Background Elements */}
        <div className='absolute inset-0'>
          <div className='absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/20 blur-3xl'></div>
          <div className='delay-2000 absolute bottom-10 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl'></div>
          <div className='absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl'></div>
        </div>

        <Container className='relative z-10'>
          <div className='mb-20 text-center'>
            {/* Badge */}
            <div className='mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm'>
              <Zap className='mr-2 h-4 w-4' />
              {t.pricingPage.trustedBadge}
            </div>

            {/* Main Heading */}
            <h1 className='mb-8 text-6xl font-bold leading-tight text-white md:text-7xl'>
              {t.pricingPage.heroTitle}
              <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {t.pricingPage.heroTitleHighlight}
              </span>
            </h1>

            {/* Subheading */}
            <p className='mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-blue-100 md:text-2xl'>
              {t.pricingPage.heroDescription}
            </p>

            {/* Stats */}
            <div className='mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4'>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-white'>99.5%</div>
                <div className='text-sm text-blue-200'>{t.pricingPage.stats.uptime}</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-white'>50ms</div>
                <div className='text-sm text-blue-200'>{t.pricingPage.stats.responseTime}</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-white'>2.5K+</div>
                <div className='text-sm text-blue-200'>{t.pricingPage.stats.activeUsers}</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-3xl font-bold text-white'>24/7</div>
                <div className='text-sm text-blue-200'>{t.pricingPage.stats.support}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Button
                size='lg'
                onClick={() => trackEvent('pricing_hero_cta', 'conversion', 'start_free_trial')}
                className='bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-xl hover:from-blue-700 hover:to-purple-700'
              >
                <Star className='mr-2 h-5 w-5' />
                {t.pricingPage.startFreeTrial}
              </Button>
              <Button
                size='lg'
                variant='outline'
                onClick={() => trackEvent('pricing_hero_cta', 'engagement', 'view_demo')}
                className='border-2 border-blue-400 px-10 py-4 text-lg text-blue-200 backdrop-blur-sm hover:bg-blue-500/20'
              >
                {t.pricingPage.viewDemo}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className='mt-8 flex items-center justify-center text-sm text-blue-200'>
              <Check className='mr-2 h-4 w-4' />
              {t.pricingPage.trustIndicators.noCreditCard}
              <span className='mx-3'>•</span>
              <Check className='mr-2 h-4 w-4' />
              {t.pricingPage.trustIndicators.freeTrial}
              <span className='mx-3'>•</span>
              <Check className='mr-2 h-4 w-4' />
              {t.pricingPage.trustIndicators.cancelAnytime}
            </div>
          </div>
        </Container>
      </Section>

      {/* Cost Calculator */}
      <CostCalculator />

      {/* Social Proof & Trust Indicators */}
      <Section className='border-y border-gray-200 bg-white'>
        <Container>
          <div className='py-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>
              {t.pricingPage.socialProof.title}
            </h2>
            <p className='mx-auto mb-12 max-w-2xl text-lg text-gray-600'>
              {t.pricingPage.socialProof.subtitle}
            </p>

            {/* Stats Row */}
            <div className='mb-16 grid grid-cols-2 gap-8 md:grid-cols-4'>
              <div className='text-center'>
                <div className='mb-2 text-4xl font-bold text-blue-600'>2,500+</div>
                <div className='text-gray-600'>{t.pricingPage.socialProof.stats.activeUsers}</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-4xl font-bold text-green-600'>1M+</div>
                <div className='text-gray-600'>{t.pricingPage.socialProof.stats.callsHandled}</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-4xl font-bold text-purple-600'>98%</div>
                <div className='text-gray-600'>{t.pricingPage.socialProof.stats.satisfaction}</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-4xl font-bold text-orange-600'>24/7</div>
                <div className='text-gray-600'>{t.pricingPage.socialProof.stats.availability}</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-3'>
              <div className='rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg'>
                <div className='mb-4 flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 fill-current text-yellow-400' />
                  ))}
                </div>
                <p className='mb-6 italic text-gray-700'>
                  "Sondos AI increased our call efficiency by 150%. Our customers love the instant
                  responses and we've saved significantly on staffing costs."
                </p>
                <div className='flex items-center'>
                  <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white'>
                    AK
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Ahmed Khan</div>
                    <div className='text-sm text-gray-600'>CEO, TechCorp Saudi</div>
                  </div>
                </div>
              </div>

              <div className='rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg'>
                <div className='mb-4 flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 fill-current text-yellow-400' />
                  ))}
                </div>
                <p className='mb-6 italic text-gray-700'>
                  "The ROI is impressive. We went from missing 40% of calls to answering 95%. Our
                  sales have increased by 60% since implementing Sondos AI."
                </p>
                <div className='flex items-center'>
                  <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 font-bold text-white'>
                    SF
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Sarah Fahad</div>
                    <div className='text-sm text-gray-600'>Director, Riyadh Retail</div>
                  </div>
                </div>
              </div>

              <div className='rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg'>
                <div className='mb-4 flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 fill-current text-yellow-400' />
                  ))}
                </div>
                <p className='mb-6 italic text-gray-700'>
                  "Implementation was smooth and the AI speaks natural Arabic. Our customers can't
                  tell the difference from human agents."
                </p>
                <div className='flex items-center'>
                  <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white'>
                    MR
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Mohammed Rahman</div>
                    <div className='text-sm text-gray-600'>Manager, Gulf Services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry logos placeholder */}
            <div className='mt-16 border-t border-gray-200 pt-8'>
              <p className='mb-6 text-sm text-gray-500'>
                Trusted by leading companies across industries
              </p>
              <div className='flex items-center justify-center space-x-12 opacity-60'>
                <div className='text-2xl font-bold text-gray-400'>TechCorp</div>
                <div className='text-2xl font-bold text-gray-400'>RetailPro</div>
                <div className='text-2xl font-bold text-gray-400'>ServiceMax</div>
                <div className='text-2xl font-bold text-gray-400'>GulfTech</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Plans */}
      <Section className='bg-gradient-to-b from-gray-50 to-white py-24'>
        <Container>
          <div className='mb-20 text-center'>
            <div className='mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700'>
              <BarChart className='mr-2 h-4 w-4' />
              {t.pricingPage.plansBadge}
            </div>

            <h2 className='mb-6 text-5xl font-bold text-gray-900'>
              {t.pricingPage.plansTitle}{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {t.pricingPage.plansTitleHighlight}
              </span>
            </h2>
            <p className='mx-auto mb-8 max-w-3xl text-xl text-gray-600'>
              {t.pricingPage.plansSubtitle}
            </p>
            
            {/* Currency Exchange Note */}
            <div className='mx-auto mb-12 max-w-2xl rounded-lg bg-blue-50 p-4 text-center'>
              <p className='text-sm text-blue-700'>
                {t.pricingPage.currencyNote}
              </p>
            </div>

            {/* Monthly/Yearly Toggle */}
            <div className='mb-16 flex items-center justify-center'>
              <span
                className={`text-lg font-medium ${locale === 'ar' ? 'ml-4' : 'mr-4'} ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {t.pricingPage.monthly}
              </span>
              <button
                onClick={() => {
                          setIsYearly(!isYearly)
                }}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className={`text-lg font-medium ${locale === 'ar' ? 'mr-4' : 'ml-4'} ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {t.pricingPage.yearly}
              </span>
              {isYearly && (
                <span
                  className={`${locale === 'ar' ? 'mr-3' : 'ml-3'} rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-sm font-medium text-white`}
                >
                  {t.pricingPage.savePercent}
                </span>
              )}
            </div>

            {/* Pricing Cards */}
            <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-4'>
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl border-2 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    plan.popular
                      ? 'scale-105 border-blue-500 bg-gradient-to-b from-blue-50/50 to-white ring-4 ring-blue-500/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className='absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform'>
                      <span className='rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg'>
                        {plan.highlight}
                      </span>
                    </div>
                  )}

                  {/* Highlight Badge */}
                  {!plan.popular && plan.highlight && (
                    <div className='absolute -top-3 left-4'>
                      <span
                        className={`bg-gradient-to-r ${plan.gradient} rounded-full px-3 py-1 text-xs font-medium text-white`}
                      >
                        {plan.highlight}
                      </span>
                    </div>
                  )}

                  <div className='text-center'>
                    {/* Icon */}
                    <div className='mb-4'>
                      <div
                        className={`mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {plan.icon}
                      </div>
                    </div>

                    {/* Plan Name & Subtitle */}
                    <h3 className='mb-2 text-2xl font-bold text-gray-900'>{plan.name}</h3>
                    <p
                      className={`mb-4 bg-gradient-to-r bg-clip-text text-sm font-medium text-transparent ${plan.gradient}`}
                    >
                      {plan.subtitle}
                    </p>
                    <p className='mb-6 text-sm leading-relaxed text-gray-600'>{plan.description}</p>

                    {/* Pricing */}
                    <div className='mb-8'>
                      <div className='mb-2 flex items-center justify-center'>
                        {plan.originalPrice && typeof plan.price === 'number' && (
                          <span className='mr-2 text-lg text-gray-400 line-through'>
                            {plan.originalPrice} {plan.currency}
                          </span>
                        )}
                        <div className='flex flex-col items-center'>
                          <div className='flex items-baseline'>
                            <span
                              className={`text-4xl font-bold ${
                                plan.isCustom
                                  ? `bg-gradient-to-r bg-clip-text text-transparent ${plan.gradient}`
                                  : 'text-gray-900'
                              }`}
                            >
                              {typeof plan.price === 'number'
                                ? String(plan.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : String(plan.price)}
                            </span>
                            {!plan.isCustom && (
                              <span className='ml-1 text-lg text-gray-500'>{plan.currency}</span>
                            )}
                          </div>
                          {!plan.isCustom && (() => {
                            const priceStr = String(plan.price);
                            const priceNum = parseInt(priceStr.replace(/[^\d]/g, ''));
                            if (isNaN(priceNum)) return null;
                            const roundedNum = Math.round(priceNum);
                            const finalNum = roundedNum as number;
                            const sarValue = Math.round(finalNum * 3.75);
                            const usdValue = Math.round(finalNum / 3.75);
                            return (
                              <div className='mt-1 text-sm text-gray-400'>
                                {locale === 'ar' 
                                  ? `≈ $${usdValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                                  : `≈ ${sarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} SAR`
                                }
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                      <span className='text-sm text-gray-500'>{plan.period}</span>
                    </div>

                    {/* Features */}
                    <div className='mb-8 space-y-4 text-left'>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className='flex items-start'>
                          <div
                            className={`h-5 w-5 rounded-full bg-gradient-to-r ${plan.gradient} mr-3 mt-0.5 flex flex-shrink-0 items-center justify-center`}
                          >
                            <Check className='h-3 w-3 text-white' />
                          </div>
                          <span className='text-sm leading-relaxed text-gray-700'>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full py-4 font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700'
                          : plan.isCustom
                            ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:opacity-90`
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                      onClick={() => trackEvent('pricing_plan_selected', 'conversion', plan.name)}
                    >
                      {plan.isCustom ? (
                        <>
                          <MessageSquare
                            className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`}
                          />
                          {t.pricingPage.contactSales}
                        </>
                      ) : (
                        <>
                          {t.pricingPage.getStarted}
                          <ArrowRight className={`h-4 w-4 ${locale === 'ar' ? 'mr-2' : 'ml-2'}`} />
                        </>
                      )}
                    </Button>

                    {/* Additional info */}
                    {!plan.isCustom && (
                      <p className='mt-3 text-xs text-gray-500'>{t.pricingPage.trialInfo}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className='mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600'>
              <div className='flex items-center'>
                <Check className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'} text-green-500`} />
                {t.pricingPage.trustFeatures.noSetupFees}
              </div>
              <div className='flex items-center'>
                <Check className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'} text-green-500`} />
                {t.pricingPage.trustFeatures.cancelAnytime}
              </div>
              <div className='flex items-center'>
                <Check className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'} text-green-500`} />
                {t.pricingPage.trustFeatures.support247}
              </div>
              <div className='flex items-center'>
                <Check className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'} text-green-500`} />
                {t.pricingPage.trustFeatures.uptimeSLA}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Comparison Table */}
      <Section className='bg-gray-50'>
        <Container>
          <div className='mb-16 text-center'>
            <div className='mb-6 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700'>
              <Users className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t.pricingPage.comparisonBadge}
            </div>
            <h2 className='mb-6 text-4xl font-bold text-gray-900'>
              {t.pricingPage.comparisonTitle}{' '}
              <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                {t.pricingPage.comparisonTitleHighlight}
              </span>
            </h2>
            <p className='mx-auto max-w-3xl text-xl text-gray-600'>
              {t.pricingPage.comparisonSubtitle}
            </p>
          </div>

                      {/* Enhanced comparison table */}
          <div className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl'>
            {/* Plan headers */}
            <div className='grid grid-cols-5 gap-4 border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-6'>
              <div className='text-lg font-bold text-gray-900'>{t.pricingPage.featuresColumn}</div>
              {plans.map((plan, index) => (
                <div key={index} className='text-center'>
                  <div
                    className={`mx-auto mb-3 h-12 w-12 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-lg shadow-lg`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className='mb-1 text-lg font-bold text-gray-900'>
                    {plan.name.replace(' Package', '')}
                  </h3>
                  <div className='mb-1 text-2xl font-bold text-gray-900'>
                    {typeof plan.price === 'number'
                      ? `${String(plan.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${plan.currency}`
                      : String(plan.price)}
                  </div>
                  {plan.originalPrice && isYearly && (
                    <div className='text-xs text-gray-400 line-through'>
                      {plan.originalPrice}
                    </div>
                  )}
                  {!plan.isCustom && (() => {
                    const priceStr = String(plan.price);
                    const priceNum = parseInt(priceStr.replace(/[^\d]/g, ''));
                    if (isNaN(priceNum)) return null;
                    const roundedNum = Math.round(priceNum);
                    const finalNum = roundedNum as number;
                    const sarValue = Math.round(finalNum * 3.75);
                    const usdValue = Math.round(finalNum / 3.75);
                    return (
                      <div className='text-xs text-gray-500'>
                        {locale === 'ar' 
                          ? `≈ $${usdValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                          : `≈ ${sarValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} SAR`
                        }
                      </div>
                    );
                  })()}
                  <div className='mb-3 text-sm text-gray-500'>{plan.period}</div>
                  <Button
                    size='sm'
                    className={`${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                        : plan.isCustom
                          ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90`
                          : 'bg-gray-900 hover:bg-gray-800'
                    } font-medium text-white`}
                    onClick={() => trackEvent('comparison_subscribe', 'conversion', plan.name)}
                  >
                    {plan.isCustom ? t.pricingPage.contactSales : t.pricingPage.getStarted}
                  </Button>
                </div>
              ))}
            </div>

            {/* Feature categories */}
            {comparisonData.categories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className='border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4'>
                  <h4 className='flex items-center text-lg font-bold text-gray-900'>
                    <div className='mr-3 h-2 w-2 rounded-full bg-blue-600'></div>
                    {category.name}
                  </h4>
                </div>
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className='grid grid-cols-5 gap-4 border-b border-gray-100 p-4 transition-colors hover:bg-blue-50/30'
                  >
                    <div className='flex items-center text-left font-medium text-gray-900'>
                      {feature.name}
                    </div>
                    <div className='flex items-center justify-center text-center'>
                      {renderValue((feature as any).basic)}
                    </div>
                    <div className='flex items-center justify-center text-center'>
                      {renderValue((feature as any).professional)}
                    </div>
                    <div className='flex items-center justify-center text-center'>
                      {renderValue((feature as any).enterprise)}
                    </div>
                    <div className='flex items-center justify-center text-center'>
                      {renderValue((feature as any).corporate)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className='mt-12 text-center'>
            <p className='mb-6 text-lg text-gray-600'>{t.pricingPage.stillNotSure}</p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button
                size='lg'
                onClick={() => trackEvent('comparison_contact', 'engagement', 'speak_to_expert')}
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              >
                <Users className={`h-5 w-5 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t.pricingPage.speakToExpert}
              </Button>
              <Button
                size='lg'
                variant='outline'
                onClick={() => trackEvent('comparison_trial', 'conversion', 'start_free_trial')}
                className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
              >
                {t.pricingPage.startFreeTrial}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className='bg-white'>
        <Container>
          <div className='mb-16 text-center'>
            <div className='mb-6 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700'>
              <MessageSquare className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t.pricingPage.faqBadge}
            </div>
            <h2 className='mb-6 text-4xl font-bold text-gray-900'>
              {t.pricingPage.faqTitle}{' '}
              <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
                {t.pricingPage.faqTitleHighlight}
              </span>
            </h2>
            <p className='mx-auto max-w-3xl text-xl text-gray-600'>{t.pricingPage.faqSubtitle}</p>
          </div>

          <div className='mx-auto max-w-5xl'>
            <div className='grid gap-8 md:grid-cols-2'>
              {pricingFAQs.map((faq, index) => (
                <div
                  key={index}
                  className='rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-xl'
                >
                  <div className='mb-4 flex items-start'>
                    <div className='mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600'>
                      <span className='text-sm font-bold text-white'>Q</span>
                    </div>
                    <h3 className='text-lg font-bold text-gray-900'>{faq.question}</h3>
                  </div>
                  <p className='ml-12 leading-relaxed text-gray-600'>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-16 text-center'>
            <div className='mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 p-12'>
              <h3 className='mb-4 text-2xl font-bold text-gray-900'>
                {t.pricingPage.stillHaveQuestions}
              </h3>
              <p className='mb-8 text-lg text-gray-600'>{t.pricingPage.expertTeamHelp}</p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <Button
                  size='lg'
                  onClick={() => trackEvent('faq_contact_click', 'engagement', 'contact_sales')}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white hover:from-blue-700 hover:to-purple-700'
                >
                  <MessageSquare className={`h-5 w-5 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t.pricingPage.contactSales}
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  onClick={() => trackEvent('faq_demo_click', 'engagement', 'book_demo')}
                  className='border-2 border-blue-600 px-8 py-4 text-blue-600 hover:bg-blue-50'
                >
                  <Phone className={`h-5 w-5 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t.pricingPage.bookDemo}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white'>
        {/* Background Effects */}
        <div className='absolute inset-0'>
          <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl'></div>
          <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl'></div>
        </div>

        <Container className='relative z-10'>
          <div className='mx-auto max-w-5xl py-20 text-center'>
            <div className='mb-8 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm'>
              <Zap className={`h-4 w-4 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t.pricingPage.joinRevolution}
            </div>

            <h2 className='mb-8 text-5xl font-bold leading-tight md:text-6xl'>
              {t.pricingPage.readyToTransform}{' '}
              <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                {t.pricingPage.business}
              </span>
              ?
            </h2>

            <p className='mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-blue-100 md:text-2xl'>
              {t.pricingPage.finalSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className='mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row'>
              <Button
                size='lg'
                onClick={() => trackEvent('pricing_final_cta', 'conversion', 'start_free_trial')}
                className='bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-5 text-lg font-semibold text-white shadow-2xl hover:from-blue-700 hover:to-purple-700'
              >
                <Star className={`h-6 w-6 ${locale === 'ar' ? 'ml-3' : 'mr-3'}`} />
                {t.pricingPage.startFreeTrial}
              </Button>
              <Button
                size='lg'
                onClick={() => trackEvent('pricing_final_cta', 'engagement', 'speak_to_sales')}
                className='border-2 border-white/30 bg-white/10 px-12 py-5 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20'
              >
                <Users className={`h-6 w-6 ${locale === 'ar' ? 'ml-3' : 'mr-3'}`} />
                {t.pricingPage.speakToSales}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className='mx-auto grid max-w-3xl grid-cols-2 gap-8 text-center md:grid-cols-4'>
              <div className='flex flex-col items-center'>
                <Check className='mb-2 h-6 w-6 text-green-400' />
                <span className='text-sm text-blue-200'>
                  {t.pricingPage.finalTrust.noCreditCard}
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <Check className='mb-2 h-6 w-6 text-green-400' />
                <span className='text-sm text-blue-200'>{t.pricingPage.finalTrust.freeTrial}</span>
              </div>
              <div className='flex flex-col items-center'>
                <Check className='mb-2 h-6 w-6 text-green-400' />
                <span className='text-sm text-blue-200'>{t.pricingPage.finalTrust.setupIn60}</span>
              </div>
              <div className='flex flex-col items-center'>
                <Check className='mb-2 h-6 w-6 text-green-400' />
                <span className='text-sm text-blue-200'>
                  {t.pricingPage.finalTrust.cancelAnytime}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
