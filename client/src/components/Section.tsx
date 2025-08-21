import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  role?: string
  'aria-labelledby'?: string
  'aria-label'?: string
}

export default function Section({ 
  children, 
  className = '', 
  id, 
  role,
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  ...props 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 ${className}`}
      role={role}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </section>
  )
}
