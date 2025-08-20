import { useState, useEffect, useMemo, useCallback } from 'react'
import { Menu, X, Search, Bell, User, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import Container from './Container'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'
import Button from './Button'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

interface NavigationItem {
  type: 'link' | 'cta' | 'auth' | 'dropdown'
  href?: string
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
  dropdownItems?: NavigationItem[]
  icon?: React.ReactNode
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [location] = useLocation()
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en

  // Memoized navigation items for better performance
  const navigationItems = useMemo((): NavigationItem[] => [
    { type: 'link', href: '/industries', label: t.nav.industries },
    { type: 'link', href: '/pricing', label: t.nav.pricing },
    { type: 'link', href: '/integrations', label: t.nav.integrations },
    { 
      type: 'dropdown', 
      label: t.nav.resources,
      dropdownItems: [
        { type: 'link', href: '/resources', label: t.nav.resources },
        { type: 'link', href: '/case-studies', label: t.nav.caseStudies },
      ]
    },
    { type: 'link', href: '/about', label: t.nav.about },
  ], [t.nav])

  const authItems = useMemo((): NavigationItem[] => [
    { type: 'auth', href: 'https://app.sondos-ai.com/login', label: t.nav.login, variant: 'ghost', external: true },
    { type: 'cta', href: '#demo', label: t.nav.getStarted, variant: 'primary' },
  ], [t.nav])

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled)
    }
  }, [isScrolled])

  useEffect(() => {
    let ticking = false
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [handleScroll])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Handle escape key for mobile menu and search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setShowSearch(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const toggleSearch = useCallback(() => {
    setShowSearch(prev => !prev)
    if (!showSearch) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus()
      }, 100)
    }
  }, [showSearch])

  // Render navigation item based on type
  const renderNavigationItem = (item: NavigationItem, isMobile = false) => {
    const baseClasses = isMobile 
      ? 'block px-3 py-2 text-base font-medium transition-colors'
      : 'relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors'
    
    const activeClasses = location === item.href 
      ? 'text-primary border-b-2 border-primary' 
      : 'text-gray-700 hover:text-primary'

    if (item.type === 'dropdown') {
      return (
        <div key={item.label} className="relative group">
          <button 
            className={`${baseClasses} ${activeClasses} flex items-center gap-1`}
            aria-expanded="false"
            aria-haspopup="true"
          >
            {item.label}
            <ChevronDown className="h-4 w-4" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-1">
              {item.dropdownItems?.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href!}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (item.type === 'cta') {
      return (
        <a
          key={item.href}
          href={item.href}
          className={`${isMobile ? 'w-full' : ''} inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          style={{ background: 'linear-gradient(90deg, #ff443b, #e63b33)' }}
          aria-label={item.label}
        >
          {item.label}
        </a>
      )
    }



    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${activeClasses}`}
        >
          {item.label}
        </a>
      )
    }

    return (
      <Link
        key={item.href}
        href={item.href!}
        className={`${baseClasses} ${activeClasses}`}
        aria-current={location === item.href ? 'page' : undefined}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <>
      <header
        role="banner"
        className={`relative z-40 transition-all duration-300 ${
          isScrolled ? 'sticky-header fixed left-0 right-0 top-0 shadow-sm' : ''
        }`}
        aria-label="Main navigation"
      >
        <Container>
          <div className="py-4">
            <nav role="navigation" className="flex items-center justify-between" aria-label="Primary navigation">
              {/* Logo */}
              <Link 
                href="/" 
                className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                aria-label="Sondos AI Home"
              >
                <Logo
                  variant={isScrolled ? 'dark' : 'light'}
                  useLockup={false}
                  showText={true}
                  showTagline={false}
                  size={40}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
                {navigationItems.map(item => renderNavigationItem(item))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {/* Search Toggle */}
                <button
                  onClick={toggleSearch}
                  className="hidden md:flex items-center justify-center w-9 h-9 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>

                {/* Notifications (placeholder) */}
                <button
                  className="hidden md:flex items-center justify-center w-9 h-9 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 relative"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>

                {/* Language Switcher */}
                <LangSwitcher />

                {/* Auth Items - Desktop */}
                <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
                  {authItems.map(item => renderNavigationItem(item))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </nav>

            {/* Search Bar */}
            {showSearch && (
              <div className="mt-4 relative animate-in slide-in-from-top-2 duration-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-label="Search"
                  />
                  <button
                    onClick={toggleSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 lg:hidden" 
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <div 
              id="mobile-menu"
              className="fixed top-0 right-0 bottom-0 w-80 max-w-sm bg-white shadow-xl lg:hidden transform transition-transform duration-300 ease-in-out z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Logo
                    variant="dark"
                    useLockup={false}
                    showText={true}
                    showTagline={false}
                    size={32}
                  />
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-2">
                    {navigationItems.map(item => (
                      <div key={item.href || item.label}>
                        {item.type === 'dropdown' ? (
                          <div className="space-y-2">
                            <div className="px-3 py-2 text-sm font-medium text-gray-900">
                              {item.label}
                            </div>
                            <div className="pl-4 space-y-1">
                              {item.dropdownItems?.map(subItem => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href!}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          renderNavigationItem(item, true)
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile Auth Section */}
                  <div className="mt-8 px-4 pt-4 border-t">
                    <div className="space-y-3">
                      {authItems.map(item => (
                        <div key={item.href} onClick={toggleMobileMenu}>
                          {renderNavigationItem(item, true)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Spacer for fixed header */}
      {isScrolled && <div className="h-20" aria-hidden="true" />}
    </>
  )
}
