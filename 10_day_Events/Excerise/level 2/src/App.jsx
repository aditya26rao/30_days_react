import React from 'react'
import { useState } from 'react'

const App = () => {
  const [position,setPosition] = useState({x: 0,y: 0})
  const [showText,setShowText] = useState(false)


  const handleMouseEnter = () => {
    setShowText(true)
  }

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
      })
  }

  const handleMouseLeave = () => {
    setShowText(false)
  }
   return (
    <div
      style={{ height: '100vh', background: '#111', color: '#fff' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {showText && (
        <h2
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          🚀 Follow Me
        </h2>
      )}
    </div>
  )
}

export default App