import {
  Home,
  ShoppingCart,
  Stethoscope,
  Wrench,
  Headphones,
  Bed,
  PieChart,
  Scale,
  Car,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { trackEvent } from '@/components/Analytics'

export default function Industries() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const majorIndustries = [
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Automating phone calls in the medical field',
      stats: '95% patient satisfaction',
      color: 'from-blue-400 to-blue-600',
      useCases: [
        'Appointment scheduling and reminders',
        'Patient follow-up calls',
        'Insurance verification',
        'Test result notifications',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Improve e-commerce customer service with AI voice',
      stats: '200% increase in sales',
      color: 'from-green-400 to-green-600',
      useCases: [
        'Order status inquiries',
        'Product recommendations',
        'Return and refund processing',
        'Customer support',
      ],
    },
    {
      icon: Headphones,
      title: 'Call Center',
      description: 'AI voice agents for call center phone calls',
      stats: '80% cost reduction',
      color: 'from-purple-400 to-purple-600',
      useCases: [
        'First-level customer support',
        'Lead qualification',
        'Survey and feedback collection',
        'Appointment booking',
      ],
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Automate real estate phone calls with AI voice agents',
      stats: '150% more leads',
      color: 'from-red-400 to-red-600',
      useCases: [
        'Property inquiry handling',
        'Showing appointments',
        'Lead qualification',
        'Market updates',
      ],
    },
    {
      icon: Wrench,
      title: 'Services',
      description: 'AI voice agents for service industry phone calls',
      stats: '90% faster response',
      color: 'from-yellow-400 to-orange-500',
      useCases: ['Service booking', 'Emergency dispatch', 'Quote requests', 'Follow-up calls'],
    },
    {
      icon: Bed,
      title: 'Restaurant',
      description: 'Automated phone ordering and reservations for restaurants',
      stats: '40% more bookings',
      color: 'from-pink-400 to-pink-600',
      useCases: [
        'Table reservations',
        'Order taking',
        'Delivery coordination',
        'Special event bookings',
      ],
    },
    {
      icon: Scale,
      title: 'Legal',
      description: 'Automated legal client communication and case management',
                      stats: '150% efficiency gain',
      color: 'from-gray-400 to-gray-600',
      useCases: [
        'Client intake',
        'Appointment scheduling',
        'Case status updates',
        'Document collection',
      ],
    },
    {
      icon: Car,
      title: 'Car Dealership',
      description: 'Automated auto sales and service communication',
      stats: '120% sales increase',
      color: 'from-indigo-400 to-indigo-600',
      useCases: [
        'Lead qualification',
        'Test drive scheduling',
        'Service appointments',
        'Follow-up calls',
      ],
    },
    {
      icon: DollarSign,
      title: 'Debt Collection',
      description: 'Automated debt recovery with professional compliance',
      stats: '60% collection rate',
      color: 'from-teal-400 to-teal-600',
      useCases: [
        'Payment reminders',
        'Settlement negotiations',
        'Compliance management',
        'Account updates',
      ],
    },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: t.industries.benefits.proven,
      description: t.industries.benefits.provenDesc,
    },
    {
      icon: Star,
      title: t.industries.benefits.expertise,
      description: t.industries.benefits.expertiseDesc,
    },
    {
      icon: Headphones,
      title: t.industries.benefits.support,
      description: t.industries.benefits.supportDesc,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className='bg-gradient-to-br from-green-50/50 via-white to-blue-50/30 pt-32'>
        <Container>
          <div className='mb-16 text-center'>
            <h1 className='mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl'>
              {t.industries.title}
            </h1>
            <p className='mx-auto max-w-3xl text-xl leading-relaxed text-gray-600'>
              {t.industries.subtitle}
            </p>
          </div>

          {/* Quick Stats */}
          <div className='mx-auto mb-20 grid max-w-4xl gap-8 md:grid-cols-3'>
            <div className='text-center'>
              <div className='mb-2 text-4xl font-bold text-green-600'>50+</div>
              <div className='text-gray-600'>{t.industries.stats.served}</div>
            </div>
            <div className='text-center'>
                              <div className='mb-2 text-4xl font-bold text-blue-600'>2,500+</div>
              <div className='text-gray-600'>{t.industries.stats.businesses}</div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-4xl font-bold text-purple-600'>200%</div>
              <div className='text-gray-600'>{t.industries.stats.roi}</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries Grid */}
      <Section className='bg-gray-50'>
        <Container>
          <div className='mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {majorIndustries.map((industry, index) => {
              const IconComponent = industry.icon

              return (
                <div
                  key={index}
                  className='group cursor-pointer rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl'
                  onClick={() => trackEvent('industry_click', 'engagement', industry.title)}
                >
                  <div className='mb-6 flex items-center justify-between'>
                    <div
                      className={`h-16 w-16 bg-gradient-to-r ${industry.color} flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className='h-8 w-8 text-white' />
                    </div>
                    <div className='text-right'>
                      <div className='text-2xl font-bold text-green-600'>
                        {industry.stats.split(' ')[0]}
                      </div>
                      <div className='text-sm text-gray-500'>
                        {industry.stats.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>

                  <h3 className='mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-green-600'>
                    {industry.title}
                  </h3>

                  <p className='mb-6 leading-relaxed text-gray-600'>{industry.description}</p>

                  <div className='mb-6 space-y-2'>
                    {industry.useCases.map((useCase, idx) => (
                      <div key={idx} className='flex items-center text-sm text-gray-600'>
                        <CheckCircle className='mr-2 h-4 w-4 flex-shrink-0 text-green-500' />
                        {useCase}
                      </div>
                    ))}
                  </div>

                  <div className='flex items-center text-green-600 group-hover:text-green-700'>
                    <span className='text-sm font-medium'>{t.industries.viewCaseStudy}</span>
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className='bg-white'>
        <Container>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-16 text-center'>
              <h2 className='mb-6 text-4xl font-bold text-gray-900'>{t.industries.whyChoose}</h2>
              <p className='text-xl text-gray-600'>{t.industries.whyChooseDesc}</p>
            </div>

            <div className='grid gap-8 md:grid-cols-3'>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className='text-center'>
                    <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-100 to-green-200'>
                      <IconComponent className='h-8 w-8 text-green-600' />
                    </div>
                    <h3 className='mb-4 text-xl font-bold text-gray-900'>{benefit.title}</h3>
                    <p className='leading-relaxed text-gray-600'>{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Stories Section */}
      <Section className='bg-gradient-to-br from-blue-50/50 to-purple-50/30'>
        <Container>
          <div className='mb-16 text-center'>
            <h2 className='mb-6 text-4xl font-bold text-gray-900'>{t.industries.successStories}</h2>
            <p className='mx-auto max-w-3xl text-xl text-gray-600'>{t.industries.successDesc}</p>
          </div>

          <div className='mx-auto grid max-w-6xl gap-12 md:grid-cols-2'>
            <div className='rounded-3xl bg-white p-8 shadow-lg'>
              <div className='mb-6 flex items-center'>
                <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-blue-600'>
                  <Stethoscope className='h-6 w-6 text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>Metro Health Clinic</h3>
                  <p className='text-gray-600'>Healthcare</p>
                </div>
              </div>
              <p className='mb-6 italic text-gray-700'>
                "Our AI reduced appointment no-shows by 60% and increased patient satisfaction
                scores to 4.7/5. It handles 200+ calls per day reliably."
              </p>
              <div className='grid grid-cols-2 gap-4 text-center'>
                <div>
                  <div className='text-2xl font-bold text-blue-600'>60%</div>
                  <div className='text-sm text-gray-500'>Fewer No-shows</div>
                </div>
                <div>
                  <div className='text-2xl font-bold text-green-600'>200+</div>
                  <div className='text-sm text-gray-500'>Daily Calls</div>
                </div>
              </div>
            </div>

            <div className='rounded-3xl bg-white p-8 shadow-lg'>
              <div className='mb-6 flex items-center'>
                <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-600'>
                  <ShoppingCart className='h-6 w-6 text-white' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>TechGear Store</h3>
                  <p className='text-gray-600'>E-commerce</p>
                </div>
              </div>
              <p className='mb-6 italic text-gray-700'>
                "Sales increased 200% after implementing AI for order inquiries and product
                recommendations. Customer support costs dropped 80%."
              </p>
              <div className='grid grid-cols-2 gap-4 text-center'>
                <div>
                  <div className='text-2xl font-bold text-green-600'>200%</div>
                  <div className='text-sm text-gray-500'>Sales Increase</div>
                </div>
                <div>
                  <div className='text-2xl font-bold text-red-600'>80%</div>
                  <div className='text-sm text-gray-500'>Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className='bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white'>
        <Container>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='mb-6 text-4xl font-bold md:text-5xl'>{t.industries.cta.transform}</h2>
            <p className='mb-8 text-xl text-green-100'>{t.industries.cta.join}</p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button
                size='lg'
                onClick={() => trackEvent('industries_cta_click', 'conversion', 'get_demo')}
                className='bg-white px-8 py-4 font-bold text-green-600 hover:bg-gray-100'
              >
                {t.industries.cta.industryDemo}
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-green-600'
              >
                {t.industries.cta.expertTalk}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
