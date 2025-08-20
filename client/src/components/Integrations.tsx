import Container from './Container'
import Section from './Section'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'
import { Link } from 'wouter'

type Brand = { name: string; slug?: string; color?: string }

function Logo({ name, slug, color }: Brand) {
  if (slug) {
    // Natural brand color from Simple Icons (no custom color override)
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
        className='h-8 w-auto'
        loading='lazy'
        decoding='async'
      />
    )
  }
  const letters = (
    name
      .split(/\s+/)
      .map(p => p[0])
      .join('')
      .slice(0, 2) || '•'
  ).toUpperCase()
  return (
    <span className='text-base font-semibold' style={{ color: color || '#0EA5E9' }}>
      {letters}
    </span>
  )
}

export default function Integrations() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  const integrations: Brand[] = [
    { name: 'Zapier', slug: 'zapier' },
    { name: 'Slack', slug: 'slack' },
    { name: 'Cal.com', slug: 'caldotcom' },
    { name: 'Zoho', slug: 'zoho' },
    { name: 'GoHighLevel', color: '#0EA5E9' },
    { name: 'HubSpot', slug: 'hubspot' },
  ]

  return (
    <Section>
      <Container className='text-center'>
        <h2 className='mb-3 text-3xl font-bold text-gray-900 md:text-4xl'>
          {t.home.integrations.title}
        </h2>
        <p className='mb-10 text-gray-600 md:mb-12'>{t.home.integrations.subtitle}</p>

        <div className='marquee-wrapper'>
          <div className='marquee-track'>
            {[...integrations, ...integrations].map((integration, i) => (
              <Link
                key={`${integration.name}-${i}`}
                href='/integrations'
                aria-label={`${integration.name} — view all integrations`}
              >
                <div className='marquee-item flex items-center justify-center gap-3 opacity-95 transition hover:opacity-100'>
                  <Logo {...integration} />
                  <span className='text-sm font-medium' style={{ color: '#374151' }}>
                    {integration.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='mt-10'>
          <Link
            href='/integrations'
            className='inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:shadow-sm'
            style={{ borderColor: '#E5E7EB', color: '#374151' }}
          >
            {locale === 'ar' ? 'عرض كلّ التكاملات' : 'View all integrations'}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
