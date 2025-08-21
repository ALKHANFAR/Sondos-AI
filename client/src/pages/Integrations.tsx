import { useMemo, useState } from 'react'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { useLanguage } from '@/hooks/useLanguage'
import { INTEGRATIONS as DATA, CATEGORIES, type IntegrationItem } from '@/lib/integrationsData'

type Integration = {
  name: string
  key: string // internal key
  iconSlug?: string // simpleicons slug
  brandColor?: string // hex color
}

const INTEGRATIONS: Integration[] = [
  { key: 'stripe', name: 'Stripe', iconSlug: 'stripe', brandColor: '#635BFF' },
  { key: 'zapier', name: 'Zapier', iconSlug: 'zapier', brandColor: '#FF4F00' },
  { key: 'slack', name: 'Slack', iconSlug: 'slack', brandColor: '#4A154B' },
  { key: 'hubspot', name: 'HubSpot', iconSlug: 'hubspot', brandColor: '#FF7A59' },
  { key: 'salesforce', name: 'Salesforce', iconSlug: 'salesforce', brandColor: '#00A1E0' },
  {
    key: 'google-calendar',
    name: 'Google Calendar',
    iconSlug: 'googlecalendar',
    brandColor: '#1A73E8',
  },
  { key: 'google-sheets', name: 'Google Sheets', iconSlug: 'googlesheets', brandColor: '#0F9D58' },
  { key: 'notion', name: 'Notion', iconSlug: 'notion', brandColor: '#111827' },
  { key: 'airtable', name: 'Airtable', iconSlug: 'airtable', brandColor: '#FFB400' },
  { key: 'twilio', name: 'Twilio', iconSlug: 'twilio', brandColor: '#F22F46' },
  { key: 'whatsapp', name: 'WhatsApp', iconSlug: 'whatsapp', brandColor: '#25D366' },
  { key: 'telegram', name: 'Telegram', iconSlug: 'telegram', brandColor: '#2AABEE' },
  { key: 'shopify', name: 'Shopify', iconSlug: 'shopify', brandColor: '#95BF47' },
  { key: 'woocommerce', name: 'WooCommerce', iconSlug: 'woocommerce', brandColor: '#7F54B3' },
  { key: 'wordpress', name: 'WordPress', iconSlug: 'wordpress', brandColor: '#21759B' },
  { key: 'zendesk', name: 'Zendesk', iconSlug: 'zendesk', brandColor: '#03363D' },
  { key: 'intercom', name: 'Intercom', iconSlug: 'intercom', brandColor: '#1F8DED' },
  { key: 'freshdesk', name: 'Freshdesk', iconSlug: 'freshdesk', brandColor: '#28C78E' },
  { key: 'calendly', name: 'Calendly', iconSlug: 'calendly', brandColor: '#006BFF' },
  { key: 'caldotcom', name: 'Cal.com', iconSlug: 'caldotcom', brandColor: '#111827' },
  {
    key: 'microsoft-teams',
    name: 'Microsoft Teams',
    iconSlug: 'microsoftteams',
    brandColor: '#6264A7',
  },
  { key: 'outlook', name: 'Outlook', iconSlug: 'microsoftoutlook', brandColor: '#0A61EB' },
  { key: 'zoom', name: 'Zoom', iconSlug: 'zoom', brandColor: '#2D8CFF' },
  { key: 'sendgrid', name: 'SendGrid', iconSlug: 'sendgrid', brandColor: '#1A82E2' },
  { key: 'mailchimp', name: 'Mailchimp', iconSlug: 'mailchimp', brandColor: '#FFE01B' },
  { key: 'klaviyo', name: 'Klaviyo', iconSlug: 'klaviyo', brandColor: '#18C964' },
  { key: 'pipedrive', name: 'Pipedrive', iconSlug: 'pipedrive', brandColor: '#121212' },
  { key: 'monday', name: 'Monday.com', iconSlug: 'mondaydotcom', brandColor: '#1F7AFC' },
  { key: 'asana', name: 'Asana', iconSlug: 'asana', brandColor: '#F06A6A' },
  { key: 'trello', name: 'Trello', iconSlug: 'trello', brandColor: '#0079BF' },
  { key: 'jira', name: 'Jira', iconSlug: 'jira', brandColor: '#2684FF' },
  { key: 'quickbooks', name: 'QuickBooks', iconSlug: 'intuitquickbooks', brandColor: '#2CA01C' },
  { key: 'xero', name: 'Xero', iconSlug: 'xero', brandColor: '#13B5EA' },
  { key: 'paypal', name: 'PayPal', iconSlug: 'paypal', brandColor: '#0070BA' },
  { key: 'google-ads', name: 'Google Ads', iconSlug: 'googleads', brandColor: '#4285F4' },
  { key: 'linkedin-ads', name: 'LinkedIn Ads', iconSlug: 'linkedin', brandColor: '#0A66C2' },
  { key: 'google-drive', name: 'Google Drive', iconSlug: 'googledrive', brandColor: '#1A73E8' },
  { key: 'dropbox', name: 'Dropbox', iconSlug: 'dropbox', brandColor: '#0061FF' },
  { key: 'onedrive', name: 'OneDrive', iconSlug: 'microsoftonedrive', brandColor: '#0364B8' },
  { key: 'gohighlevel', name: 'GoHighLevel', iconSlug: undefined, brandColor: '#0EA5E9' },
  { key: 'webflow', name: 'Webflow', iconSlug: 'webflow', brandColor: '#4353FF' },
  { key: 'wix', name: 'Wix', iconSlug: 'wix', brandColor: '#0C6EFF' },
  { key: 'squarespace', name: 'Squarespace', iconSlug: 'squarespace', brandColor: '#222222' },
  { key: 'make', name: 'Make (Integromat)', iconSlug: 'make', brandColor: '#6F3FF5' },
  { key: 'n8n', name: 'n8n', iconSlug: 'n8n', brandColor: '#F46A6A' },
  { key: 'bubble', name: 'Bubble', iconSlug: 'bubble', brandColor: '#1F45FF' },
  { key: 'supabase', name: 'Supabase', iconSlug: 'supabase', brandColor: '#3ECF8E' },
]

