import React, { useMemo, useState } from 'react'

type Props = {
  variant?: 'dark' | 'light' // light للاستخدام على خلفية فاتحة (الهيدر)
  showText?: boolean
  size?: number // ارتفاع الشعار بالبكسل
  showTagline?: boolean
  useLockup?: boolean // يستخدم صورة كاملة مع النص المدمج
}

export default function Logo({
  variant = 'light',
  showText = true,
  size = 40,
  showTagline = true,
  useLockup = false,
}: Props) {
  const [srcIndex, setSrcIndex] = useState(0)
  const candidates = useMemo(() => {
    if (useLockup) {
      return variant === 'dark'
        ? ['/assets/sondos-lockup-dark.png']
        : ['/assets/sondos-lockup-light.png']
    }
    return variant === 'dark' ? ['/assets/sondos-mark-dark.png'] : ['/assets/sondos-mark-light.png']
  }, [variant, useLockup])
  const imgSrc = candidates[srcIndex]
  return (
    <div className='inline-flex items-center gap-2' aria-label='Sondos AI'>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt='Sondos AI Logo'
          onError={() => setSrcIndex(i => (i + 1 < candidates.length ? i + 1 : i))}
          style={{ height: size, width: 'auto', maxWidth: size * 2 }}
          className='object-contain'
        />
      ) : (
        <div
          className='rounded-md'
          style={{ height: size, width: size, background: 'var(--gradient-primary)' }}
          aria-hidden
        />
      )}
      {showText && !useLockup && (
        <div className='whitespace-nowrap leading-tight'>
          <div className='text-xl font-extrabold' style={{ color: 'var(--brand-primary)' }}>
            SONDOS AI
          </div>
          {showTagline && <div className='text-sm text-gray-500'>Your Call... AI</div>}
        </div>
      )}
    </div>
  )
}
