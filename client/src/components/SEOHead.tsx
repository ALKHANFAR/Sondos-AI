import { useLanguage } from '@/hooks/useLanguage'
import { seoContent } from '@/lib/seo-content'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  page?: 'home' | 'industries' | 'pricing' | 'about' | 'resources' | 'blog' | 'how-it-works'
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url = 'https://sondos.ai',
  type = 'website',
  page,
}: SEOHeadProps) {
  const { locale } = useLanguage()
  
  // Get page-specific content if page is specified
  const pageContent = page && seoContent[page] ? seoContent[page] : null
  
  // Use page-specific content or fallback to defaults
  const defaultTitle = pageContent ? pageContent.title[locale === 'ar' ? 'ar' : 'en'] : 'Sondos AI - AI Voice Agents That Never Sleep'
  const defaultDescription = pageContent ? pageContent.description[locale === 'ar' ? 'ar' : 'en'] : 'Transform missed calls into booked appointments. Our AI voice agents handle customer inquiries, book appointments, and qualify leads 24/7 — so you can focus on closing deals.'
  const defaultKeywords = pageContent ? pageContent.keywords[locale === 'ar' ? 'ar' : 'en'] : 'AI voice agents, automated calling, customer service automation, appointment booking, lead qualification, business automation, voice AI, call center automation, missed calls solution, 24/7 customer service, Sondos AI'
  
  const isRTL = locale === 'ar'
  const langCode = locale === 'ar' ? 'ar' : 'en'

  // Arabic translations for SEO
  const arSEO = {
    title: 'سندس AI - وكلاء الصوت الذكي الذين لا ينامون أبداً',
    description:
      'حوّل المكالمات الفائتة إلى مواعيد محجوزة. وكلاؤنا الصوتيون الذكيون يتعاملون مع استفسارات العملاء ويحجزون المواعيد ويؤهلون العملاء المحتملين على مدار الساعة',
    keywords:
      'وكلاء الصوت الذكي, الاتصال الآلي, أتمتة خدمة العملاء, حجز المواعيد, تأهيل العملاء المحتملين, أتمتة الأعمال, الذكاء الاصطناعي الصوتي, أتمتة مركز الاتصال, حل المكالمات الفائتة, خدمة العملاء على مدار الساعة, سندس AI',
  }

  const currentTitle = isRTL ? arSEO.title : title
  const currentDescription = isRTL ? arSEO.description : description
  const currentKeywords = isRTL ? arSEO.keywords : keywords

  // Final values with fallbacks
  const finalTitle = currentTitle || defaultTitle
  const finalDescription = currentDescription || defaultDescription
  const finalKeywords = currentKeywords || defaultKeywords

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name='title' content={finalTitle} />
      <meta name='description' content={finalDescription} />
      <meta name='keywords' content={finalKeywords} />
      <meta name='author' content='Sondos AI Team' />
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <meta name='language' content={langCode} />
      <meta name='revisit-after' content='7 days' />

      {/* Viewport and responsive */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
      <meta name='theme-color' content='#dc2626' />
      <meta name='color-scheme' content='light dark' />
      
      {/* Performance and Security */}
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='referrer' content='origin-when-cross-origin' />
      <meta name='generator' content='Sondos AI Platform' />
      
      {/* Mobile optimizations */}
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='apple-mobile-web-app-title' content='Sondos AI' />
      <meta name='msapplication-TileColor' content='#dc2626' />
      <meta name='msapplication-config' content='/browserconfig.xml' />
      <meta name='msapplication-TileImage' content='/assets/sondos-mark-light.png' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={finalTitle} />
      <meta property='og:description' content={finalDescription} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={finalTitle} />
      <meta property='og:locale' content={isRTL ? 'ar_SA' : 'en_US'} />
      <meta property='og:site_name' content='Sondos AI' />
      <meta property='og:determiner' content='the' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={finalTitle} />
      <meta property='twitter:description' content={finalDescription} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:image:alt' content={finalTitle} />
      <meta property='twitter:creator' content='@SondosAI' />
      <meta property='twitter:site' content='@SondosAI' />

      {/* Additional SEO tags */}
      <meta name='application-name' content='Sondos AI' />
      <meta name='apple-mobile-web-app-title' content='Sondos AI' />
      <meta name='msapplication-TileColor' content='#dc2626' />
      <meta name='msapplication-config' content='/browserconfig.xml' />

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Alternate languages */}
      <link rel='alternate' hrefLang='en' href={`${url}?lang=en`} />
      <link rel='alternate' hrefLang='ar' href={`${url}?lang=ar`} />
      <link rel='alternate' hrefLang='x-default' href={url} />
      
      {/* Preconnect to external domains for performance */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link rel='dns-prefetch' href='https://www.google-analytics.com' />
      <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
      
      {/* Resource hints for critical resources */}
      <link rel='preload' href='/assets/sondos-lockup-light.png' as='image' type='image/png' />
      <link rel='preload' href='/fonts/inter-var.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
      <link rel='prefetch' href='/pricing' />
      <link rel='prefetch' href='/industries' />
      <link rel='prefetch' href='/blog' />

      {/* Favicon */}
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#dc2626' />

      {/* Rich Snippets - JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Sondos AI',
            description: finalDescription,
            url: url,
            logo: `${url}/assets/sondos-lockup-light.png`,
            image: image,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            browserRequirements: 'Requires JavaScript. Requires HTML5.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              description: 'Free starter plan available',
              validFrom: '2024-01-01',
              validThrough: '2025-12-31'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '250',
              bestRating: '5',
              worstRating: '1',
            },
            provider: {
              '@type': 'Organization',
              name: 'Sondos AI',
              url: url,
              logo: `${url}/assets/sondos-lockup-light.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Arabic'],
                telephone: '+966-XX-XXX-XXXX',
                email: 'info@sondos.ai',
                areaServed: 'SA',
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '00:00',
                  closes: '23:59'
                }
              },
            },
            featureList: [
              'AI Voice Agents',
              '24/7 Customer Service',
              'Appointment Booking',
              'Lead Qualification',
              'Multi-language Support',
              'CRM Integration',
              'Analytics Dashboard'
            ],
            softwareVersion: '1.0.0',
            releaseNotes: 'Initial release with core AI voice agent functionality',
            downloadUrl: url,
            installUrl: url,
            updateUrl: url
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
            name: 'Sondos AI',
            alternateName: ['سندس AI', 'Sondos'],
            url: url,
            logo: `${url}/assets/sondos-lockup-light.png`,
            description: finalDescription,
            foundingDate: '2024',
            industry: 'AI Voice Technology',
            numberOfEmployees: '10-50',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'SA',
              addressLocality: 'Riyadh',
              addressRegion: 'Riyadh',
              postalCode: 'XXXXX'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: ['English', 'Arabic'],
              telephone: '+966-XX-XXX-XXXX',
              email: 'info@sondos.ai',
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59'
              }
            },
            sameAs: [
              'https://twitter.com/SondosAI',
              'https://linkedin.com/company/sondos-ai',
              'https://facebook.com/SondosAI',
              'https://instagram.com/sondosai',
              'https://youtube.com/@sondosai'
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Voice Agent Services',
              description: 'Complete AI voice automation solutions for businesses'
            },
            areaServed: {
              '@type': 'Place',
              name: 'Global',
              description: 'Available worldwide with local support'
            }
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Voice Agent Services',
            provider: {
              '@type': 'Organization',
              name: 'Sondos AI',
              url: url,
            },
            description: finalDescription,
            serviceType: 'AI Voice Automation',
            areaServed: {
              '@type': 'Place',
              name: 'Global',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Voice Agent Plans',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Starter Plan',
                    description: 'Basic AI voice agent for small businesses',
                    price: '0',
                    priceCurrency: 'USD'
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Professional Plan',
                    description: 'Advanced AI voice agents for growing businesses',
                    price: '99',
                    priceCurrency: 'USD'
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise Plan',
                    description: 'Custom AI voice solutions for large organizations',
                    price: '299',
                    priceCurrency: 'USD'
                  },
                },
              ],
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: url,
              servicePhone: '+966-XX-XXX-XXXX',
              serviceEmail: 'info@sondos.ai'
            },
            serviceOutput: {
              '@type': 'Product',
              name: 'Automated Customer Service',
              description: '24/7 automated customer support and lead qualification'
            }
          }),
        }}
      />

      {/* FAQ Schema for better search results */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Sondos AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sondos AI provides intelligent voice agents that handle customer calls, book appointments, and qualify leads 24/7 using advanced artificial intelligence.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does AI voice agent work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our AI voice agents use natural language processing to understand customer inquiries, respond appropriately, and perform tasks like scheduling appointments and collecting information.',
                },
              },
              {
                '@type': 'Question',
                name: 'What languages does Sondos AI support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sondos AI supports multiple languages including English and Arabic, with ongoing expansion to support more languages and dialects.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is there a free trial available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer a free starter plan that allows you to test our AI voice agents with limited functionality before upgrading.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get started?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can get started within minutes. Simply sign up, configure your AI voice agent, and start receiving calls immediately.',
                },
              }
            ],
          }),
        }}
      />

      {/* WebSite Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Sondos AI',
            url: url,
            description: finalDescription,
            inLanguage: [locale === 'ar' ? 'ar' : 'en'],
            potentialAction: {
              '@type': 'SearchAction',
              target: `${url}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sondos AI',
              url: url
            },
            copyrightYear: '2024',
            copyrightHolder: {
              '@type': 'Organization',
              name: 'Sondos AI'
            }
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: url
              },
              ...(page ? [{
                '@type': 'ListItem',
                position: 2,
                name: page.charAt(0).toUpperCase() + page.slice(1).replace('-', ' '),
                item: `${url}/${page}`
              }] : [])
            ]
          }),
        }}
      />
    </>
  )
}
