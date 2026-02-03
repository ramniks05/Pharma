import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { company } from '../data/products'
import GeneralEnquiryModal from './GeneralEnquiryModal'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showEnquiry, setShowEnquiry] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo">
            <img src="/assets/bsr-logo.png" alt={company.name} className="header__logo-img" />
            <span className="header__logo-text">{company.name}</span>
          </Link>
          <button
            type="button"
            className="header__toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
            <Link
              to="/"
              className={location.pathname === '/' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={location.pathname === '/products' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/rnd"
              className={location.pathname === '/rnd' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              R&D
            </Link>
            <Link
              to="/calculator"
              className={location.pathname === '/calculator' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              to="/pcd"
              className={location.pathname === '/pcd' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              PCD Franchise
            </Link>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'header__link header__link--active' : 'header__link'}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              type="button"
              className="header__enquiry-btn"
              onClick={() => {
                setShowEnquiry(true)
                setMenuOpen(false)
              }}
            >
              Enquiry
            </button>
          </nav>
        </div>
      </header>
      {showEnquiry && <GeneralEnquiryModal onClose={() => setShowEnquiry(false)} />}
    </>
  )
}
