import React from 'react'
import { Link } from 'wouter'
import { useState, useEffect } from 'react'
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe,
  Linkedin,
  MessageCircle,
  Star,
  Award,
  Shield,
  Zap
} from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterLink {
  label: string
  href: string
  external?: boolean
  icon?: React.ReactNode
}

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  color: string
}

export default function Footer() {
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en
  const [email, setEmail] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  // Show back to top button when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/sondoscallcenter/',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'hover:text-blue-400'
    }
  ]

  // Footer sections
  const footerSections: FooterSection[] = [
    {
      title: t.footer.sections.product,
      links: [
        { label: t.nav.solution, href: '/solution' },
        { label: t.nav.industries, href: '/industries' },
        { label: t.nav.pricing, href: '/pricing' },
        { label: t.nav.integrations, href: '/integrations' },
        { label: t.nav.getStarted, href: '#demo' }
      ]
    },
    {
      title: t.footer.sections.resources,
      links: [
        { label: t.nav.resources, href: '/resources' },
        { label: t.nav.blog, href: '/blog' },
        { label: t.nav.caseStudies, href: '/case-studies' },
        { label: 'API Documentation', href: '/docs/api', external: true },
        { label: 'System Status', href: 'https://status.sondos-ai.com', external: true }
      ]
    },
    {
      title: t.footer.sections.legal,
      links: [
        { label: t.footer.legal.privacy, href: '/privacy' },
        { label: t.footer.legal.terms, href: '/terms' },
        { label: t.footer.legal.cookies, href: '/cookies' },
        { label: t.footer.legal.gdpr, href: '/gdpr' },
        { label: 'Security', href: '/security' }
      ]
    }
  ]

  // Quick contact info
  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      label: 'Saudi Arabia',
      value: '+966 53 189 9155',
      href: 'https://api.whatsapp.com/send/?phone=966531899155'
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: 'USA',
      value: '+1 463 258 8954',
      href: 'tel:+14632588954'
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: 'Email',
      value: 'info@sondos-ai.com',
      href: 'mailto:info@sondos-ai.com'
    }
  ]

  // Company achievements/stats
  const achievements = [
    { icon: <Star className="h-5 w-5" />, label: '4.9/5', subtitle: 'Customer Rating' },
    { icon: <Award className="h-5 w-5" />, label: '50K+', subtitle: 'Calls Handled' },
                { icon: <Shield className="h-5 w-5" />, label: '99.5%', subtitle: 'Uptime' },
    { icon: <Zap className="h-5 w-5" />, label: '24/7', subtitle: 'Support' }
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubscribing(false)
    setEmail('')
    // Show success message (you can implement toast notification)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer 
        role="contentinfo" 
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        aria-labelledby="footer-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-800/20 to-transparent opacity-50" />
        
        <Container>
          <div className="relative">
            {/* Newsletter Section */}
            <div className="border-b border-gray-700 py-12">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Stay Updated with Sondos AI
                </h2>
                <p className="mb-8 text-lg text-gray-300">
                  Get the latest updates, insights, and AI innovations delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="mx-auto flex max-w-md gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="rounded-lg bg-gradient-to-r from-primary to-red-600 px-6 py-3 font-medium text-white transition-all hover:from-red-600 hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-16">
              <div className="grid gap-12 lg:grid-cols-12">
                {/* Company Info - 4 columns */}
                <div className="lg:col-span-4">
                  <div className="mb-6">
                    <Logo 
                      variant="light" 
                      useLockup={true} 
                      showText={true} 
                      showTagline={false} 
                      size={48} 
                    />
                  </div>
                  <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                    {t.footer.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="mb-8 grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-3">
                        <div className="text-primary">
                          {achievement.icon}
                        </div>
                        <div>
                          <div className="font-bold text-white">{achievement.label}</div>
                          <div className="text-xs text-gray-400">{achievement.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-all hover:bg-gray-700 ${social.color} focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          aria-label={`Follow us on ${social.name}`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Contact - 3 columns */}
                <div className="lg:col-span-3">
                  <h3 className="mb-6 text-xl font-bold text-white">Quick Contact</h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-3 rounded-lg bg-gray-800/30 p-4 transition-all hover:bg-gray-800/50"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="text-primary">{contact.icon}</div>
                        <div>
                          <div className="text-sm text-gray-400">{contact.label}</div>
                          <div className="font-medium text-white" dir="ltr">{contact.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* WhatsApp Support */}
                  <div className="mt-6">
                    <a
                      href="https://api.whatsapp.com/send/?phone=966531899155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 rounded-lg bg-green-600 p-4 font-medium text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                      <MessageCircle className="h-5 w-5" />
                      24/7 WhatsApp Support
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div className="mt-6 rounded-lg bg-gray-800/30 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium text-white">Office Hours</span>
                    </div>
                    <p className="text-sm text-gray-400">{t.footer.contact.workingHours}</p>
                  </div>
                </div>

                {/* Navigation Links - 5 columns */}
                <div className="lg:col-span-5">
                  <div className="grid gap-8 sm:grid-cols-3">
                    {footerSections.map((section) => (
                      <div key={section.title}>
                        <h3 className="mb-4 text-lg font-bold text-white">{section.title}</h3>
                        <ul className="space-y-3">
                          {section.links.map((link) => (
                            <li key={link.href}>
                              {link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white focus:outline-none focus:text-white"
                                >
                                  <span>{link.label}</span>
                                  <Globe className="h-3 w-3" />
                                </a>
                              ) : (
                                <Link 
                                  href={link.href} 
                                  className="text-gray-400 transition-colors hover:text-white focus:outline-none focus:text-white"
                                >
                                  {link.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="border-t border-gray-700 py-8">
              <h3 className="mb-6 text-center text-xl font-bold text-white">Our Offices</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-800/30 p-6 text-center">
                  <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-2 font-semibold text-white">Saudi Arabia</h4>
                  <p className="text-sm text-gray-400">{t.footer.contact.addresses.saudi}</p>
                </div>
                <div className="rounded-lg bg-gray-800/30 p-6 text-center">
                  <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-2 font-semibold text-white">United States</h4>
                  <p className="text-sm text-gray-400">{t.footer.contact.addresses.usa}</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 py-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="text-center md:text-left">
                  <p className="text-gray-400">{t.footer.copyright}</p>
                  <p className="text-sm text-gray-500">
                    Made with ❤️ by Sondos AI Team
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>🔒 SSL Secured</span>
                  <span>🌍 Global CDN</span>
                  <span>⚡ 99.5% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sondos AI",
              "url": "https://www.sondos-ai.com",
              "logo": "https://www.sondos-ai.com/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+966-55-440-9098",
                  "contactType": "customer service",
                  "areaServed": "SA",
                  "availableLanguage": ["Arabic", "English"]
                },
                {
                  "@type": "ContactPoint", 
                  "telephone": "+1-463-258-8954",
                  "contactType": "customer service",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressLocality": "Riyadh"
                },
                {
                  "@type": "PostalAddress",
                  "addressCountry": "US", 
                  "addressLocality": "New York"
                }
              ],
              "sameAs": socialLinks.map(link => link.href)
            })
          }}
        />
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:bg-red-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
