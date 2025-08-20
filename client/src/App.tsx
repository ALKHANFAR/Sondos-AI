import { Switch, Route } from 'wouter'
import { queryClient } from './lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from '@/components/Layout'
import SEOHead from '@/components/SEOHead'
import Analytics from '@/components/Analytics'
import Home from '@/pages/Home'
import Industries from '@/pages/Industries'
import Pricing from '@/pages/Pricing'
import Integrations from '@/pages/Integrations'
import Resources from '@/pages/Resources'
// import Blog from '@/pages/Blog' // Hidden as requested
import CaseStudies from '@/pages/CaseStudies'
import About from '@/pages/About'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import NotFound from '@/pages/not-found'
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage'

function Router() {
  const { locale } = useLanguage()

  // Apply RTL direction for Arabic
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = locale === 'ar' ? 'ar' : 'en'

  return (
    <Switch>
      <Route path='/' component={Home} />
      {/* Solution route hidden as requested */}
      <Route path='/industries' component={Industries} />
      <Route path='/pricing' component={Pricing} />
      <Route path='/integrations' component={Integrations} />
      <Route path='/resources' component={Resources} />
      {/* <Route path='/blog' component={Blog} /> Hidden as requested */}
      <Route path='/case-studies' component={CaseStudies} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <SEOHead />
          <Analytics />
          <Layout>
            <Router />
          </Layout>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  )
}

export default App
