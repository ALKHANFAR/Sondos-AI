import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { Phone, Brain, Link, Rocket, ArrowRight } from 'lucide-react'

const iconMap = {
  phone: Phone,
  brain: Brain,
  link: Link,
  rocket: Rocket,
}

export default function HowItWorksSection() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  return (
    <Section className='bg-gradient-to-br from-purple-50/30 to-blue-50/50'>
      <Container>
        {/* Header */}
        <div className='mx-auto mb-16 max-w-4xl text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
            {t.home.howItWorks.title}
          </h2>
          <p className='text-xl leading-relaxed text-gray-600'>{t.home.howItWorks.subtitle}</p>
        </div>

        {/* Steps */}
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {t.home.howItWorks.steps.map((step: any, index: number) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap]
              const isLastStep = index === t.home.howItWorks.steps.length - 1

              return (
                <div key={index} className='relative'>
                  {/* Step card */}
                  <div className='group relative z-10 rounded-2xl border border-purple-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-purple-200 hover:shadow-xl'>
                    {/* Step number */}
                    <div className='absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-bold text-white'>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className='mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 transition-transform duration-300 group-hover:scale-110'>
                      <IconComponent className='h-8 w-8 text-purple-600' />
                    </div>

                    {/* Content */}
                    <div className='space-y-4'>
                      <h3 className='text-xl font-bold text-gray-900'>{step.title}</h3>
                      <p className='leading-relaxed text-gray-600'>{step.description}</p>
                    </div>

                    {/* Time indicator */}
                    <div className='mt-6 flex items-center justify-center'>
                      <div className='rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 text-xs font-medium text-purple-700'>
                        {index === 0
                          ? '< 3 minutes'
                          : index === 1
                            ? '5-10 minutes'
                            : index === 2
                              ? '2-5 minutes'
                              : 'Instant'}
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector (hidden on mobile and last step) */}
                  {!isLastStep && (
                    <div className='absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 transform lg:block'>
                      <div className='rounded-full border border-purple-200 bg-white p-2 shadow-md'>
                        <ArrowRight className='h-6 w-6 text-purple-600' />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom section with timeline visualization */}
        <div className='mt-16'>
          <div className='rounded-3xl border border-purple-100 bg-white p-8 shadow-lg'>
            <div className='mb-8 text-center'>
              <h3 className='mb-4 text-2xl font-bold text-gray-900'>Complete Setup Timeline</h3>
              <p className='text-gray-600'>
                Most customers are live and taking calls within 15 minutes
              </p>
            </div>

            {/* Timeline bar */}
            <div className='relative mx-auto max-w-4xl'>
              <div className='h-2 rounded-full bg-gray-200'>
                <div className='h-2 w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600'></div>
              </div>

              {/* Timeline markers */}
              <div className='mt-4 flex justify-between text-sm'>
                <div className='text-center'>
                  <div className='mx-auto mb-2 h-4 w-4 rounded-full bg-purple-600'></div>
                  <div className='font-medium'>0 min</div>
                  <div className='text-gray-500'>Start</div>
                </div>
                <div className='text-center'>
                  <div className='mx-auto mb-2 h-4 w-4 rounded-full bg-purple-600'></div>
                  <div className='font-medium'>3 min</div>
                  <div className='text-gray-500'>Connected</div>
                </div>
                <div className='text-center'>
                  <div className='mx-auto mb-2 h-4 w-4 rounded-full bg-purple-600'></div>
                  <div className='font-medium'>10 min</div>
                  <div className='text-gray-500'>Trained</div>
                </div>
                <div className='text-center'>
                  <div className='mx-auto mb-2 h-4 w-4 rounded-full bg-blue-600'></div>
                  <div className='font-medium'>15 min</div>
                  <div className='text-gray-500'>Live!</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-8 text-center'>
              <div className='inline-flex cursor-pointer items-center space-x-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700'>
                <Rocket className='h-5 w-5' />
                <span>Start Your Setup Now</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
