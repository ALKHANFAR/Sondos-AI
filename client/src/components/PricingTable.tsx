import { useState } from 'react'
import { Check } from 'lucide-react'
import Container from './Container'
import Section from './Section'
import Button from './Button'
import Badge from './Badge'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false)
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const plans = [
    {
      ...t.pricing.plans.basic,
      variant: 'ghost' as const,
      color: 'blue',
      icon: '💡',
    },
    {
      ...t.pricing.plans.professional,
      variant: 'primary' as const,
      popular: true,
      color: 'green',
      icon: '🚀',
    },
    {
      ...t.pricing.plans.enterprise,
      variant: 'ghost' as const,
      color: 'purple',
      icon: '⚡',
    },
    {
      ...t.pricing.plans.corporate,
      variant: 'outline' as const,
      color: 'gold',
      icon: '👑',
    },
  ]

  return (
    <Section id='pricing' className='bg-gradient-to-br from-red-200/20 via-white to-purple-100/20'>
      <Container>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900'>{t.pricing.title}</h2>

          {/* Billing Toggle */}
          <div className='mb-8 flex items-center justify-center'>
            <span className='mr-3 text-gray-600'>{t.pricing.monthly}</span>
            <button
              className={`relative h-7 w-14 rounded-full p-1 transition-colors duration-200 ${
                isYearly ? 'bg-primary' : 'bg-gray-200'
              }`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                  isYearly ? 'translate-x-7 rtl:-translate-x-7' : ''
                }`}
              />
            </button>
            <span className='ml-3 font-medium text-gray-900'>{t.pricing.yearly}</span>
            <Badge>{t.pricing.freeMonths}</Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='flex flex-col gap-6 lg:flex-row lg:items-stretch'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex-1 rounded-2xl bg-white p-6 shadow-custom transition-shadow hover:shadow-purple ${
                (plan as any).popular
                  ? 'ring-primary/20 scale-105 border-2 border-primary ring-2'
                  : ''
              }`}
            >
              {(plan as any).popular && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 transform'>
                  <Badge>{(plan as any).popular}</Badge>
                </div>
              )}

              <div className='mb-4 text-center'>
                <div className='mb-3'>
                  <span className='mb-2 block text-3xl'>{plan.icon}</span>
                </div>
                <h3 className='mb-1 text-xl font-bold'>{plan.name}</h3>
                {plan.subtitle && <p className='mb-3 text-sm text-gray-500'>{plan.subtitle}</p>}

                <div className='mb-4'>
                  <span className='text-3xl font-bold text-primary'>{plan.price}</span>
                  <span className='text-sm text-gray-600'>{plan.period}</span>
                </div>
              </div>

              <p className='mb-6 px-2 text-center text-xs text-gray-600'>{plan.description}</p>

              <ul className='mb-8 space-y-3 text-sm'>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start'>
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 text-green-500 ${
                        locale === 'ar' ? 'ml-2' : 'mr-2'
                      }`}
                    />
                    <span className='leading-relaxed'>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.variant} 
                className='w-full' 
                size='lg'
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=966531899155', '_blank')}
              >
                {plan.name === 'Corporate Package' || plan.name === 'باقة الشركات الكبرى'
                  ? locale === 'ar'
                    ? 'تواصل معنا'
                    : 'Contact Us'
                  : t.pricing.subscribeNow}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
