import { useState } from 'react'
import { TrendingUp, BarChart3, Filter, CheckCircle, RotateCcw, Building } from 'lucide-react'
import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('outbound')
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const useCases = [
    {
      icon: TrendingUp,
      title: t.home.useCases.cases.sales,
      description: t.home.useCases.descriptions.sales,
    },
    {
      icon: BarChart3,
      title: t.home.useCases.cases.surveys,
      description: t.home.useCases.descriptions.surveys,
    },
    {
      icon: Filter,
      title: t.home.useCases.cases.leads,
      description: t.home.useCases.descriptions.leads,
    },
    {
      icon: CheckCircle,
      title: t.home.useCases.cases.confirmations,
      description: t.home.useCases.descriptions.confirmations,
    },
    {
      icon: RotateCcw,
      title: t.home.useCases.cases.renewals,
      description: t.home.useCases.descriptions.renewals,
    },
    {
      icon: Building,
      title: t.home.useCases.cases.business,
      description: t.home.useCases.descriptions.business,
    },
  ]

  return (
    <Section className='bg-gradient-to-br from-red-200/20 via-white to-purple-100/20'>
      <Container>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900'>{t.home.useCases.title}</h2>

          {/* Tabs */}
          <div className='mb-8 flex justify-center'>
            <div className='rounded-lg bg-white p-1 shadow-lg'>
              <button
                className={`rounded-md px-6 py-2 transition-colors ${
                  activeTab === 'outbound'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setActiveTab('outbound')}
              >
                {t.home.useCases.outbound}
              </button>
              <button
                className={`rounded-md px-6 py-2 transition-colors ${
                  activeTab === 'inbound'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setActiveTab('inbound')}
              >
                {t.home.useCases.inbound}
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <div
                key={index}
                className='rounded-2xl bg-white p-6 shadow-custom transition-shadow hover:shadow-purple'
              >
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary'>
                  <IconComponent className='h-6 w-6 text-white' />
                </div>
                <h3 className='mb-2 text-lg font-semibold'>{useCase.title}</h3>
                <p className='text-sm text-gray-600'>{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
