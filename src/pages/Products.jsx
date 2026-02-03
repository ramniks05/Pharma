import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Products.css'

function searchProducts(productsList, query) {
  if (!query.trim()) return productsList
  const q = query.toLowerCase().trim()
  return productsList.filter((p) => {
    const name = `${p.name} ${p.tagline}`.toLowerCase()
    const shortDesc = (p.shortDesc || '').toLowerCase()
    const composition = (p.composition || '').toLowerCase()
    const about = (p.about || '').toLowerCase()
    return name.includes(q) || shortDesc.includes(q) || composition.includes(q) || about.includes(q)
  })
}

export default function Products() {
  const [search, setSearch] = useState('')
  const filteredProducts = useMemo(() => searchProducts(products, search), [search])

  return (
    <>
      <section className="products-page-hero">
        <div className="container">
          <h1 className="products-page-hero__title">Our Products</h1>
          <p className="products-page-hero__subtitle">Trusted pharmaceutical solutions for pain, allergy, and digestive care.</p>
          <div className="products-search">
            <input
              type="search"
              placeholder="Search products by name, composition, or condition..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="products-search__input"
              aria-label="Search products"
            />
          </div>
        </div>
      </section>

      <section className="products-page-grid">
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-card__image-wrap">
                    <img src={product.bannerImage} alt={`${product.name} ${product.tagline}`} className="product-card__image" />
                  </div>
                  <div className="product-card__body">
                    <h2 className="product-card__title">{product.name} {product.tagline}</h2>
                    <p className="product-card__desc">{product.shortDesc}</p>
                    <p className="product-card__comp">{product.composition}</p>
                    <div className="product-card__actions">
                      <Link to={`/product/${product.id}`} className="btn btn--primary btn--sm">
                        View details
                      </Link>
                      <Link to={`/product/${product.id}#enquiry`} className="btn btn--outline btn--sm">
                        Enquire
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <p className="products-empty__text">No products found for "{search}"</p>
              <button type="button" className="btn btn--outline" onClick={() => setSearch('')}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
