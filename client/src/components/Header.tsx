import { useState, useEffect, useMemo, useCallback } from 'react'
import { Menu, X, Search, Bell, User, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import Container from './Container'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'
import Button from './Button'
import { useLanguage } from '@/hooks/useLanguage'
import { messages } from '@/lib/messages'

/**
 * Navigation Item Interface
 * Follows international standards for navigation structure
 */
interface NavigationItem {
  type: 'link' | 'cta' | 'auth' | 'dropdown'
  href?: string
  label: string
  labelAr?: string // Arabic label for enhanced i18n
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
  dropdownItems?: NavigationItem[]
  icon?: React.ReactNode
  ariaLabel?: string // Custom ARIA label
  description?: string // For screen readers
}

/**
 * Header Component
 * 
 * International standards applied:
 * - WCAG 2.1 AA accessibility compliance
 * - BEM CSS naming convention  
 * - Semantic HTML5 structure
 * - RTL support for Arabic
 * - Proper ARIA labels and roles
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [location] = useLocation()
  const { locale } = useLanguage()
  const t = messages[locale as keyof typeof messages] || messages.en
  const isRTL = locale === 'ar'

  // Memoized navigation items with international naming standards
  const navigationItems = useMemo((): NavigationItem[] => [
    { 
      type: 'link', 
      href: '/industries', 
      label: t.nav.industries,
      ariaLabel: isRTL ? 'القطاعات - حلولنا للقطاعات المختلفة' : 'Sectors - Our solutions for different sectors',
      description: isRTL ? 'صفحة القطاعات' : 'Sectors page'
    },
    { 
      type: 'link', 
      href: '/how-it-works', 
      label: isRTL ? 'كيف يعمل' : 'How It Works',
      ariaLabel: isRTL ? 'كيف يعمل سندس AI - دليل شامل' : 'How Sondos AI Works - Complete Guide',
      description: isRTL ? 'صفحة شرح كيفية عمل النظام' : 'System explanation page'
    },
    { 
      type: 'link', 
      href: '/pricing', 
      label: t.nav.pricing,
      ariaLabel: isRTL ? 'الأسعار - خططنا وأسعارنا' : 'Pricing - Our plans and pricing',
      description: isRTL ? 'صفحة الأسعار' : 'Pricing page'
    },
    { 
      type: 'link', 
      href: '/integrations', 
      label: t.nav.integrations,
      ariaLabel: isRTL ? 'التكاملات - اربط أدواتك' : 'Integrations - Connect your tools',
      description: isRTL ? 'صفحة التكاملات' : 'Integrations page'
    },
    { 
      type: 'dropdown', 
      label: t.nav.resources,
      ariaLabel: isRTL ? 'الموارد - مواد تعليمية' : 'Resources - Educational materials',
      description: isRTL ? 'قائمة الموارد' : 'Resources menu',
      dropdownItems: [
        { 
          type: 'link', 
          href: '/resources', 
          label: t.nav.resources,
          ariaLabel: isRTL ? 'الموارد والأسئلة الشائعة' : 'Resources and FAQ',
          description: isRTL ? 'صفحة الموارد' : 'Resources page'
        },
        { 
          type: 'link', 
          href: '/blog', 
          label: t.nav.blog,
          ariaLabel: isRTL ? 'المدونة - أخبار ونصائح' : 'Blog - News and tips',
          description: isRTL ? 'صفحة المدونة' : 'Blog page'
        },
        { 
          type: 'link', 
          href: '/case-studies', 
          label: t.nav.caseStudies,
          ariaLabel: isRTL ? 'الحالات - قصص النجاح' : 'Cases - Success stories',
          description: isRTL ? 'صفحة الحالات' : 'Cases page'
        },
      ]
    },
    { 
      type: 'link', 
      href: '/about', 
      label: t.nav.about,
      ariaLabel: isRTL ? 'من نحن - تعرف على سندس AI' : 'About - Learn about Sondos AI',
      description: isRTL ? 'صفحة من نحن' : 'About page'
    },
  ], [t.nav, isRTL])

  const authItems = useMemo((): NavigationItem[] => [
    { 
      type: 'auth', 
      href: 'https://app.sondos-ai.com/login', 
      label: t.nav.login, 
      variant: 'ghost', 
      external: true,
      ariaLabel: isRTL ? 'تسجيل الدخول إلى حسابك' : 'Sign in to your account',
      description: isRTL ? 'رابط تسجيل الدخول - يفتح في نافذة جديدة' : 'Sign in link - opens in new window'
    },
    { 
      type: 'cta', 
      href: '#demo', 
      label: t.nav.getStarted, 
      variant: 'primary',
      ariaLabel: isRTL ? 'ابدأ الآن - جرب مكالمة تجريبية' : 'Get Started - Try a demo call',
      description: isRTL ? 'زر البدء' : 'Primary get started button'
    },
  ], [t.nav, isRTL])

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

  // Render navigation item with international standards
  const renderNavigationItem = (item: NavigationItem, isMobile = false) => {
    const baseClasses = isMobile 
      ? 'navigation-item navigation-item--mobile block px-3 py-2 text-base font-medium transition-colors'
      : 'navigation-item navigation-item--desktop relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors'
    
    const activeClasses = location === item.href 
      ? 'navigation-item--active text-primary border-b-2 border-primary' 
      : 'navigation-item--inactive text-gray-700 hover:text-primary'

    if (item.type === 'dropdown') {
      return (
        <div 
          key={item.label} 
          className="navigation-dropdown relative group"
          role="menuitem"
          aria-haspopup="menu"
        >
          <button 
            className={`navigation-dropdown__trigger ${baseClasses} ${activeClasses} flex items-center gap-1`}
            aria-expanded="false"
            aria-haspopup="true"
            aria-label={item.ariaLabel || item.label}
            title={item.description}
          >
            {item.label}
            <ChevronDown 
              className="navigation-dropdown__icon h-4 w-4" 
              aria-hidden="true"
            />
          </button>
          <div 
            className="navigation-dropdown__menu absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            role="menu"
            aria-labelledby="dropdown-button"
          >
            <div className="navigation-dropdown__content py-1">
              {item.dropdownItems?.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href!}
                  className="navigation-dropdown__item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  role="menuitem"
                  aria-label={subItem.ariaLabel || subItem.label}
                  title={subItem.description}
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
          className={`navigation-cta ${isMobile ? 'navigation-cta--mobile w-full' : 'navigation-cta--desktop'} inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          style={{ background: 'linear-gradient(90deg, #ff443b, #e63b33)' }}
          aria-label={item.ariaLabel || item.label}
          title={item.description}
          role="button"
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
          className={`navigation-link navigation-link--external ${baseClasses} ${activeClasses}`}
          aria-label={item.ariaLabel || `${item.label} ${isRTL ? '(يفتح في نافذة جديدة)' : '(opens in new window)'}`}
          title={item.description}
        >
          {item.label}
        </a>
      )
    }

    return (
      <Link
        key={item.href}
        href={item.href!}
        className={`navigation-link navigation-link--internal ${baseClasses} ${activeClasses}`}
        aria-current={location === item.href ? 'page' : undefined}
        aria-label={item.ariaLabel || item.label}
        title={item.description}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <>
      <header
        role="banner"
        className={`site-header ${isScrolled ? 'site-header--scrolled' : 'site-header--top'} relative z-40 transition-all duration-300 ${
          isScrolled ? 'site-header--sticky fixed left-0 right-0 top-0 shadow-sm' : ''
        }`}
        aria-label={isRTL ? 'شريط التنقل الرئيسي لموقع سندس AI' : 'Sondos AI main navigation bar'}
      >
        <Container>
          <div className="site-header__content py-4">
            <nav 
              role="navigation" 
              className="site-header__navigation flex items-center justify-between" 
              aria-label={isRTL ? 'قائمة التنقل الأساسية لصفحات الموقع' : 'Primary navigation menu for website pages'}
            >
              {/* Logo */}
              <Link 
                href="/" 
                className="site-header__logo flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                aria-label={isRTL ? 'سندس AI - الصفحة الرئيسية' : 'Sondos AI - Home Page'}
                title={isRTL ? 'انتقل إلى الصفحة الرئيسية' : 'Go to homepage'}
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
              <section 
                className="site-header__navigation-items hidden lg:flex items-center space-x-1 rtl:space-x-reverse"
                role="menubar"
                aria-label={isRTL ? 'قائمة التنقل الرئيسية - يحتوي على روابط الصفحات الرئيسية' : 'Main navigation menu - contains links to primary website sections'}
              >
                {navigationItems.map(item => renderNavigationItem(item))}
              </section>

              {/* Right Side Actions */}
              <section 
                className="site-header__actions flex items-center space-x-4 rtl:space-x-reverse"
                role="toolbar"
                aria-label={isRTL ? 'أدوات وعمليات التنقل - بحث، إشعارات، لغة' : 'Navigation tools and actions - search, notifications, language settings'}
              >
                {/* Search Toggle */}
                <button
                  onClick={toggleSearch}
                  className="site-header__search-button hidden md:flex items-center justify-center w-9 h-9 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={isRTL ? 'فتح مربع البحث في الموقع' : 'Open website search box'}
                  aria-expanded={showSearch}
                  title={isRTL ? 'اضغط لفتح مربع بحث في محتوى الموقع' : 'Click to open search box for website content'}
                >
                  <Search className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Notifications (placeholder) */}
                <button
                  className="site-header__notifications-button hidden md:flex items-center justify-center w-9 h-9 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 relative"
                  aria-label={isRTL ? 'إشعارات النظام - يوجد إشعار جديد واحد' : 'System notifications - 1 new notification available'}
                  title={isRTL ? 'اضغط لعرض جميع إشعارات النظام' : 'Click to view all system notifications'}
                >
                  <Bell className="h-5 w-5" aria-hidden="true" />
                  <span 
                    className="site-header__notification-badge absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"
                    aria-label={isRTL ? 'مؤشر وجود إشعار جديد غير مقروء' : 'Indicator for new unread notification'}
                  ></span>
                </button>

                {/* Language Switcher */}
                <div className="site-header__language-switcher">
                  <LangSwitcher />
                </div>

                {/* Auth Items - Desktop */}
                <div 
                  className="site-header__authentication hidden lg:flex items-center space-x-3 rtl:space-x-reverse"
                  role="group"
                  aria-label={isRTL ? 'خيارات تسجيل الدخول وإنشاء حساب' : 'User authentication and account creation options'}
                >
                  {authItems.map(item => renderNavigationItem(item))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="site-header__mobile-toggle lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={isMobileMenuOpen ? 
                    (isRTL ? 'إغلاق قائمة التنقل المحمولة' : 'Close mobile navigation menu') : 
                    (isRTL ? 'فتح قائمة التنقل المحمولة' : 'Open mobile navigation menu')
                  }
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  title={isMobileMenuOpen ? 
                    (isRTL ? 'اضغط لإغلاق قائمة التنقل' : 'Click to close navigation menu') : 
                    (isRTL ? 'اضغط لفتح قائمة التنقل' : 'Click to open navigation menu')
                  }
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </section>
            </nav>

            {/* Search Bar */}
            {showSearch && (
              <section 
                className="site-header__search mt-4 relative animate-in slide-in-from-top-2 duration-200"
                role="search"
                aria-label={isRTL ? 'البحث في الموقع' : 'Site search'}
              >
                <div className="site-header__search-container relative">
                  <Search 
                    className={`site-header__search-icon absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400`} 
                    aria-hidden="true"
                  />
                  <input
                    id="search-input"
                    type="search"
                    placeholder={isRTL ? 'البحث...' : 'Search...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`site-header__search-input w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    aria-label={isRTL ? 'ابحث عن محتوى وصفحات الموقع' : 'Search for website content and pages'}
                                      aria-describedby="search-description"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  <button
                    onClick={toggleSearch}
                    className={`site-header__search-close absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded`}
                    aria-label={isRTL ? 'إغلاق مربع البحث والعودة للتنقل' : 'Close search box and return to navigation'}
                    title={isRTL ? 'اضغط لإغلاق مربع البحث' : 'Click to close search box'}
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div 
                  id="search-description" 
                  className="sr-only"
                  role="status"
                  aria-live="polite"
                >
                  {isRTL ? 'ابحث عن الصفحات والمحتوى في الموقع. استخدم مفاتيح الأسهم للتنقل في النتائج' : 'Search for website pages and content. Use arrow keys to navigate through results'}
                </div>
              </section>
            )}
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="site-header__mobile-backdrop fixed inset-0 bg-black bg-opacity-25 lg:hidden" 
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <div 
              id="mobile-menu"
              className={`site-header__mobile-menu fixed top-0 ${isRTL ? 'left-0' : 'right-0'} bottom-0 w-80 max-w-sm bg-white shadow-xl lg:hidden transform transition-transform duration-300 ease-in-out z-50`}
              role="dialog"
              aria-modal="true"
              aria-label={isRTL ? 'قائمة التنقل للهواتف الذكية والأجهزة اللوحية' : 'Navigation menu for mobile devices and tablets'}
            >
              <div className="site-header__mobile-container flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div 
                  className="site-header__mobile-header flex items-center justify-between p-4 border-b"
                  role="banner"
                >
                  <Logo
                    variant="dark"
                    useLockup={false}
                    showText={true}
                    showTagline={false}
                    size={32}
                  />
                  <button
                    onClick={toggleMobileMenu}
                    className="site-header__mobile-close p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={isRTL ? 'إغلاق قائمة التنقل المحمولة' : 'Close mobile navigation menu'}
                    title={isRTL ? 'اضغط لإغلاق قائمة التنقل والعودة للصفحة' : 'Click to close navigation menu and return to page'}
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
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
