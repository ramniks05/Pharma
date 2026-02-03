import { useState } from 'react'
import './EnquiryModal.css'
import { company } from '../data/products'

const whatsappBase = `https://wa.me/${company.whatsapp}`

function buildWhatsAppMessage(data) {
  const lines = [
    `*General Enquiry*`,
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || '—'}`,
    `Message: ${data.message || '—'}`,
  ]
  return encodeURIComponent(lines.join('\n'))
}

export default function GeneralEnquiryModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = buildWhatsAppMessage(form)
    const url = `${whatsappBase}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div className="enquiry-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <div className="enquiry-modal__header">
          <div className="enquiry-modal__header-content">
            <span className="enquiry-modal__icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
            <div>
              <h2 id="enquiry-title" className="enquiry-modal__title">Get In Touch</h2>
              <p className="enquiry-modal__product">We'd love to hear from you</p>
            </div>
          </div>
          <button type="button" className="enquiry-modal__close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="enquiry-modal__body">
          <div className="enquiry-modal__info">
            <span className="enquiry-modal__info-icon">ℹ</span>
            <p>Fill the form and we'll redirect you to WhatsApp with your enquiry ready to send.</p>
          </div>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="enquiry-form__group">
              <label className="enquiry-form__label">
                <span className="enquiry-form__label-text">Name <span className="enquiry-form__required">*</span></span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="enquiry-form__input"
                  placeholder="Enter your full name"
                />
              </label>
            </div>
            <div className="enquiry-form__group">
              <label className="enquiry-form__label">
                <span className="enquiry-form__label-text">Phone <span className="enquiry-form__required">*</span></span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="enquiry-form__input"
                  placeholder="Enter your phone number"
                />
              </label>
            </div>
            <div className="enquiry-form__group">
              <label className="enquiry-form__label">
                <span className="enquiry-form__label-text">Email (Optional)</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="enquiry-form__input"
                  placeholder="Enter your email address"
                />
              </label>
            </div>
            <div className="enquiry-form__group">
              <label className="enquiry-form__label">
                <span className="enquiry-form__label-text">Message (Optional)</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="enquiry-form__textarea"
                  rows="3"
                  placeholder="How can we help you?"
                />
              </label>
            </div>
            <button type="submit" className="enquiry-form__submit">
              <span className="enquiry-form__submit-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
