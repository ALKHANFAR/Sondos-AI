import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  return (
    <Section className='relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-purple-50/30'>
      {/* Background decoration */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute left-10 top-20 h-32 w-32 rounded-full border border-blue-200'></div>
        <div className='absolute bottom-20 right-10 h-24 w-24 rounded-full border border-purple-200'></div>
        <div className='absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-red-200'></div>
      </div>

      <Container>
        {/* Header */}
        <div className='mx-auto mb-16 max-w-4xl text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
            {t.home.testimonials.title}
          </h2>
          <p className='text-xl leading-relaxed text-gray-600'>{t.home.testimonials.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className='mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {t.home.testimonials.items.map((testimonial: any, index: number) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl'
            >
              {/* Background gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>

              {/* Quote icon */}
              <div className='absolute right-6 top-6 opacity-10 transition-opacity duration-300 group-hover:opacity-20'>
                <Quote className='h-12 w-12 text-blue-600' />
              </div>

              <div className='relative z-10'>
                {/* Stars */}
                <div className='mb-4 flex space-x-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>

                {/* Main quote */}
                <blockquote className='mb-6 text-lg font-medium leading-relaxed text-gray-700'>
                  "{testimonial.quote}"
                </blockquote>

                {/* Stats highlight */}
                {testimonial.stat && (
                  <div className='mb-6 rounded-2xl bg-gradient-to-r from-green-100 to-blue-100 p-4'>
                    <div className='text-center'>
                      <div className='mb-1 text-2xl font-bold text-green-700'>
                        {testimonial.stat}
                      </div>
                      <div className='text-sm font-medium text-green-600'>
                        {testimonial.statDescription}
                      </div>
                    </div>
                  </div>
                )}

                {/* Author info */}
                <div className='flex items-center space-x-4'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-lg font-bold text-white'>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className='text-lg font-semibold text-gray-900'>{testimonial.name}</div>
                    <div className='text-sm text-gray-600'>{testimonial.title}</div>
                    <div className='text-sm font-medium text-gray-500'>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className='mt-16 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg'>
          <div className='mb-8 text-center'>
            <h3 className='mb-2 text-2xl font-bold text-gray-900'>
              {t.home.testimonials.statsTitle}
            </h3>
            <p className='text-gray-600'>{t.home.testimonials.statsSubtitle}</p>
          </div>

          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
                          {t.home.testimonials.testimonialStats.map((stat: any, index: number) => (
              <div key={index} className='text-center'>
                <div className='mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl'>
                  {stat.number}
                </div>
                <div className='font-medium text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='mt-12 text-center'>
          <div className='inline-flex cursor-pointer items-center space-x-2 font-semibold text-blue-600 transition-colors hover:text-blue-700'>
            <span>{t.home.testimonials.cta}</span>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  )
}
