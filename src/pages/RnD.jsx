import { company } from '../data/products'
import './RnD.css'

export default function RnD() {
  return (
    <>
      <section className="rnd-hero">
        <div className="container">
          <div className="rnd-hero__content">
            <h1 className="rnd-hero__title">Research & Development</h1>
            <p className="rnd-hero__subtitle">
              Innovation drives us forward. Our experienced R&D team works continuously to enhance 
              product quality and develop advanced formulations for better healthcare outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="rnd-intro">
        <div className="container">
          <div className="rnd-intro-grid">
            <div className="rnd-intro__image">
              <img 
                src="/research/research_development.jpg" 
                alt="Research Laboratory"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="rnd-intro__placeholder">
                <span className="rnd-intro__placeholder-icon">🔬</span>
                <span>Research Laboratory</span>
              </div>
            </div>
            <div className="rnd-intro__content">
              <h2>Advancing Pharmaceutical Science</h2>
              <p>
                At {company.name}, innovation is at the heart of everything we do. Our state-of-the-art 
                research and development facilities are equipped with cutting-edge technology and staffed 
                by highly skilled scientists dedicated to creating safe, effective, and affordable medicines.
              </p>
              <p>
                We invest significantly in R&D to ensure our products meet the highest standards of quality 
                and efficacy, addressing the evolving healthcare needs of communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rnd-facilities">
        <div className="container">
          <h2 className="section__title">Our Research Facilities</h2>
          <p className="section__subtitle">State-of-the-art infrastructure supporting pharmaceutical innovation</p>
          
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-card__image">
                <img 
                  src="/research/research_development_2.jpg" 
                  alt="Modern Laboratory Equipment"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="facility-card__placeholder">
                  <span>⚗️</span>
                </div>
              </div>
              <div className="facility-card__content">
                <h3>Modern Laboratory Infrastructure</h3>
                <p>Advanced analytical instruments and equipment for precise formulation development and testing.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card__image">
                <img 
                  src="/research/skilled.webp" 
                  alt="Research Team"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="facility-card__placeholder">
                  <span>👨‍🔬</span>
                </div>
              </div>
              <div className="facility-card__content">
                <h3>Skilled Scientists & Researchers</h3>
                <p>Experienced team of pharmaceutical scientists, chemists, and research professionals.</p>
              </div>
            </div>

            <div className="facility-card">
              <div className="facility-card__image">
                <img 
                  src="/research/lab.jpg" 
                  alt="Quality Testing"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="facility-card__placeholder">
                  <span>🧪</span>
                </div>
              </div>
              <div className="facility-card__content">
                <h3>Stability Testing Labs</h3>
                <p>Dedicated facilities for comprehensive stability studies ensuring product shelf-life and quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rnd-process">
        <div className="container">
          <h2 className="section__title">Our R&D Process</h2>
          <p className="section__subtitle">Systematic approach to pharmaceutical innovation</p>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <div className="process-step__content">
                <h3>Research & Ideation</h3>
                <p>Identifying therapeutic needs and exploring innovative formulation possibilities through extensive literature review and market analysis.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step__number">02</div>
              <div className="process-step__content">
                <h3>Formulation Development</h3>
                <p>Designing and optimizing drug formulations with focus on bioavailability, stability, and patient compliance.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step__number">03</div>
              <div className="process-step__content">
                <h3>Analytical Testing</h3>
                <p>Comprehensive analytical studies to ensure product quality, purity, and consistency using advanced instrumentation.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step__number">04</div>
              <div className="process-step__content">
                <h3>Stability Studies</h3>
                <p>Long-term and accelerated stability testing to determine shelf-life and optimal storage conditions.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step__number">05</div>
              <div className="process-step__content">
                <h3>Scale-Up & Technology Transfer</h3>
                <p>Transitioning from lab-scale to commercial production while maintaining quality and consistency.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step__number">06</div>
              <div className="process-step__content">
                <h3>Regulatory Documentation</h3>
                <p>Preparing comprehensive documentation for regulatory approvals and compliance with international standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rnd-focus">
        <div className="container">
          <div className="focus-content">
            <h2 className="section__title">Our Focus Areas</h2>
            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-card__icon">💊</div>
                <h3>New Product Development</h3>
                <p>Creating innovative pharmaceutical formulations to address unmet medical needs in various therapeutic categories.</p>
              </div>

              <div className="focus-card">
                <div className="focus-card__icon">🔄</div>
                <h3>Continuous Process Improvement</h3>
                <p>Enhancing existing formulations and manufacturing processes for better quality, efficiency, and cost-effectiveness.</p>
              </div>

              <div className="focus-card">
                <div className="focus-card__icon">✓</div>
                <h3>Quality Enhancement</h3>
                <p>Ongoing research to improve product stability, bioavailability, and therapeutic efficacy.</p>
              </div>

              <div className="focus-card">
                <div className="focus-card__icon">📋</div>
                <h3>Regulatory Compliance</h3>
                <p>Ensuring all developments meet national and international pharmaceutical standards and guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rnd-quality">
        <div className="container">
          <div className="quality-banner">
            <div className="quality-banner__content">
              <h2>Quality Assurance - The Backbone of Our R&D</h2>
              <p>
                Quality is integrated into every stage of our research and development process. 
                Our commitment to excellence ensures that every product meets stringent safety and efficacy standards.
              </p>
              <div className="quality-features">
                <div className="quality-feature">
                  <span className="quality-feature__icon">✓</span>
                  <span>Strict testing at every stage</span>
                </div>
                <div className="quality-feature">
                  <span className="quality-feature__icon">✓</span>
                  <span>Compliance with national & international standards</span>
                </div>
                <div className="quality-feature">
                  <span className="quality-feature__icon">✓</span>
                  <span>Stable, accurate, and safe formulations</span>
                </div>
                <div className="quality-feature">
                  <span className="quality-feature__icon">✓</span>
                  <span>Continuous improvement in processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rnd-cta">
        <div className="container">
          <div className="rnd-cta__content">
            <h2>Interested in Our Research Capabilities?</h2>
            <p>Learn more about our products developed through rigorous research or get in touch with our team.</p>
            <div className="rnd-cta__actions">
              <a href="/products" className="btn btn--primary">View Our Products</a>
              <a href="/contact" className="btn btn--outline">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
