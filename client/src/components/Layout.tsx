import Header from './Header'
import Footer from './Footer'

import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-light-bg'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
