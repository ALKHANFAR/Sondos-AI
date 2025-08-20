import { useLanguage } from '@/hooks/useLanguage'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = 'TaskMaster - AI Voice Agents That Never Sleep',
  description = 'Transform missed calls into booked appointments. Our AI voice agents handle customer inquiries, book appointments, and qualify leads 24/7 — so you can focus on closing deals.',
  keywords = 'AI voice agents, automated calling, customer service automation, appointment booking, lead qualification, business automation, voice AI, call center automation, missed calls solution, 24/7 customer service',
  image = '/og-image.jpg',
  url = 'https://taskmaster.ai',
  type = 'website',
}: SEOHeadProps) {
  const { locale } = useLanguage()

  const isRTL = locale === 'ar'
  const langCode = locale === 'ar' ? 'ar' : 'en'

  // Arabic translations for SEO
  const arSEO = {
    title: 'تاسك ماستر - وكلاء الصوت الذكي الذين لا ينامون أبداً',
    description:
      'حوّل المكالمات الفائتة إلى مواعيد محجوزة. وكلاؤنا الصوتيون الذكيون يتعاملون مع استفسارات العملاء ويحجزون المواعيد ويؤهلون العملاء المحتملين على مدار الساعة',
    keywords:
      'وكلاء الصوت الذكي, الاتصال الآلي, أتمتة خدمة العملاء, حجز المواعيد, تأهيل العملاء المحتملين, أتمتة الأعمال, الذكاء الاصطناعي الصوتي, أتمتة مركز الاتصال, حل المكالمات الفائتة, خدمة العملاء على مدار الساعة',
  }

  const currentTitle = isRTL ? arSEO.title : title
  const currentDescription = isRTL ? arSEO.description : description
  const currentKeywords = isRTL ? arSEO.keywords : keywords

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{currentTitle}</title>
      <meta name='title' content={currentTitle} />
      <meta name='description' content={currentDescription} />
      <meta name='keywords' content={currentKeywords} />
      <meta name='author' content='TaskMaster Team' />
      <meta name='robots' content='index, follow' />
      <meta name='language' content={langCode} />
      <meta name='revisit-after' content='7 days' />

      {/* Viewport and responsive */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#dc2626' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={currentTitle} />
      <meta property='og:description' content={currentDescription} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content={isRTL ? 'ar_SA' : 'en_US'} />
      <meta property='og:site_name' content='TaskMaster' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={currentTitle} />
      <meta property='twitter:description' content={currentDescription} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:creator' content='@TaskMasterAI' />

      {/* Additional SEO tags */}
      <meta name='application-name' content='TaskMaster' />
      <meta name='apple-mobile-web-app-title' content='TaskMaster' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Alternate languages */}
      <link rel='alternate' hrefLang='en' href={`${url}?lang=en`} />
      <link rel='alternate' hrefLang='ar' href={`${url}?lang=ar`} />
      <link rel='alternate' hrefLang='x-default' href={url} />

      {/* Favicon */}
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />

      {/* Rich Snippets - JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'TaskMaster',
            description: currentDescription,
            url: url,
            logo: `${url}/logo.png`,
            image: image,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '2500',
              bestRating: '5',
              worstRating: '1',
            },
            provider: {
              '@type': 'Organization',
              name: 'TaskMaster',
              url: url,
              logo: `${url}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Arabic'],
              },
            },
          }),
        }}
      />

      {/* Business Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TaskMaster',
            url: url,
            logo: `${url}/logo.png`,
            description: currentDescription,
            foundingDate: '2024',
            industry: 'AI Voice Technology',
            numberOfEmployees: '50-100',
            sameAs: [
              'https://twitter.com/TaskMasterAI',
              'https://linkedin.com/company/taskmaster-ai',
              'https://facebook.com/TaskMasterAI',
            ],
          }),
        }}
      />
    </>
  )
}
