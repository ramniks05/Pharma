import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { sliderSlides } from '../data/products'
import './Slider.css'

const AUTOPLAY_MS = 5000

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const total = sliderSlides.length

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [total])

  const goTo = (index) => setCurrent((index + total) % total)
  const prev = () => setCurrent((current - 1 + total) % total)
  const next = () => setCurrent((current + 1) % total)

  if (!sliderSlides.length) return null

  return (
    <section className="slider" aria-label="Product banners">
      <div className="slider__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {sliderSlides.map((slide, index) => (
          <div key={index} className="slider__slide" aria-hidden={index !== current}>
            <div className="slider__image-wrap">
              <img src={slide.image} alt={slide.alt} className="slider__image" />
            </div>
            <div className="slider__overlay">
              <div className="container slider__content">
                <Link to={`/product/${slide.productId}`} className="btn btn--primary slider__cta">
                  Learn more
                </Link>
                <Link to={`/product/${slide.productId}#enquiry`} className="btn btn--outline slider__cta btn--white-outline">
                  Enquire on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button type="button" className="slider__arrow slider__arrow--prev" aria-label="Previous slide" onClick={prev}>
            <span aria-hidden>‹</span>
          </button>
          <button type="button" className="slider__arrow slider__arrow--next" aria-label="Next slide" onClick={next}>
            <span aria-hidden>›</span>
          </button>
          <div className="slider__dots">
            {sliderSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider__dot ${index === current ? 'slider__dot--active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
