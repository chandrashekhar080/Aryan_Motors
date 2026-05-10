import LeadForm from './LeadForm'

function ContactDialog({ open, onClose, onSubmitted }) {
  if (!open) {
    return null
  }

  return (
    <div className="contact-dialog-backdrop" onClick={onClose}>
      <section
        className="contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="dialog-close-btn" type="button" aria-label="Close contact form" onClick={onClose}>
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <div className="contact-dialog-copy">
          <p className="eyebrow">Contact Aryan Motors</p>
          <h2 id="contact-dialog-title">Send a quick enquiry</h2>
          <p>Share your tractor, finance, parts or service requirement and the team will get back to you.</p>
        </div>
        <LeadForm
          onSubmitted={() => {
            onSubmitted?.()
            onClose()
          }}
        />
      </section>
    </div>
  )
}

export default ContactDialog
