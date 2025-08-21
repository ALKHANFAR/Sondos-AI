import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-semibold rounded-xl transition-all duration-200 transform hover:scale-105'

  const variants = {
    primary: 'bg-primary text-white hover:bg-red-600 shadow-custom',
    secondary: 'bg-secondary text-white hover:bg-purple-800 shadow-purple',
    outline: 'bg-white text-primary border-2 border-primary hover:bg-gray-50',
    ghost: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
