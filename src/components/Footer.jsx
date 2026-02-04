import { Link } from 'react-router-dom'
import { company, products } from '../data/products'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/assets/bsr-logo.png" alt={company.name} className="footer__logo-img" />
            </div>
            <h3 className="footer__title">{company.name}</h3>
            <p className="footer__text">A trusted name in quality healthcare solutions. Committed to delivering safe, effective, and affordable pharmaceutical products that enhance the well-being of communities.</p>
            <div className="footer__social">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <span className="icon icon--facebook" />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <span className="icon icon--instagram" />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <span className="icon icon--linkedin" />
              </a>
              <a href={company.social.twitter} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
                <span className="icon icon--twitter" />
              </a>
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer__social-link footer__social-link--whatsapp" aria-label="WhatsApp">
                <span className="icon icon--whatsapp" />
              </a>
            </div>
          </div>
          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul>
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/products" className="footer__link">Products</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/rnd" className="footer__link">R&D</Link></li>
              <li><Link to="/pcd" className="footer__link">PCD Franchise</Link></li>
              <li><Link to="/calculator" className="footer__link">PTR & PTS Calculator</Link></li>
              <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
              <li><Link to="/terms" className="footer__link">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__heading">Our Products</h4>
            <ul>
              {products.slice(0, 3).map((p) => (
                <li key={p.id}>
                  <Link to={`/product/${p.id}`} className="footer__link">{p.name}</Link>
                </li>
              ))}
              <li><Link to="/products" className="footer__link footer__link--view-all">View All Products →</Link></li>
            </ul>
          </div>
          <div className="footer__contact">
            <h4 className="footer__heading">Get In Touch</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <p className="footer__text">{company.address}</p>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📧</span>
              <a href={`mailto:${company.email}`} className="footer__link">{company.email}</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <a href={`tel:${company.phone}`} className="footer__link">{company.phone}</a>
              {company.phone2 && (
                <>
                  {' / '}
                  <a href={`tel:${company.phone2}`} className="footer__link">{company.phone2}</a>
                </>
              )}
            </div>
            <div className="footer__map-container">
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
      </div>
    </footer>
  )
}
