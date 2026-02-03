import { company } from '../data/products'

const whatsappUrl = `https://wa.me/${company.whatsapp}`

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="icon icon--whatsapp" />
    </a>
  )
}
