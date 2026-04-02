import React from 'react'

const Population = ({ data }) => {
  const maxPopulation = data[0].population;

  return (
    <div style={{ width: '80%', margin: 'auto', fontFamily: 'Arial' }}>
      
      {/* Titles */}
      <h1 style={{ textAlign: 'center' }}>30 Days Of React</h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        World population
      </h2>
      <p style={{ textAlign: 'center', color: 'gray' }}>
        Ten most populated countries
      </p>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0'
          }}
        >
          {/* Country */}
          <div style={{ width: '150px', fontWeight: 'bold' }}>
            {item.country.toUpperCase()}
          </div>

          {/* Progress Bar */}
          <progress
            value={item.population}
            max={maxPopulation}
            style={{
              flex: 1,
              height: '25px',
              margin: '0 10px'
            }}
          />

          {/* Population */}
          <div style={{ width: '150px', textAlign: 'right' }}>
            {item.population.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Population