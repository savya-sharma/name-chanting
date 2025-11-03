import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showReset, setShowReset] = useState(false)
  const sliderRef = useRef(null)

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
      {/* Mobile-only background image */}
      <div
        className="mobile-bg"
        aria-hidden="true"
        style={{
          position: 'fixed',
          zIndex: -1,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("https://i.pinimg.com/736x/a1/f5/aa/a1f5aa70d15892b11bf801156fb259c7.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'block'
        }}
      ></div>
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
      {/* Inline style to hide background on non-mobile screens */}
      <style>{`
        .mobile-bg {
          display: block;
        }
        @media (min-width: 768px) {
          .mobile-bg {
            display: none !important;
          }
        }
      `}</style>
    </main>
  )
}

export default App
