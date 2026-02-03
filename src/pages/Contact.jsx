import { Link } from 'react-router-dom'
import { company } from '../data/products'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Get In Touch</h1>
            <p className="contact-hero__subtitle">
              We're here to answer your questions and discuss how we can serve your pharmaceutical needs.
            </p>
            <div className="contact-hero__badges">
              <div className="contact-hero__badge">
                <span className="contact-hero__badge-icon">⚡</span>
                <span>Quick Response</span>
              </div>
              <div className="contact-hero__badge">
                <span className="contact-hero__badge-icon">🏆</span>
                <span>Trusted Partner</span>
              </div>
              <div className="contact-hero__badge">
                <span className="contact-hero__badge-icon">💼</span>
                <span>Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cards">
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--primary">📍</div>
              <h3 className="contact-card__title">Visit Us</h3>
              <p className="contact-card__text">{company.address}</p>
              <Link to="#map" className="contact-card__link">View on Map →</Link>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--accent">📞</div>
              <h3 className="contact-card__title">Call Us</h3>
              <a href={`tel:${company.phone}`} className="contact-card__link-big">
                {company.phone}
              </a>
              {company.phone2 && (
                <a href={`tel:${company.phone2}`} className="contact-card__link-big">
                  {company.phone2}
                </a>
              )}
            </div>

            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--primary">📧</div>
              <h3 className="contact-card__title">Email Us</h3>
              <a href={`mailto:${company.email}`} className="contact-card__link-big">
                {company.email}
              </a>
              <p className="contact-card__helper">We'll respond within 24 hours</p>
            </div>

            <div className="contact-card contact-card--highlight">
              <div className="contact-card__icon contact-card__icon--whatsapp">💬</div>
              <h3 className="contact-card__title">WhatsApp</h3>
              <p className="contact-card__text">Get instant support on WhatsApp</p>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                <span className="icon icon--whatsapp" /> Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section" id="map">
        <div className="container">
          <div className="contact-map-header">
            <h2 className="section__title">Our Location</h2>
            <p className="section__subtitle">Visit our office for product inquiries and partnerships</p>
          </div>
          <div className="contact-map-container">
            <div className="contact-map">
              <iframe
                src={company.mapEmbed}
                title={`${company.name} location`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-social-section">
        <div className="container">
          <div className="contact-social-content">
            <h2 className="contact-social__title">Connect With Us</h2>
            <p className="contact-social__text">
              Follow us on social media for updates, health tips, and product information
            </p>
            <div className="contact-social-links">
              <a 
                href={company.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link contact-social-link--facebook"
              >
                <span className="icon icon--facebook" />
                <span className="contact-social-link__text">Facebook</span>
              </a>
              <a 
                href={company.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link contact-social-link--instagram"
              >
                <span className="icon icon--instagram" />
                <span className="contact-social-link__text">Instagram</span>
              </a>
              <a 
                href={company.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link contact-social-link--linkedin"
              >
                <span className="icon icon--linkedin" />
                <span className="contact-social-link__text">LinkedIn</span>
              </a>
              <a 
                href={company.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link contact-social-link--twitter"
              >
                <span className="icon icon--twitter" />
                <span className="contact-social-link__text">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta__content">
            <h2 className="contact-cta__title">Ready to Partner with Us?</h2>
            <p className="contact-cta__text">
              Explore our range of quality pharmaceutical products and discover how we can support your healthcare needs.
            </p>
            <div className="contact-cta__actions">
              <Link to="/products" className="btn btn--primary">
                View Products
              </Link>
              <Link to="/about" className="btn btn--outline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
