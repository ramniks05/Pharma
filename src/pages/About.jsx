import { company } from '../data/products'
import './About.css'

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">About {company.name}</h1>
          <p className="about-hero__subtitle">{company.tagline}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Welcome to BSR Pharma Private Limited</h2>
            <p className="lead-text">
              A trusted name in quality healthcare solutions. We are committed to delivering safe, effective, and affordable 
              pharmaceutical products that enhance the well-being of communities. With innovation at our core and excellence 
              in every step, we aim to shape a healthier future for all.
            </p>
          </div>

          <div className="about-description">
            <p>
              BSR Pharma Pvt. Ltd. is a progressive pharmaceutical company dedicated to improving global health standards. 
              We develop, manufacture, and distribute high-quality medicines backed by scientific research and modern technology. 
              With a strong commitment to safety and purity, BSR Pharma continues to build trust among healthcare professionals 
              and customers.
            </p>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-card__icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To consistently deliver superior-quality, safe, and affordable medicines that improve the quality of life 
                and meet the evolving needs of the healthcare industry.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card__icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To become a leading pharmaceutical brand recognized globally for innovation, excellence, and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section__title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card__icon">🤝</div>
              <h4>Integrity</h4>
              <p>We believe in transparency and honesty.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">⭐</div>
              <h4>Quality</h4>
              <p>We are committed to unmatched product reliability.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">💡</div>
              <h4>Innovation</h4>
              <p>We continuously develop advanced formulations.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">❤️</div>
              <h4>Customer Focus</h4>
              <p>We prioritize patients and client satisfaction.</p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">🛡️</div>
              <h4>Responsibility</h4>
              <p>We follow ethical, environmental, and safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-rnd">
        <div className="container">
          <div className="rnd-content">
            <div className="rnd-text">
              <h2>Research and Development</h2>
              <p className="lead-text">
                At BSR Pharma, innovation drives us forward. Our experienced R&D team works continuously to enhance 
                product quality and develop advanced formulations.
              </p>
              <ul className="rnd-list">
                <li>Modern laboratory infrastructure</li>
                <li>Skilled scientists and researchers</li>
                <li>Stability testing</li>
                <li>New product development</li>
                <li>Continuous process improvement</li>
                <li>Regulatory compliance and documentation</li>
              </ul>
            </div>
            <div className="rnd-qa">
              <h3>Quality Assurance</h3>
              <p>Quality is the backbone of everything we do.</p>
              <ul>
                <li>Strict testing at every stage</li>
                <li>Compliance with national and international standards</li>
                <li>Stable, accurate, and safe formulations</li>
                <li>Continuous improvement in processes and safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-leadership">
        <div className="container">
          <h2 className="section__title">Leadership Team</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-card__image">
                <img src="/assets/director.png" alt="Arjun Singh - Director & Managing Director" />
              </div>
              <h3>Arjun Singh</h3>
              <p className="leader-card__role">Director & Managing Director</p>
              <p className="leader-card__bio">
                A visionary leader inspired by his father's dream, Arjun Singh provides strategic direction and 
                drives the core mission of BSR Pharma. His commitment to quality, integrity, and affordable healthcare 
                guides the company's growth.
              </p>
            </div>
            <div className="leader-card">
              <div className="leader-card__avatar">KS</div>
              <h3>Khushi Singh</h3>
              <p className="leader-card__role">Co-Director</p>
              <p className="leader-card__bio">
                A strong pillar of leadership, contributing to strategic planning, company growth, and operational excellence. 
                She brings dedication, creativity, and managerial strength to the organization.
              </p>
            </div>
            <div className="leader-card">
              <div className="leader-card__avatar">NS</div>
              <h3>Advocate Narendra Singh</h3>
              <p className="leader-card__role">Legal Adviser</p>
              <p className="leader-card__bio">
                Advocate Narendra Singh serves as the company's Legal Adviser, ensuring that all operations, agreements, 
                policies, and practices comply with legal and regulatory standards. With strong expertise in corporate and 
                pharmaceutical laws, he safeguards the company's interests and maintains transparency in all legal matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="container">
          <h2 className="section__title">Founder's Inspiration</h2>
          <div className="founder-tribute">
            <div className="founder-tribute__image">
              <img src="/assets/founder.png" alt="Late. Shri Birendra Singh Rathore - Founder" />
            </div>
            <div className="founder-tribute__content">
              <h3 className="founder-tribute__name">Late. Shri Birendra Singh Rathore</h3>
              <p className="founder-tribute__role">Founder</p>
              <div className="founder-tribute__text">
                <p>
                  BSR Pharma Private Limited (Pvt. Ltd.) is built on the cherished vision of <strong>Late. Shri Birendra Singh Rathore</strong>, 
                  a man who deeply believed that quality healthcare should be affordable for everyone. His heartfelt desire was to 
                  ensure that no one would be deprived of essential medicines due to high costs.
                </p>
                <p>
                  Although he is no longer with us today, his ideals and values continue to guide us. Inspired by his noble mission, 
                  <strong> Mr. Arjun Singh</strong> established this company as a tribute to his father.
                </p>
                <p>
                  The name <strong>BSR</strong> proudly represents <strong>Late. Shri Birendra Singh Rathore</strong>, honoring his legacy, 
                  his strength and his compassion for society.
                </p>
                <p>
                  <strong>Arjun Singh</strong> is committed to fulfilling his father's dream by taking <strong>BSR Pharma</strong> to new heights - 
                  delivering safe, affordable, and reliable medicines to people across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
