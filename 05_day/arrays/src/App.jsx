import React from 'react'

const Countries = ({ countries }) => {
  const countryList = countries.map(({name, city}, index) => {
    return (
      <li key={index}>
        <h1>{name} :- {city}</h1>
      </li>
    )
  })
  return <ul>{countryList}</ul>
}


const App = () => {

  const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
  ]

  return (
    <>
      <Countries countries={countries} />
    </>
  )
}

export default App