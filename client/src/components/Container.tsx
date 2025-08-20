interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 ${className}`} style={{ maxWidth: '1200px' }}>
      {children}
    </div>
  )
}
