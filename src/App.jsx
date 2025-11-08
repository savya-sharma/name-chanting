import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showReset, setShowReset] = useState(false)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const sliderRef = useRef(null)

  // Background images for the slideshow from public/images folder
  const backgroundImages = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
  ]

  // Background image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])







  useEffect(() => {
    // GSAP animation for scrolling text
    if (sliderRef.current) {
      const slider = sliderRef.current
      gsap.to(slider, {
        x: '-50%',
        duration: 19,
        ease: 'none',
        repeat: -1
      })
    }
  }, [])

  const handleCount = () => {
    if (count < 109) {
      setCount(count + 1)
      if (count >= 0) {
        setShowReset(true)
      }
    }
  }

  const handleReset = () => {
    setCount(0)
    setShowReset(false)
  }

  const mantraText = "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥"

  return (
    <main>
      {/* Background image slideshow with fade effect */}
      <div className="background-slideshow" aria-hidden="true">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`background-image ${index === currentBgIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Placeholder for Spline 3D model */}
      <div className="spline-model">
        {/* Add Spline component here if needed */}
      </div>

      <div className="slider">
        <div className="con" ref={sliderRef}>
          <h3>{mantraText}</h3>
          <span className="gola"></span>
          <h3>{mantraText}</h3>
          <span className="gola"></span>
          <h3>{mantraText}</h3>
          <span className="gola"></span>
          <h3>{mantraText}</h3>
          <span className="gola"></span>
          <h3>{mantraText}</h3>
        </div>
      </div>

      <div className="container">
        <div className="counterDiv">
          <span className="counterSpan" aria-live="polite" aria-atomic="true">
            {count}
          </span>
        </div>
        <button
          className="countBtn"
          onClick={handleCount}
          aria-label="Increment counter"
        >
          Count
        </button>
        {showReset && (
          <button
            className="resetBtn"
            onClick={handleReset}
            aria-label="Reset counter"
          >
            Reset
          </button>
        )}
      </div>
    </main>
  )
}

export default App