function Logo({ name, color, slug }: { name: string; color?: string; slug?: string }) {
  const url = slug
    ? `https://cdn.simpleicons.org/${slug}/${(color || '#111827').replace('#', '')}`
    : null
  if (url) {
    return (
      <div
        className='flex h-12 w-12 items-center justify-center rounded-xl border bg-white'
        style={{ borderColor: '#EEF2F7' }}
      >
        <img
          src={url}
          alt=''
          width={28}
          height={28}
          loading='lazy'
          decoding='async'
          onError={e => {
            ;(e.currentTarget as HTMLImageElement).style.display = 'none'
          }}
        />
      </div>
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
    <div
      className='flex h-12 w-12 items-center justify-center rounded-xl border'
      style={{
        background: `linear-gradient(135deg, ${color || '#3d2daa'}15, ${color || '#3d2daa'}25)`,
        borderColor: '#EEF2F7',
      }}
      aria-hidden
    >
      <span className='font-semibold' style={{ color: color || '#3d2daa' }}>
        {letters}
      </span>
    </div>
  )
}

export default function Integrations() {
  const { locale } = useLanguage()
  const isArabic = locale === 'ar'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let items: IntegrationItem[] =
      category === 'All' ? DATA : DATA.filter(i => i.categories.includes(category))
    if (q) items = items.filter(i => i.name.toLowerCase().includes(q))
    return items.sort((a, b) => a.name.localeCompare(b.name))
  }, [query, category])

  return (
    <div className='min-h-screen'>
      <Section className='py-16'>
        <Container>
          {/* Header */}
          <div className='mx-auto mb-10 max-w-3xl text-center'>
            <h1 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl'>
              {isArabic ? 'التكاملات' : 'Integrations'}
            </h1>
            <p className='text-gray-600'>
              {isArabic
                ? 'عرض احترافي لأشهر الأدوات — الاسم والشعار فقط. ابحث بسرعة عن التكامل الذي تحتاجه.'
                : 'A professional, minimal gallery — name and logo only. Quickly find the integration you need.'}
            </p>
          </div>

          {/* Filters */}
          <div className='mx-auto mb-8 flex max-w-5xl flex-col gap-4'>
            {/* Categories */}
            <div className='flex flex-wrap justify-center gap-2'>
              {CATEGORIES.map(cat => (
                <button
                  key={cat as unknown as string}
                  onClick={() => setCategory(cat as unknown as string)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${category === (cat as unknown as string) ? 'text-white' : 'text-gray-700'}`}
                  style={{
                    background: category === (cat as unknown as string) ? '#3d2daa' : 'white',
                    borderColor: '#E5E7EB',
                  }}
                >
                  {cat as unknown as string}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className='mx-auto w-full max-w-xl'>
              <label className='sr-only' htmlFor='integration-search'>
                {isArabic ? 'بحث' : 'Search'}
              </label>
              <input
                id='integration-search'
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={isArabic ? 'ابحث باسم الأداة…' : 'Search integrations…'}
                className='w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2'
                style={{ borderColor: '#E5E7EB', boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}
              />
            </div>
          </div>

          {/* Grid */}
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {filtered.map(item => {
              return (
                <div
                  key={item.key}
                  className='group flex flex-col items-center gap-3 rounded-2xl border bg-white p-4 text-center transition-all duration-200 hover:shadow-md'
                  style={{ borderColor: '#EEF2F7' }}
                  dir='ltr'
                >
                  <Logo name={item.name} color={item.brandColor} slug={item.iconSlug} />
                  <div className='font-semibold leading-tight text-gray-900'>{item.name}</div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </div>
  )
}
