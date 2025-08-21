import { lazy, Suspense } from 'react'
import {
  Phone,
  Code,
  Users,
  Globe,
  MessageSquare,
  Settings,
  Zap,
  Shield,
  BarChart,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Star,
} from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { trackEvent } from '@/lib/analytics-helpers'

// Lazy load heavy components
const PlayCard = lazy(() => import('@/components/PlayCard'))

export default function Solution() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en
  const isArabic = locale === 'ar'

  const mainFeatures = [
    {
      icon: Phone,
      title: isArabic ? 'جرّب مجاناً' : 'Try for free',
      description: isArabic
        ? 'تحدث مباشرة مع وكيل الذكاء الاصطناعي عبر الهاتف'
        : 'Speak live on your phone with our AI',
      color: 'from-green-400 to-green-600',
      badge: null,
    },
    {
      icon: Code,
      title: isArabic ? 'التكاملات' : 'Integrations',
      description: isArabic
        ? 'اربط الوكلاء مع أنظمتك وأدواتك'
        : 'Connect your AI agents to other apps',
      color: 'from-blue-400 to-blue-600',
      badge: '+300',
    },
    {
      icon: Globe,
      title: isArabic ? 'أرقام هاتف' : 'Phone numbers',
      description: isArabic
        ? 'أرقام عالمية وأسعار مكالمات تنافسية'
        : 'Global phone numbers and call rates',
      color: 'from-purple-400 to-purple-600',
      badge: '224',
    },
    {
      icon: MessageSquare,
      title: isArabic ? 'اللغات المتاحة' : 'Available languages',
      description: isArabic ? 'الإنجليزية والعربية' : 'English and Arabic',
      color: 'from-red-400 to-red-600',
      badge: '2',
    },
    {
      icon: Settings,
      title: isArabic ? 'مركز اتصال بالذكاء الاصطناعي' : 'AI Call center',
      description: isArabic
        ? 'أنشئ مركز اتصال متكامل يعمل ذاتياً'
        : 'Create your own AI call center',
      color: 'from-indigo-400 to-indigo-600',
      badge: null,
    },
    {
      icon: BarChart,
      title: isArabic ? 'شاهد سندس AI عملياً' : 'See Sondos AI in action',
      description: isArabic
        ? 'نماذج حية لوكلاء الذكاء الاصطناعي'
        : 'See demos of AI agents in action',
      color: 'from-green-500 to-teal-500',
      badge: null,
    },
    {
      icon: Users,
      title: isArabic ? 'حالات الاستخدام' : 'Use cases',
      description: isArabic
        ? 'تعرّف كيف يدير الوكلاء المهام المختلفة'
        : 'Explore how our AI agents handle different tasks',
      color: 'from-orange-400 to-orange-600',
      badge: null,
    },
    {
      icon: Code,
      title: isArabic ? 'بدون برمجة' : 'No-code platform',
      description: isArabic
        ? 'أتمتة الوكلاء بدون كود'
        : 'Automate your AI agents with our no-code platform',
      color: 'from-cyan-400 to-cyan-600',
      badge: null,
    },
    {
      icon: Shield,
      title: isArabic ? 'الأسئلة الشائعة' : 'Frequently asked questions',
      description: isArabic
        ? 'إجابات سريعة لأهم الاستفسارات'
        : 'Find answers to common questions about our platform',
      color: 'from-gray-400 to-gray-600',
      badge: null,
    },
  ]

  const demoCards = [
    {
      title: 'Customer Service Demo',
      description: 'See how our AI handles customer inquiries with professional responses',
      duration: '2:15',
      gradientFrom: 'from-blue-100',
      gradientTo: 'to-blue-200',
    },
    {
      title: 'Appointment Booking',
      description: 'Watch AI schedule appointments and manage calendars automatically',
      duration: '1:45',
      gradientFrom: 'from-green-100',
      gradientTo: 'to-green-200',
    },
    {
      title: 'Lead Qualification',
      description: 'Experience how AI qualifies leads and gathers customer information',
      duration: '3:20',
      gradientFrom: 'from-purple-100',
      gradientTo: 'to-purple-200',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className='bg-gradient-to-br from-green-50/50 via-white to-blue-50/30 pt-32'>
        <Container>
          <div className='mb-16 text-center'>
            <h1 className='mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl'>
              {isArabic ? 'حل متكامل لمكالمات الذكاء الاصطناعي' : 'Explore our AI Voice Solution'}
            </h1>
            <p className='mx-auto max-w-3xl text-xl leading-relaxed text-gray-600'>
              {isArabic
                ? 'حوّل استقبال المكالمات والحجز والبيع إلى تجربة ذكية وسريعة ومتصلة بأنظمتك – بالإنجليزية والعربية.'
                : 'Turn calls, booking and sales into smart, fast, system‑connected experiences — in English and Arabic.'}
            </p>
          </div>

          {/* CTA Section */}
          <div className='mx-auto mb-20 max-w-2xl'>
            <div className='rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl'>
              <div className='text-center'>
                <h3 className='mb-4 text-2xl font-bold text-gray-900'>
                  {isArabic ? 'جاهز للتحوّل؟' : 'Ready to Transform?'}
                </h3>
                <p className='mb-6 text-gray-600'>
                  {isArabic
                    ? 'ابدأ التجربة المجانية اليوم وشاهد الفرق'
                    : 'Start your free trial today and see the difference'}
                </p>
                <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                  <Button
                    size='lg'
                    onClick={() => trackEvent('solution_cta_click', 'engagement', 'start_trial')}
                    className='bg-gradient-to-r from-[#3d2daa] to-[#16e060] text-white hover:opacity-95'
                  >
                    <Play className='mr-2 h-5 w-5' />
                    {isArabic ? 'ابدأ التجربة المجانية' : 'Start Free Trial'}
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={() => trackEvent('solution_download_click', 'engagement', 'get_demo')}
                    className='border-2 border-[#3d2daa] text-[#3d2daa] hover:bg-indigo-50'
                  >
                    <Download className='mr-2 h-5 w-5' />
                    {isArabic ? 'اطلب عرضاً' : 'Get Demo'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Features Grid */}
      <Section className='bg-gray-50'>
        <Container>
          <div className='mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon

              return (
                <div
                  key={index}
                  className='group cursor-pointer rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl'
                  onClick={() => trackEvent('solution_feature_click', 'engagement', feature.title)}
                >
                  <div className='relative'>
                    <div
                      className={`h-16 w-16 bg-gradient-to-r ${feature.color} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className='h-8 w-8 text-white' />
                    </div>

                    {feature.badge && (
                      <div className='absolute -right-2 -top-2 rounded-full bg-blue-500 px-2 py-1 text-xs font-bold text-white'>
                        {feature.badge}
                      </div>
                    )}
                  </div>

                  <h3 className='mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600'>
                    {feature.title}
                  </h3>

                  <p className='leading-relaxed text-gray-600'>{feature.description}</p>

                  <div className='mt-4 flex items-center text-green-600 group-hover:text-green-700'>
                    <span className='text-sm font-medium'>
                      {isArabic ? 'اعرف المزيد' : 'Learn more'}
                    </span>
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Demo Section */}
      <Section className='bg-gradient-to-br from-blue-50/50 to-purple-50/30'>
        <Container>
          <div className='mb-16 text-center'>
            <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
              {isArabic ? 'شاهد الذكاء الاصطناعي عملياً' : 'See Our AI in Action'}
            </h2>
            <p className='mx-auto max-w-3xl text-xl text-gray-600'>
              {isArabic
                ? 'مكالمات حقيقية توضّح كيف يدير الوكيل السيناريوهات المعقدة باحتراف.'
                : 'Real calls showing how the agent handles complex scenarios professionally.'}
            </p>
          </div>

          <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-3'>
            <Suspense
              fallback={
                <div className='grid gap-8 md:grid-cols-3'>
                  {[...Array(3)].map((_, i) => (
                    <LoadingSkeleton key={i} type='card' />
                  ))}
                </div>
              }
            >
              {demoCards.map((demo, index) => (
                <PlayCard
                  key={index}
                  title={demo.title}
                  description={demo.description}
                  gradientFrom={demo.gradientFrom}
                  gradientTo={demo.gradientTo}
                  onPlay={() => trackEvent('solution_demo_play', 'engagement', demo.title)}
                />
              ))}
            </Suspense>
          </div>
        </Container>
      </Section>

      {/* Key Benefits Section */}
      <Section className='bg-white'>
        <Container>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-16 text-center'>
              <h2 className='mb-6 text-4xl font-bold text-gray-900'>
                {isArabic ? 'لماذا تختار سندس AI؟' : 'Why Choose Sondos AI?'}
              </h2>
              <p className='text-xl text-gray-600'>
                {isArabic
                  ? 'تقنية متقدمة تُترجم إلى نتائج أعمال واضحة'
                  : 'Advanced AI that delivers clear business outcomes'}
              </p>
            </div>

            <div className='grid items-center gap-12 md:grid-cols-2'>
              <div className='space-y-8'>
                {[
                  {
                    icon: Clock,
                    title: isArabic ? 'جاهزية 24/7' : '24/7 Availability',
                    description: isArabic
                      ? 'لا تفوّت أي مكالمة. الوكلاء يعملون طوال الوقت.'
                      : 'Never miss a call again. Our AI agents work around the clock.',
                  },
                  {
                    icon: Zap,
                    title: isArabic ? 'إعداد فوري' : 'Instant Setup',
                    description: isArabic
                      ? 'ابدأ خلال دقائق، وليس أشهر.'
                      : 'Get started in minutes, not months.',
                  },
                  {
                    icon: Shield,
                    title: isArabic ? 'أمان على مستوى المؤسسات' : 'Enterprise Security',
                    description: isArabic
                      ? 'تشفير وامتثال بمعايير عالية.'
                      : 'Bank‑level encryption and compliance.',
                  },
                  {
                    icon: BarChart,
                    title: isArabic ? 'تحليلات لحظية' : 'Real‑time Analytics',
                    description: isArabic
                      ? 'تابع الأداء وحسّن الوكلاء ببيانات دقيقة.'
                      : 'Monitor and optimize with detailed insights.',
                  },
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className='flex items-start space-x-4'>
                      <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-green-100 to-green-200'>
                        <IconComponent className='h-6 w-6 text-green-600' />
                      </div>
                      <div>
                        <h3 className='mb-2 text-xl font-bold text-gray-900'>{benefit.title}</h3>
                        <p className='leading-relaxed text-gray-600'>{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className='relative'>
                <div className='rounded-3xl bg-gradient-to-br from-green-400 to-blue-500 p-8 text-white'>
                  <div className='text-center'>
                    <Star className='mx-auto mb-6 h-16 w-16 text-yellow-300' />
                    <h3 className='mb-4 text-2xl font-bold'>Trusted by 2,500+ Businesses</h3>
                    <p className='mb-6 text-green-100'>
                      Join hundreds of companies already using our AI to transform their operations
                    </p>
                    <div className='grid grid-cols-2 gap-4 text-center'>
                      <div>
                        <div className='text-3xl font-bold'>99.5%</div>
                        <div className='text-sm text-green-100'>Uptime</div>
                      </div>
                      <div>
                        <div className='text-3xl font-bold'>4.9/5</div>
                        <div className='text-sm text-green-100'>Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className='bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white'>
        <Container>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='mb-6 text-4xl font-bold md:text-5xl'>
              {isArabic ? 'جاهز للانطلاق؟' : 'Ready to Get Started?'}
            </h2>
            <p className='mb-8 text-xl text-green-100'>
              {isArabic
                ? 'حوّل عملك بوكلاء صوت بالذكاء الاصطناعي اليوم. بدون بطاقة دفع.'
                : 'Transform your business with AI voice agents today. No credit card required.'}
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button
                size='lg'
                onClick={() => trackEvent('solution_final_cta', 'conversion', 'start_trial')}
                className='bg-white px-8 py-4 font-bold text-[#3d2daa] hover:bg-gray-100'
              >
                {isArabic ? 'ابدأ التجربة المجانية' : 'Start Free Trial'}
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-[#3d2daa]'
              >
                {isArabic ? 'تواصل مع المبيعات' : 'Contact Sales'}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
