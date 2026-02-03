import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader after minimum time or when page loads
    const minTime = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(minTime)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__logo">
          <img src="/assets/bsr-logo.png" alt="BSR Pharma" className="preloader__logo-img" />
        </div>
        <div className="preloader__text">
          <span className="preloader__letter preloader__letter--1">B</span>
          <span className="preloader__letter preloader__letter--2">S</span>
          <span className="preloader__letter preloader__letter--3">R</span>
          <span className="preloader__space"> </span>
          <span className="preloader__letter preloader__letter--4">P</span>
          <span className="preloader__letter preloader__letter--5">H</span>
          <span className="preloader__letter preloader__letter--6">A</span>
          <span className="preloader__letter preloader__letter--7">R</span>
          <span className="preloader__letter preloader__letter--8">M</span>
          <span className="preloader__letter preloader__letter--9">A</span>
        </div>
        <div className="preloader__tagline">Trusted Health Solution</div>
        <div className="preloader__spinner">
          <div className="preloader__spinner-ring"></div>
          <div className="preloader__spinner-ring"></div>
          <div className="preloader__spinner-ring"></div>
        </div>
      </div>
    </div>
  )
}
