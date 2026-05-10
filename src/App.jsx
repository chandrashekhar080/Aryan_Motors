import { useEffect, useRef, useState } from 'react'
import './App.css'
import ContactDialog from './components/ContactDialog'
import DealerHero from './components/DealerHero'
import DealershipSections from './components/DealershipSections'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(true)
  const [toastMessage, setToastMessage] = useState('')
  const toastTimer = useRef(null)

  const showSuccessToast = () => {
    window.clearTimeout(toastTimer.current)
    setToastMessage('Successfully sent your query.')
    toastTimer.current = window.setTimeout(() => {
      setToastMessage('')
    }, 3200)
  }

  useEffect(() => {
    return () => {
      window.clearTimeout(toastTimer.current)
    }
  }, [])

  return (
    <main className="site-shell">
      <DealerHero />
      <DealershipSections onLeadSubmitted={showSuccessToast} />
      <ContactDialog
        open={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
        onSubmitted={showSuccessToast}
      />
      <FloatingWhatsApp />
      <div className={toastMessage ? 'toast-message show' : 'toast-message'} role="status" aria-live="polite">
        {toastMessage}
      </div>
    </main>
  )
}

export default App
