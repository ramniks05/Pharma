import { Link } from 'react-router-dom'
import { company } from '../data/products'

export default function BottomFooter() {
  const year = new Date().getFullYear()
  return (
    <div className="bottom-footer">
      <div className="container bottom-footer__inner">
        <div className="bottom-footer__left">
          <p className="bottom-footer__copy">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="bottom-footer__disclaimer">
            For the use of registered medical practitioners or hospitals or laboratories only.
          </p>
        </div>
        <div className="bottom-footer__right">
          <Link to="/about" className="bottom-footer__link">About</Link>
          <span className="bottom-footer__separator">•</span>
          <Link to="/rnd" className="bottom-footer__link">R&D</Link>
          <span className="bottom-footer__separator">•</span>
          <Link to="/contact" className="bottom-footer__link">Contact</Link>
          <span className="bottom-footer__separator">•</span>
          <Link to="/products" className="bottom-footer__link">Products</Link>
        </div>
      </div>
    </div>
  )
}
