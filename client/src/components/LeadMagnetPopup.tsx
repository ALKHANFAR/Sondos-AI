import { useState, useEffect } from 'react'
import { X, Download, Calculator, BookOpen, Gift } from 'lucide-react'
import Button from './Button'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

interface LeadMagnetPopupProps {
  isOpen: boolean
  onClose: () => void
  type: 'exit-intent' | 'timed' | 'manual'
}

export default function LeadMagnetPopup({ isOpen, onClose, type }: LeadMagnetPopupProps) {
  const [selectedMagnet, setSelectedMagnet] = useState('roi-calculator')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const leadMagnets = [
    {
      id: 'roi-calculator',
      title: t.leadMagnet.roiCalculator,
      description: t.leadMagnet.roiDescription,
      icon: Calculator,
      value: '$2,500 Value',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      id: 'ebook',
      title: t.leadMagnet.completeGuide,
      description: t.leadMagnet.guideDescription,
      icon: BookOpen,
      value: '$150 Value',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      id: 'free-trial',
      title: t.leadMagnet.freeTrial,
      description: t.leadMagnet.trialDescription,
      icon: Gift,
      value: '$300 Value',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: t.leadMagnet.success,
      description: t.leadMagnet.resourceSent,
      variant: 'default',
    })

    setIsSubmitting(false)
    setEmail('')
    onClose()
  }

  const getPopupTitle = () => {
    switch (type) {
      case 'exit-intent':
        return t.leadMagnet.waitDontMiss
      case 'timed':
        return t.leadMagnet.limitedTime
      default:
        return t.leadMagnet.freeResources
    }
  }

  const getUrgencyText = () => {
    switch (type) {
      case 'exit-intent':
        return t.leadMagnet.beforeYouGo
      case 'timed':
        return t.leadMagnet.beenOnSite
      default:
        return t.leadMagnet.chooseResource
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm'>
      <div className='relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl'>
        {/* Background Pattern */}
        <div className='absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-red-100/50 to-transparent'></div>
        <div className='absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-gradient-to-tr from-purple-100/50 to-transparent'></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute right-6 top-6 z-10 text-gray-500 hover:text-gray-700'
        >
          <X className='h-6 w-6' />
        </button>

        <div className='relative z-10 p-8'>
          {/* Header */}
          <div className='mb-8 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>{getPopupTitle()}</h2>
            <p className='text-lg text-gray-600'>{getUrgencyText()}</p>
          </div>

          {/* Lead Magnets Grid */}
          <div className='mb-8 grid gap-4 md:grid-cols-3'>
            {leadMagnets.map(magnet => {
              const IconComponent = magnet.icon
              const isSelected = selectedMagnet === magnet.id

              return (
                <div
                  key={magnet.id}
                  onClick={() => setSelectedMagnet(magnet.id)}
                  className={`cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
                    isSelected
                      ? 'scale-105 border-red-500 bg-red-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`h-12 w-12 ${magnet.bgColor} mb-4 flex items-center justify-center rounded-xl`}
                  >
                    <IconComponent className={`h-6 w-6 ${magnet.color}`} />
                  </div>

                  <h3 className='mb-2 font-bold text-gray-900'>{magnet.title}</h3>

                  <p className='mb-3 text-sm text-gray-600'>{magnet.description}</p>

                  <div className={`text-sm font-bold ${magnet.color}`}>{magnet.value}</div>
                </div>
              )
            })}
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='flex space-x-3'>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your business email'
                required
                className='flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-red-500'
              />
              <Button
                type='submit'
                disabled={isSubmitting || !email}
                className='flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 text-white hover:from-red-700 hover:to-red-800'
              >
                {isSubmitting ? (
                  <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent' />
                ) : (
                  <Download className='h-5 w-5' />
                )}
                <span>{isSubmitting ? t.leadMagnet.sending : t.leadMagnet.getFreeResource}</span>
              </Button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className='mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500'>
            <div className='flex items-center space-x-2'>
              <div className='h-2 w-2 rounded-full bg-green-500'></div>
              <span>No spam, ever</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='h-2 w-2 rounded-full bg-blue-500'></div>
              <span>Instant delivery</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='h-2 w-2 rounded-full bg-purple-500'></div>
                              <span>2,500+ downloads</span>
            </div>
          </div>

          {/* Urgency Timer for timed popups */}
          {type === 'timed' && (
            <div className='mt-6 text-center'>
              <div className='inline-flex items-center space-x-2 rounded-full bg-red-100 px-4 py-2 text-red-700'>
                <div className='h-2 w-2 animate-pulse rounded-full bg-red-500'></div>
                <span className='font-semibold'>Limited time offer - expires in 5 minutes</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
