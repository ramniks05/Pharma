import './ProductCategories.css'

const categories = [
  { id: 'cardio', name: 'Cardio', icon: '❤️', desc: 'Cardiovascular health products' },
  { id: 'diabetic', name: 'Diabetic', icon: '🩺', desc: 'Diabetes management solutions' },
  { id: 'general', name: 'General', icon: '💊', desc: 'General healthcare products' },
  { id: 'neuropsychiatry', name: 'Neuropsychiatry', icon: '🧠', desc: 'Neurological and psychiatric care' },
  { id: 'orthopedic', name: 'Orthopedic', icon: '🦴', desc: 'Bone and joint health' },
  { id: 'nephrology', name: 'Nephrology', icon: '🔬', desc: 'Kidney care products' },
  { id: 'gels', name: 'Gels', icon: '🧴', desc: 'Topical gel formulations' },
  { id: 'syrups', name: 'Syrups', icon: '🥤', desc: 'Liquid oral medications' },
  { id: 'injections', name: 'Injections', icon: '💉', desc: 'Injectable medications' },
  { id: 'sachets', name: 'Sachets', icon: '📦', desc: 'Sachet formulations' },
  { id: 'rotacaps', name: 'Rotacaps', icon: '💨', desc: 'Respiratory rotacaps' },
]

export default function ProductCategories() {
  return (
    <section className="product-categories">
      <div className="container">
        <div className="product-categories__header">
          <span className="product-categories__badge">Our Product Portfolio</span>
          <h2 className="product-categories__title">Product Categories</h2>
          <p className="product-categories__subtitle">
            Comprehensive range of pharmaceutical products across multiple therapeutic areas
          </p>
        </div>

        <div className="product-categories__grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-card__icon">{category.icon}</div>
              <h3 className="category-card__title">{category.name}</h3>
              <p className="category-card__desc">{category.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
