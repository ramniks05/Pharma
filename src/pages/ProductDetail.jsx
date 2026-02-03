import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { products } from '../data/products'
import './ProductDetail.css'
import EnquiryModal from '../components/EnquiryModal'

export default function ProductDetail() {
  const { productId } = useParams()
  const location = useLocation()
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const product = products.find((p) => p.id === productId)

  useEffect(() => {
    if (location.hash === '#enquiry' && product) setEnquiryOpen(true)
  }, [location.hash, product])

  if (!product) {
    return (
      <div className="container section">
        <h1>Product not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  const productName = `${product.name} ${product.tagline}`

  return (
    <>
      <section className="product-hero">
        <div className="container product-hero__inner">
          <div className="product-hero__media">
            <img src={product.bannerImage} alt={productName} className="product-hero__img" />
          </div>
          <div className="product-hero__content">
            <h1 className="product-hero__title">
              {product.name} <span className="product-hero__title-sub">{product.tagline}</span>
            </h1>
            <p className="product-hero__intro">{product.intro}</p>
            <p className="product-hero__comp"><strong>Composition:</strong> {product.composition}</p>
            <p className="product-hero__short">{product.shortDesc}</p>
            <button
              type="button"
              id="enquiry"
              className="btn btn--primary btn--whatsapp"
              onClick={() => setEnquiryOpen(true)}
            >
              <span className="icon icon--whatsapp" /> Enquire on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <div className="container product-detail">
        <section className="product-section">
          <h2 className="product-section__title">About {product.name}</h2>
          <p className="product-section__text">{product.about}</p>
        </section>

        <section className="product-section">
          <h2 className="product-section__title">Indications</h2>
          <p className="product-section__text">{product.name} is indicated for the treatment of:</p>
          <ul className="product-list">
            {product.indications.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="product-section">
          <h2 className="product-section__title">Mechanism of Action</h2>
          <p className="product-section__text">{product.name} works through a combined mechanism:</p>
          <ul className="product-list">
            {product.mechanism.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="product-section">
          <h2 className="product-section__title">Key Benefits</h2>
          <ul className="product-list product-list--checks">
            {product.keyBenefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="product-section product-section--compact">
          <h2 className="product-section__title">Dosage</h2>
          <p className="product-section__text">{product.dosage}</p>
        </section>

        <section className="product-section product-section--compact">
          <h2 className="product-section__title">Storage</h2>
          <ul className="product-list">
            {product.storage.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="product-section product-section--disclaimer">
          <h2 className="product-section__title">Disclaimer</h2>
          <p className="product-section__text">{product.disclaimer}</p>
        </section>

        <div className="product-detail__actions">
          <button
            type="button"
            className="btn btn--primary btn--whatsapp"
            onClick={() => setEnquiryOpen(true)}
          >
            <span className="icon icon--whatsapp" /> Enquire on WhatsApp
          </button>
          <Link to="/" className="btn btn--outline">Back to Home</Link>
        </div>
      </div>

      {enquiryOpen && (
        <EnquiryModal
          productName={productName}
          productId={product.id}
          onClose={() => setEnquiryOpen(false)}
        />
      )}
    </>
  )
}
