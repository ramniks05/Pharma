import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/products'
import './HeroSlider.css'

export default function HeroSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="hero-slider">
      <div className="hero-slider__content">
        <div className="container hero-slider__container">
          <div className="hero-slider__text">
            <h1 className="hero-slider__title">{company.name}</h1>
            <p className="hero-slider__tagline">{company.tagline}</p>
            <p className="hero-slider__description">
              Delivering Safe, Effective & Affordable Medicines
            </p>
            <div className="hero-slider__features">
              <span>Innovation</span>
              <span className="hero-slider__separator">•</span>
              <span>Quality</span>
              <span className="hero-slider__separator">•</span>
              <span>Integrity</span>
            </div>
            <div className="hero-slider__actions">
              <Link to="/products" className="btn btn--primary">
                Our Products
              </Link>
              <Link to="/about" className="btn btn--outline">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hero-slider__images">
            <div className="hero-slider__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="hero-slider__slide">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero-slider__image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="hero-slider__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`hero-slider__dot ${index === currentIndex ? 'hero-slider__dot--active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
