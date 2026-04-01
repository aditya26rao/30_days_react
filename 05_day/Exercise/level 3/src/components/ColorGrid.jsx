import React from 'react'

const ColorGrid = ({ colors }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            color: '#fff',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '5px'
          }}
        >
          {color}
        </div>
      ))}
    </div>
  )
}

export default ColorGrid