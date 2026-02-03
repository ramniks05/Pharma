import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/products'
import PCDEnquiryModal from '../components/PCDEnquiryModal'
import './PCD.css'

export default function PCD() {
  const [showEnquiry, setShowEnquiry] = useState(false)

  return (
    <>
      <section className="pcd-hero">
        <div className="container">
          <div className="pcd-hero__content">
            <span className="pcd-hero__badge">PCD Pharma Franchise</span>
            <h1 className="pcd-hero__title">Start Your Pharma Distribution Business</h1>
            <p className="pcd-hero__subtitle">
              Join BSR Pharma as a PCD franchise partner and build a successful pharmaceutical distribution business 
              with exclusive territory rights, comprehensive product range, and dedicated support.
            </p>
            <div className="pcd-hero__actions">
              <button
                type="button"
                className="btn btn--primary btn--large"
                onClick={() => setShowEnquiry(true)}
              >
                Get PCD Distributorship
              </button>
              <Link to="/contact" className="btn btn--outline btn--large">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pcd-features">
        <div className="container">
          <div className="pcd-features__header">
            <h2 className="pcd-features__title">Why Choose BSR Pharma PCD Franchise?</h2>
            <p className="pcd-features__subtitle">
              Comprehensive support and exclusive benefits for our distribution partners
            </p>
          </div>

          <div className="pcd-features__grid">
            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🏆</div>
              <h3 className="pcd-feature-card__title">Monopoly Rights</h3>
              <p className="pcd-feature-card__desc">
                Get exclusive area-wise monopoly distributorship rights. Operate independently with reduced competition 
                and higher sales potential in your designated territory.
              </p>
              <ul className="pcd-feature-card__list">
                <li>Area-wise exclusive territory</li>
                <li>300–465+ product range</li>
                <li>Legal rights to operate independently</li>
                <li>Reduced competition → Higher sales</li>
              </ul>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">📦</div>
              <h3 className="pcd-feature-card__title">Wide Product Range</h3>
              <p className="pcd-feature-card__desc">
                Access to a comprehensive portfolio of 300+ pharmaceutical products across multiple therapeutic categories 
                including Cardio, Diabetic, General, Neuropsychiatry, Orthopedic, and more.
              </p>
              <ul className="pcd-feature-card__list">
                <li>300–465+ quality products</li>
                <li>Multiple therapeutic categories</li>
                <li>Tablets, Capsules, Syrups, Injections</li>
                <li>GMP certified manufacturing</li>
              </ul>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🎁</div>
              <h3 className="pcd-feature-card__title">Promotional Tools</h3>
              <p className="pcd-feature-card__desc">
                We provide complete marketing support with professional promotional materials to help you grow your business 
                and reach more customers effectively.
              </p>
              <ul className="pcd-feature-card__list">
                <li>Visual aids and marketing materials</li>
                <li>MR bags and promotional items</li>
                <li>Visiting cards and stationery</li>
                <li>Diaries, calendars, reminder cards</li>
              </ul>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">💰</div>
              <h3 className="pcd-feature-card__title">Incentives & Benefits</h3>
              <p className="pcd-feature-card__desc">
                Competitive margin structure with attractive incentives and comprehensive business support to ensure your 
                success as a distribution partner.
              </p>
              <ul className="pcd-feature-card__list">
                <li>Good margin structure</li>
                <li>Attractive incentives</li>
                <li>Business growth support</li>
                <li>Growth-focused partnership</li>
              </ul>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🤝</div>
              <h3 className="pcd-feature-card__title">Business Support</h3>
              <p className="pcd-feature-card__desc">
                Dedicated support team to help you at every step of your business journey, from initial setup to ongoing 
                operations and growth.
              </p>
              <ul className="pcd-feature-card__list">
                <li>Training and onboarding</li>
                <li>Marketing and sales support</li>
                <li>Technical assistance</li>
                <li>24/7 customer support</li>
              </ul>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">📈</div>
              <h3 className="pcd-feature-card__title">Growth Opportunities</h3>
              <p className="pcd-feature-card__desc">
                Build a sustainable and profitable business with long-term growth potential in the pharmaceutical distribution 
                industry.
              </p>
              <ul className="pcd-feature-card__list">
                <li>Scalable business model</li>
                <li>Market expansion support</li>
                <li>Regular product updates</li>
                <li>Partnership growth programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pcd-process">
        <div className="container">
          <div className="pcd-process__header">
            <h2 className="pcd-process__title">How to Get Started</h2>
            <p className="pcd-process__subtitle">Simple steps to become a BSR Pharma PCD franchise partner</p>
          </div>

          <div className="pcd-process__steps">
            <div className="pcd-process__step">
              <div className="pcd-process__step-number">1</div>
              <h3 className="pcd-process__step-title">Submit Enquiry</h3>
              <p className="pcd-process__step-desc">
                Fill out our PCD distributorship enquiry form with your details and preferred territory.
              </p>
            </div>

            <div className="pcd-process__step">
              <div className="pcd-process__step-number">2</div>
              <h3 className="pcd-process__step-title">Consultation</h3>
              <p className="pcd-process__step-desc">
                Our team will contact you to discuss opportunities, territory availability, and business terms.
              </p>
            </div>

            <div className="pcd-process__step">
              <div className="pcd-process__step-number">3</div>
              <h3 className="pcd-process__step-title">Agreement & Setup</h3>
              <p className="pcd-process__step-desc">
                Complete the franchise agreement and receive all promotional materials and product information.
              </p>
            </div>

            <div className="pcd-process__step">
              <div className="pcd-process__step-number">4</div>
              <h3 className="pcd-process__step-title">Start Business</h3>
              <p className="pcd-process__step-desc">
                Begin your distribution business with our full support and start serving your territory.
              </p>
            </div>
          </div>

          <div className="pcd-process__cta">
            <button
              type="button"
              className="btn btn--primary btn--large"
              onClick={() => setShowEnquiry(true)}
            >
              Apply for PCD Franchise
            </button>
          </div>
        </div>
      </section>

      {showEnquiry && <PCDEnquiryModal onClose={() => setShowEnquiry(false)} />}
    </>
  )
}
