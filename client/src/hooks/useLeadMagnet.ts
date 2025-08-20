import { useState, useEffect } from 'react'

export function useLeadMagnet() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState<'exit-intent' | 'timed' | 'manual'>('manual')

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let exitIntentListenerAdded = false

    // Check if user has already seen popup today
    const lastShown = localStorage.getItem('leadMagnetLastShown')
    const today = new Date().toDateString()

    if (lastShown === today) {
      return
    }

    // Timed popup - show after 90 seconds
    timeoutId = setTimeout(() => {
      if (!showPopup) {
        setPopupType('timed')
        setShowPopup(true)
      }
    }, 90000) // 90 seconds

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showPopup) {
        setPopupType('exit-intent')
        setShowPopup(true)
      }
    }

    // Add exit intent listener after 10 seconds to avoid immediate triggers
    const exitIntentTimeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
      exitIntentListenerAdded = true
    }, 10000)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(exitIntentTimeout)
      if (exitIntentListenerAdded) {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [showPopup])

  const openPopup = (type: 'exit-intent' | 'timed' | 'manual' = 'manual') => {
    setPopupType(type)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    // Mark as shown today
    localStorage.setItem('leadMagnetLastShown', new Date().toDateString())
  }

  return {
    showPopup,
    popupType,
    openPopup,
    closePopup,
  }
}
