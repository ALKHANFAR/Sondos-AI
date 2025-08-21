import React, { useState } from 'react'
import { Check, X, Star } from 'lucide-react'
import Button from './Button'

export default function FeatureComparison() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? 29 : 34,
      popular: false,
      description: 'Start automating calls with voice AI agents.',
      features: {
        // Core
        assistants: '1',
        multiLingual: true,
        outboundCampaigns: '1',
        voiceClones: '1',
        multiUserAccess: false,

        // Calls
        includedMinutes: '120 minutes',
        additionalCost: '$0.20/minute',
        elevenLabsIncluded: true,
        llmsSpeechToSpeech: true,
        transcribers: true,
        maxConcurrentCalls: '3',
        inboundOutbound: true,

        // Phone Numbers
        ownNumbers: 'Free',
        dedicatedNumbers: 'Starting at $3.99/number',
        sipTrunk: true,
        customCountry: false,
        sendSMS: true,

        // Features
        automationRuns: '900 monthly runs',
        midCallTools: false,
        knowledgeBase: false,
        embeddableWidget: false,
        appointmentScheduling: true,
        humanTransfer: true,
        dataExtraction: true,
        whiteLabel: false,
        customDomain: false,
        subAccounts: false,
        customAppearance: false,
        paymentIntegration: false,

        // Support
        email: true,
        liveChat: true,
        dedicatedSupport: false,
        earlyAccess: false,
      },
    },
    {
      name: 'Pro',
      price: isYearly ? 109 : 129,
      popular: true,
      description: 'For small businesses automating inbound and outbound calls.',
      features: {
        // Core
        assistants: '5',
        multiLingual: true,
        outboundCampaigns: '5',
        voiceClones: '5',
        multiUserAccess: false,

        // Calls
        includedMinutes: '700 minutes',
        additionalCost: '$0.16/minute',
        elevenLabsIncluded: true,
        llmsSpeechToSpeech: true,
        transcribers: true,
        maxConcurrentCalls: '10',
        inboundOutbound: true,

        // Phone Numbers
        ownNumbers: 'Free',
        dedicatedNumbers: 'Starting at $3.99/number',
        sipTrunk: true,
        customCountry: false,
        sendSMS: true,

        // Features
        automationRuns: '10,000 monthly runs',
        midCallTools: true,
        knowledgeBase: true,
        embeddableWidget: true,
        appointmentScheduling: true,
        humanTransfer: true,
        dataExtraction: true,
        whiteLabel: false,
        customDomain: false,
        subAccounts: false,
        customAppearance: false,
        paymentIntegration: false,

        // Support
        email: true,
        liveChat: true,
        dedicatedSupport: false,
        earlyAccess: false,
      },
    },
    {
      name: 'Agency',
      price: isYearly ? 211 : 249,
      popular: false,
      description: 'Ideal for agencies scaling customer engagement with automation.',
      features: {
        // Core
        assistants: 'Unlimited',
        multiLingual: true,
        outboundCampaigns: 'Unlimited',
        voiceClones: '10',
        multiUserAccess: false,

        // Calls
        includedMinutes: '1700 minutes',
        additionalCost: '$0.09/minute',
        elevenLabsIncluded: true,
        llmsSpeechToSpeech: true,
        transcribers: true,
        maxConcurrentCalls: '500',
        inboundOutbound: true,

        // Phone Numbers
        ownNumbers: 'Free',
        dedicatedNumbers: 'Starting at $3.99/number',
        sipTrunk: true,
        customCountry: true,
        sendSMS: true,

        // Features
        automationRuns: '100,000 monthly runs',
        midCallTools: true,
        knowledgeBase: true,
        embeddableWidget: true,
        appointmentScheduling: true,
        humanTransfer: true,
        dataExtraction: true,
        whiteLabel: false,
        customDomain: false,
        subAccounts: false,
        customAppearance: false,
        paymentIntegration: false,

        // Support
        email: true,
        liveChat: true,
        dedicatedSupport: false,
        earlyAccess: true,
      },
    },
  ]

  const featureCategories = [
    {
      name: 'Core',
      features: [
        { key: 'assistants', label: 'Assistants' },
        { key: 'multiLingual', label: 'Multi-lingual assistants' },
        { key: 'outboundCampaigns', label: 'Outbound campaigns' },
        { key: 'voiceClones', label: 'Voice clones' },
        { key: 'multiUserAccess', label: 'Multi-user access' },
      ],
    },
    {
      name: 'Calls',
      features: [
        { key: 'includedMinutes', label: 'Included minutes every month' },
        { key: 'additionalCost', label: 'Additional minute cost' },
        { key: 'elevenLabsIncluded', label: 'ElevenLabs included' },
        { key: 'llmsSpeechToSpeech', label: 'LLMs / Speech to speech models' },
        { key: 'transcribers', label: 'Transcribers' },
        { key: 'maxConcurrentCalls', label: 'Maximum calls at the same time' },
        { key: 'inboundOutbound', label: 'Inbound and outbound calls' },
      ],
    },
    {
      name: 'Phone Numbers',
      features: [
        { key: 'ownNumbers', label: 'Use your own mobile numbers' },
        { key: 'dedicatedNumbers', label: 'Dedicated phone numbers' },
        { key: 'sipTrunk', label: 'SIP Trunk integration' },
        { key: 'customCountry', label: 'Custom country provisioning' },
        { key: 'sendSMS', label: 'Send SMS' },
      ],
    },
    {
      name: 'Features',
      features: [
        { key: 'automationRuns', label: 'No-code automation platform with +300 integrations' },
        { key: 'midCallTools', label: 'Mid-call tools' },
        { key: 'knowledgeBase', label: 'Knowledge base (website & documents)' },
        { key: 'embeddableWidget', label: 'Embeddable web widget' },
        { key: 'appointmentScheduling', label: 'Real time appointment scheduling' },
        { key: 'humanTransfer', label: 'Real human call transfer' },
        { key: 'dataExtraction', label: 'Post call data extraction' },
      ],
    },
    {
      name: 'Support',
      features: [
        { key: 'email', label: 'Email' },
        { key: 'liveChat', label: 'Live chat' },
        { key: 'dedicatedSupport', label: '1-1 dedicated support over Slack/WhatsApp' },
        { key: 'earlyAccess', label: 'Early access to new features' },
      ],
    },
  ]

  const renderFeatureValue = (value: string | boolean | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className='mx-auto h-5 w-5 text-green-500' />
      ) : (
        <X className='mx-auto h-5 w-5 text-red-400' />
      )
    }
    return <span className='text-sm text-gray-700'>{value}</span>
  }

  return (
    <div className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-16 text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-900'>Plans comparison</h2>
          <p className='mb-8 text-xl text-gray-600'>Not sure which plan to choose?</p>

          {/* Billing Toggle */}
          <div className='mb-8 flex items-center justify-center'>
            <span
              className={`mr-3 text-lg ${!isYearly ? 'font-medium text-gray-900' : 'text-gray-500'}`}
            >
              Monthly
            </span>
            <button
              className={`relative h-8 w-16 rounded-full p-1 transition-colors duration-200 ${
                isYearly ? 'bg-green-500' : 'bg-gray-300'
              }`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                  isYearly ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`ml-3 text-lg ${isYearly ? 'font-medium text-gray-900' : 'text-gray-500'}`}
            >
              Yearly
            </span>
            {isYearly && (
              <span className='ml-3 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800'>
                2 months free
              </span>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            {/* Header */}
            <thead>
              <tr>
                <th className='w-1/4 p-4 text-left'></th>
                {plans.map((plan, index) => (
                  <th key={index} className='w-1/4 p-4 text-center'>
                    <div className='relative'>
                      {plan.popular && (
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2 transform'>
                          <span className='flex items-center rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white'>
                            <Star className='mr-1 h-4 w-4' />
                            Popular
                          </span>
                        </div>
                      )}
                      <div className='rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg'>
                        <h3 className='mb-2 text-2xl font-bold text-gray-900'>{plan.name}</h3>
                        <div className='mb-4 text-4xl font-bold text-gray-900'>
                          ${plan.price}
                          <span className='text-lg font-normal text-gray-500'>/Monthly</span>
                        </div>
                        <Button
                          className='w-full bg-green-500 text-white hover:bg-green-600'
                          size='lg'
                        >
                          Subscribe now →
                        </Button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature Categories */}
            <tbody>
              {featureCategories.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  {/* Category Header */}
                  <tr>
                    <td colSpan={4} className='p-4'>
                      <h4 className='rounded-lg bg-gray-50 p-4 text-xl font-bold text-gray-900'>
                        {category.name}
                      </h4>
                    </td>
                  </tr>

                  {/* Category Features */}
                  {category.features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className='border-b border-gray-100'>
                      <td className='p-4 font-medium text-gray-700'>{feature.label}</td>
                      {plans.map((plan, planIndex) => (
                        <td key={planIndex} className='p-4 text-center'>
                          {renderFeatureValue(
                            plan.features[feature.key as keyof typeof plan.features],
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
