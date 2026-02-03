import { company } from '../data/products'

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="container top-header__inner">
        <div className="top-header__left">
          <a href={`mailto:${company.email}`} className="top-header__link">
            <span className="icon icon--mail" aria-hidden />
            {company.email}
          </a>
          <a href={`tel:${company.phone}`} className="top-header__link">
            <span className="icon icon--phone" aria-hidden />
            {company.phone}
          </a>
          {company.phone2 && (
            <a href={`tel:${company.phone2}`} className="top-header__link">
              <span className="icon icon--phone" aria-hidden />
              {company.phone2}
            </a>
          )}
        </div>
        <div className="top-header__right">
          <span className="top-header__tagline">{company.tagline}</span>
        </div>
      </div>
    </div>
  )
}
