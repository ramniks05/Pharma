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

      <section className="pcd-core-values">
        <div className="container">
          <div className="pcd-features__header">
            <h2 className="pcd-features__title">Our Core Values</h2>
            <p className="pcd-features__subtitle">
              What makes BSR Pharma Private Limited a trusted partner for PCD franchise and distribution.
            </p>
          </div>

          <div className="pcd-features__grid">
            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🏆</div>
              <h3 className="pcd-feature-card__title">Monopoly Rights</h3>
              <p className="pcd-feature-card__desc">
                At BSR Pharma Private Limited, we provide our franchise partners with exclusive monopoly rights that allow them to operate freely and confidently in their chosen territory. With reduced competition and full market access, our partners enjoy better growth and stability.
              </p>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🧪</div>
              <h3 className="pcd-feature-card__title">Quality-Assured Product Range</h3>
              <p className="pcd-feature-card__desc">
                We offer a carefully selected portfolio of high-quality pharmaceutical products, ensuring each formulation meets strict industry standards. Rather than focusing on quantity, we prioritize innovation, purity, and effectiveness, delivering products that healthcare professionals trust.
              </p>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🚚</div>
              <h3 className="pcd-feature-card__title">On-Time Dispatch</h3>
              <p className="pcd-feature-card__desc">
                Our company is committed to timely and reliable dispatch. With a streamlined distribution process and efficient logistic support, we ensure that every order reaches our partners on time, every time, helping them maintain uninterrupted business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pcd-partner-provide">
        <div className="container">
          <div className="pcd-features__header">
            <h2 className="pcd-features__title">What We Provide to Our PCD Franchise Business Partners</h2>
            <p className="pcd-features__subtitle">
              Strong business support, legal documentation, promotional tools, and incentives to help you grow.
            </p>
          </div>

          <div className="pcd-features__grid">
            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🗺️</div>
              <h3 className="pcd-feature-card__title">PCD Pharma Franchise on Monopoly Basis</h3>
              <p className="pcd-feature-card__desc">
                BSR Pharma Private Limited offers monopoly-based PCD franchise opportunities across India. Our focused and high-quality product range ensures maximum market potential in your area.
              </p>
              <p className="pcd-feature-card__desc">
                With complete documentation and dedicated support, you can confidently build your own pharma franchise business with legal backing and independent operational control. This helps you reduce competition, expand your reach, and achieve consistent sales growth.
              </p>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">🎁</div>
              <h3 className="pcd-feature-card__title">Promotional Support Tools</h3>
              <p className="pcd-feature-card__desc">
                We provide strong promotional support to help our partners grow faster and achieve better visibility in the market. Our support kit includes:
              </p>
              <ul className="pcd-feature-card__list">
                <li>Visual Aids</li>
                <li>Product Catalogues</li>
                <li>Doctor Reminder Cards</li>
                <li>Business Cards</li>
                <li>MR Bags</li>
                <li>Diaries & Calendars</li>
              </ul>
              <p className="pcd-feature-card__desc">
                These tools help build trust among healthcare professionals and strengthen your brand presence.
              </p>
            </div>

            <div className="pcd-feature-card">
              <div className="pcd-feature-card__icon">📈</div>
              <h3 className="pcd-feature-card__title">Partner Incentives & Business Support</h3>
              <p className="pcd-feature-card__desc">
                We believe in rewarding hard work. That’s why we offer:
              </p>
              <ul className="pcd-feature-card__list">
                <li>Attractive incentive programs</li>
                <li>Performance-based rewards</li>
                <li>Regular business guidance</li>
                <li>Dedicated customer support</li>
              </ul>
              <p className="pcd-feature-card__desc">
                Our goal is to build long-term, supportive, and profitable partnerships.
              </p>
            </div>
          </div>

          <div className="pcd-process__cta" style={{ marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn btn--primary btn--large"
              onClick={() => setShowEnquiry(true)}
            >
              Get PCD Distributorship
            </button>
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
