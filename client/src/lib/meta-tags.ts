// Meta tags configuration
// This file separates meta tags from components for better Fast Refresh support

export const metaTags = {
  default: {
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'UTF-8',
    robots: 'index, follow',
    author: 'Sondos AI',
    themeColor: '#3B82F6'
  },
  openGraph: {
    type: 'website',
    siteName: 'Sondos AI',
    locale: 'en_US',
    localeAlt: 'ar_SA'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sondos_ai',
    creator: '@sondos_ai'
  }
}

export const socialMetaTags = {
  facebook: {
    appId: 'your-facebook-app-id',
    pages: 'SondosAI'
  },
  linkedin: {
    company: 'sondos-ai'
  },
  google: {
    siteVerification: 'your-verification-code-here'
  },
  bing: {
    siteVerification: 'your-bing-verification-code-here'
  }
} 