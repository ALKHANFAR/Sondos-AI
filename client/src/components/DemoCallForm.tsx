import { useState, useRef } from 'react'
import { Phone } from 'lucide-react'
import Button from './Button'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

export default function DemoCallForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '+966',
    phone: '',
  })
  const [isSliding, setIsSliding] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSlideComplete = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: t.demoForm.missingInfo,
        description: t.demoForm.fillAllFields,
        variant: 'destructive',
      })
      return
    }

    // Show success message
    toast({
      title: t.demoForm.callInitiated,
      description: t.demoForm.agentWillCall,
      variant: 'default',
    })

    // Reset form
    setFormData({ name: '', email: '', country: '+966', phone: '' })
    setIsSliding(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsSliding(true)
    const slider = sliderRef.current
    if (!slider) return

    const startX = e.clientX
    const sliderRect = slider.getBoundingClientRect()

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX
      const distance = currentX - startX
      const maxDistance = sliderRect.width - 60 // thumb width
      const clampedDistance = Math.max(0, Math.min(distance, maxDistance))

      slider.style.transform = `translateX(${clampedDistance}px)`

      if (clampedDistance >= maxDistance * 0.8) {
        handleSlideComplete()
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }

    const handleMouseUp = () => {
      if (isSliding) {
        slider.style.transform = 'translateX(0)'
        setIsSliding(false)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className='mx-auto mt-16 max-w-md rounded-2xl bg-white p-6 shadow-custom'>
      <h3 className='mb-4 text-center text-lg font-semibold'>{t.demoForm.title}</h3>
      <div className='space-y-4'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder={t.demoForm.name}
          className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
        />

        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          placeholder={t.demoForm.email}
          className='w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
        />

        <div className='flex space-x-2 rtl:space-x-reverse'>
          <select
            name='country'
            value={formData.country}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-primary'
          >
            <option value='+966'>🇸🇦 +966</option>
            <option value='+1'>🇺🇸 +1</option>
            <option value='+44'>🇬🇧 +44</option>
            <option value='+49'>🇩🇪 +49</option>
          </select>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t.demoForm.phone}
            className='flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary'
          />
        </div>

        <div className='relative'>
          <div className='slider-container rounded-full bg-gray-100 p-2'>
            <div
              ref={sliderRef}
              className='slider-thumb flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary transition-transform hover:scale-110'
              onMouseDown={handleMouseDown}
            >
              <Phone className='h-5 w-5 text-white' />
            </div>
          </div>
          <span className='mt-2 block text-center text-sm text-gray-600'>{t.home.slideToCall}</span>
        </div>
      </div>
    </div>
  )
}
