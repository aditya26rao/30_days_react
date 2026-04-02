import React from 'react'

const App = () => {
  const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0)', // fixed here
    border: 'none',
    borderRadius: 5,
  }

  const Button = () => <button style={buttonStyles}>action</button>

  return (
    <>
      <Button />
    </>
  )
}

export default App