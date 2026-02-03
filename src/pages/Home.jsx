import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import ProductCategories from '../components/ProductCategories'
import { sliderSlides, company } from '../data/products'
import './Home.css'

export default function Home() {
  return (
    <>
      <HeroSlider slides={sliderSlides} />

      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-badge">
              <span className="welcome-badge__icon">🏥</span>
              <span className="welcome-badge__text">Trusted Health Solutions</span>
            </div>
            <h2 className="welcome-title">
              Welcome to {company.name}
            </h2>
            <p className="welcome-text">
              A trusted name in quality healthcare solutions. We are committed to delivering safe, 
              effective, and affordable pharmaceutical products that enhance the well-being of communities. 
              With innovation at our core and excellence in every step, we aim to shape a healthier future for all.
            </p>
            <div className="welcome-features">
              <div className="welcome-feature">
                <span className="welcome-feature__icon">✓</span>
                <span>GMP Certified Manufacturing</span>
              </div>
              <div className="welcome-feature">
                <span className="welcome-feature__icon">✓</span>
                <span>WHO-GMP Guidelines Compliant</span>
              </div>
              <div className="welcome-feature">
                <span className="welcome-feature__icon">✓</span>
                <span>Research-Driven Innovation</span>
              </div>
            </div>
            <div className="welcome-actions">
              <Link to="/about" className="btn btn--primary">Learn More About Us</Link>
              <Link to="/rnd" className="btn btn--outline">Our R&D</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="therapeutic-section">
        <div className="container">
          <h2 className="section__title">Therapeutic Areas</h2>
          <p className="section__subtitle">Comprehensive pharmaceutical solutions across multiple therapeutic categories</p>
          <div className="therapeutic-grid">
            <div className="therapeutic-card">
              <div className="therapeutic-card__icon">💊</div>
              <h3 className="therapeutic-card__title">Pain Management</h3>
              <p className="therapeutic-card__desc">Advanced analgesics and anti-inflammatory medications for effective pain relief.</p>
            </div>
            <div className="therapeutic-card">
              <div className="therapeutic-card__icon">🌿</div>
              <h3 className="therapeutic-card__title">Allergy Care</h3>
              <p className="therapeutic-card__desc">Comprehensive solutions for seasonal and chronic allergic conditions.</p>
            </div>
            <div className="therapeutic-card">
              <div className="therapeutic-card__icon">⚕️</div>
              <h3 className="therapeutic-card__title">Gastro Health</h3>
              <p className="therapeutic-card__desc">Digestive wellness products for acid control and gastrointestinal comfort.</p>
            </div>
            <div className="therapeutic-card">
              <div className="therapeutic-card__icon">🔬</div>
              <h3 className="therapeutic-card__title">Specialized Care</h3>
              <p className="therapeutic-card__desc">Targeted therapies for specific medical conditions and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-content">
            <h2 className="stats-title">Pharmaceutical Excellence in Numbers</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-card__number">25+</div>
                <div className="stat-card__label">Quality Products</div>
                <div className="stat-card__desc">Scientifically formulated medicines</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__number">100%</div>
                <div className="stat-card__label">GMP Certified</div>
                <div className="stat-card__desc">WHO-compliant manufacturing</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__number">50K+</div>
                <div className="stat-card__label">Satisfied Customers</div>
                <div className="stat-card__desc">Healthcare professionals trust us</div>
              </div>
              <div className="stat-card">
                <div className="stat-card__number">24/7</div>
                <div className="stat-card__label">Support Available</div>
                <div className="stat-card__desc">Always here to help you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-profile">
              <div className="founder-profile__card">
                <div className="founder-profile__image">
                  <img src="/assets/director.png" alt="Arjun Singh - Director & Managing Director" />
                </div>
                <div className="founder-profile__info">
                  <h3 className="founder-profile__name">Arjun Singh</h3>
                  <p className="founder-profile__title">Director & Managing Director</p>
                  <p className="founder-profile__desc">
                    A visionary leader inspired by his father's dream, providing strategic 
                    direction and driving the core mission of BSR Pharma.
                  </p>
                </div>
              </div>
            </div>
            <div className="founder-content">
              <span className="founder-badge">Our Foundation</span>
              <h2 className="founder-title">About BSR Pharma</h2>
              <p className="founder-text">
                BSR Pharma Pvt. Ltd. is a progressive pharmaceutical company dedicated to improving global 
                health standards. We develop, manufacture, and distribute high-quality medicines backed by 
                scientific research and modern technology.
              </p>
              <p className="founder-text">
                With a strong commitment to safety and purity, BSR Pharma continues to build trust among 
                healthcare professionals and customers. Our mission is to consistently deliver superior-quality, 
                safe, and affordable medicines that improve the quality of life.
              </p>
              <div className="founder-profile__legacy">
                <div className="founder-profile__legacy-icon">❤️</div>
                <p>
                  <strong>Legacy of Late. Shri Birendra Singh Rathore:</strong> BSR Pharma is built on the cherished 
                  vision of making quality healthcare affordable for everyone.
                </p>
              </div>
              <div className="founder-values">
                <div className="founder-value">
                  <span className="founder-value__icon">💎</span>
                  <span>Integrity</span>
                </div>
                <div className="founder-value">
                  <span className="founder-value__icon">⚡</span>
                  <span>Innovation</span>
                </div>
                <div className="founder-value">
                  <span className="founder-value__icon">🎯</span>
                  <span>Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment-section">
        <div className="container">
          <div className="commitment-grid">
            <div className="commitment-content">
              <span className="commitment-badge">Our Promise</span>
              <h2 className="commitment-title">Commitment to Quality & Safety</h2>
              <p className="commitment-text">
                At BSR Pharma, quality is not just a goal—it's our fundamental promise. Every product undergoes 
                rigorous testing and quality control measures to ensure safety, efficacy, and reliability.
              </p>
              <ul className="commitment-list">
                <li>
                  <span className="commitment-list__icon">🔬</span>
                  <div>
                    <strong>Advanced R&D Facilities</strong>
                    <p>State-of-the-art laboratories with modern equipment and skilled researchers</p>
                  </div>
                </li>
                <li>
                  <span className="commitment-list__icon">✓</span>
                  <div>
                    <strong>Strict Quality Control</strong>
                    <p>Multi-stage testing protocols ensuring product safety and consistency</p>
                  </div>
                </li>
                <li>
                  <span className="commitment-list__icon">🌍</span>
                  <div>
                    <strong>Global Standards</strong>
                    <p>Compliance with international pharmaceutical regulations and guidelines</p>
                  </div>
                </li>
              </ul>
              <Link to="/about" className="btn btn--primary">Discover Our Story</Link>
            </div>
            <div className="commitment-visual">
              <div className="commitment-box commitment-box--primary">
                <div className="commitment-box__icon">🏆</div>
                <h4>ISO Certified</h4>
                <p>Quality management systems meeting international standards</p>
              </div>
              <div className="commitment-box commitment-box--secondary">
                <div className="commitment-box__icon">🔒</div>
                <h4>Safety First</h4>
                <p>Rigorous safety protocols in every stage of production</p>
              </div>
              <div className="commitment-box commitment-box--accent">
                <div className="commitment-box__icon">💡</div>
                <h4>Innovation</h4>
                <p>Continuous research for better therapeutic solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductCategories />

      <section className="products-cta-section">
        <div className="container">
          <div className="products-cta">
            <h2 className="products-cta__title">Explore Our Product Range</h2>
            <p className="products-cta__text">
              From pain management to allergy care, discover our comprehensive range of pharmaceutical products 
              designed for optimal health outcomes.
            </p>
            <Link to="/products" className="btn btn--primary btn--large">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="calculator-cta-section">
        <div className="container">
          <div className="calculator-cta">
            <div className="calculator-cta__icon">🧮</div>
            <h2 className="calculator-cta__title">PTR & PTS Calculator</h2>
            <p className="calculator-cta__text">
              Calculate Price To Retailer (PTR) and Price To Stockist (PTS) with GST and margin breakdown. 
              Perfect tool for distributors and franchise partners to understand pricing and plan profit margins.
            </p>
            <Link to="/calculator" className="btn btn--primary btn--large">Use Calculator</Link>
          </div>
        </div>
      </section>

      <section className="lifecycle-section">
        <div className="container">
          <h2 className="section__title">Pharmaceutical Excellence Lifecycle</h2>
          <p className="section__subtitle">From research to delivery — ensuring quality at every step of the journey</p>
          <div className="lifecycle">
            <div className="lifecycle__image-wrap">
              <img
                src="/assets/lab-lifecycle.png"
                alt="Pharmaceutical lifecycle: Research, Development, Manufacturing, Delivery, Quality Control"
                className="lifecycle__image"
              />
            </div>
            <div className="lifecycle__steps">
              <div className="lifecycle__step">
                <span className="lifecycle__step-num">1</span>
                <h4>Research & Innovation</h4>
                <p>Scientific investigation and experimentation for safe, effective formulations.</p>
              </div>
              <div className="lifecycle__step">
                <span className="lifecycle__step-num">2</span>
                <h4>Product Development</h4>
                <p>Design and optimization into viable pharmaceutical products.</p>
              </div>
              <div className="lifecycle__step">
                <span className="lifecycle__step-num">3</span>
                <h4>GMP Manufacturing</h4>
                <p>WHO-compliant large-scale production with strict quality standards.</p>
              </div>
              <div className="lifecycle__step">
                <span className="lifecycle__step-num">4</span>
                <h4>Distribution</h4>
                <p>Efficient logistics ensuring timely delivery to healthcare partners.</p>
              </div>
              <div className="lifecycle__step">
                <span className="lifecycle__step-num">5</span>
                <h4>Quality Assurance</h4>
                <p>Continuous monitoring and testing to maintain highest standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
