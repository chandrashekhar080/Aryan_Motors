const whatsappNumber = '919977768488'
const whatsappMessage = 'Hello Aryan Motors, I want to know more about tractors, finance or service.'

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Aryan Motors on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
  )
}

export default FloatingWhatsApp
