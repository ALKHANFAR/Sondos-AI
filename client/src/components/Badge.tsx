import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'green' | 'gray'
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-100 text-gray-800',
  }

  return <span className={`rounded-full px-2 py-1 text-xs ${variants[variant]}`}>{children}</span>
}
