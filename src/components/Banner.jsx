import { Link } from 'react-router-dom'
import { products } from '../data/products'

const featured = products[0]

export default function Banner({ onClose }) {
  return (
    <div className="banner">
      <div className="container banner__inner">
        <div className="banner__content">
          <span className="banner__badge">Featured Product</span>
          <h2 className="banner__title">
            {featured.name} <span className="banner__title-sub">{featured.tagline}</span>
          </h2>
          <p className="banner__desc">{featured.shortDesc}</p>
          <Link to={`/product/${featured.id}`} className="banner__cta">
            Learn more
          </Link>
        </div>
        <button type="button" className="banner__close" aria-label="Close banner" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  )
}
