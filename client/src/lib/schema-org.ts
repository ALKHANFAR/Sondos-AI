export const generateSchemaOrg = (page: string, locale: string = 'en') => {
  const baseUrl = 'https://sondos.ai'
  const isArabic = locale === 'ar'
  
  const schemas = {
    home: {
      organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Sondos AI',
        alternateName: isArabic ? 'سندس AI' : 'Sondos AI',
        url: baseUrl,
        logo: `${baseUrl}/assets/sondos-lockup-light.png`,
        description: isArabic 
          ? 'الشركة الرائدة في تقنية الذكاء الاصطناعي الصوتي للأعمال'
          : 'Leading AI voice technology company for businesses',
        foundingDate: '2024',
        industry: 'AI Voice Technology',
        numberOfEmployees: '50-100',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SA',
          addressLocality: 'Riyadh',
          addressRegion: 'Riyadh'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['English', 'Arabic'],
          telephone: '+966-XX-XXX-XXXX',
          email: 'info@sondos.ai'
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
        }
      },
      
      softwareApplication: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Sondos AI Voice Agents',
        description: isArabic 
          ? 'منصة ذكاء اصطناعي لأتمتة المكالمات وإدارة المحادثات'
          : 'AI platform for call automation and conversation management',
        url: baseUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          description: 'Free starter plan available'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1250',
          bestRating: '5',
          worstRating: '1'
        },
        provider: {
          '@type': 'Organization',
          name: 'Sondos AI',
          url: baseUrl
        }
      },
      
      webSite: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Sondos AI',
        url: baseUrl,
        description: isArabic 
          ? 'الموقع الرسمي لسندس AI - حلول الذكاء الاصطناعي الصوتي'
          : 'Official website of Sondos AI - AI voice solutions',
        inLanguage: [locale === 'ar' ? 'ar' : 'en'],
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    },
    
    industries: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Voice Agent Services',
        description: isArabic 
          ? 'خدمات وكلاء الذكاء الاصطناعي الصوتي لجميع الصناعات'
          : 'AI voice agent services for all industries',
        provider: {
          '@type': 'Organization',
          name: 'Sondos AI',
          url: baseUrl
        },
        serviceType: 'AI Voice Automation',
        areaServed: {
          '@type': 'Place',
          name: 'Global'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Industry-Specific AI Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Healthcare AI Voice Agents',
                description: 'AI voice automation for medical practices'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'E-commerce AI Voice Agents',
                description: 'AI voice automation for online stores'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Real Estate AI Voice Agents',
                description: 'AI voice automation for property management'
              }
            }
          ]
        }
      }
    },
    
    pricing: {
      product: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Sondos AI Voice Agent Plans',
        description: isArabic 
          ? 'خطط وكلاء الذكاء الاصطناعي الصوتي بأسعار معقولة'
          : 'Affordable AI voice agent plans',
        brand: {
          '@type': 'Brand',
          name: 'Sondos AI'
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Plan',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            description: 'Free plan for small businesses'
          },
          {
            '@type': 'Offer',
            name: 'Professional Plan',
            price: '99',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            description: 'Professional features for growing businesses'
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Plan',
            price: '299',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            description: 'Custom solutions for large organizations'
          }
        ]
      }
    }
  }
  
  return (schemas as Record<string, any>)[page] || schemas.home
}

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sondos AI',
    description: 'AI voice technology company',
    url: 'https://sondos.ai',
    telephone: '+966-XX-XXX-XXXX',
    email: 'info@sondos.ai',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh',
      postalCode: '12345',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136',
      longitude: '46.6753'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://twitter.com/SondosAI',
      'https://linkedin.com/company/sondos-ai'
    ]
  }
} 