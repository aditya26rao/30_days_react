import React from 'react'
import { useState } from 'react'

const App = () => {

  const [firstName, setFirstName] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = (e) => {
    setMessage('Welcome to the world of events',)
  }

  const handleMouseMove = (e) => {
    setMessage('mouse is moving')
  }

  const handleChange = (e) => {
    setFirstName(e.target.value)
    setMessage(e.target.value)
  }

  const handleCopy = (e) => {
    setMessage('Using 30 Days Of React for commercial purpose is not allowed')
  }
  const handleKeyPress = (e) => {
    setMessage(`${e.target.value} has been pressed and the keycode is` + e.key)
  }

  const handleBlur = (e) => {
    setMessage('Input field has been blurred')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Form has been Submitted, Hello ${firstName}`)
  }
  return (
    <div>
      <h1>Welcome to the World of Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <p onCopy={handleCopy}>
        Check copy right permission by copying this text
      </p>

      <p>{message}</p>
      <label htmlFor=''> Test for onKeyPress Event: </label>
      <input type='text' onKeyPress={handleKeyPress} />
      <br />

      <label htmlFor=''> Test for onBlur Event: </label>
      <input type='text' onBlur={handleBlur} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            onChange={handleChange}
            name='firstName'
            value={firstName}
          />
        </div>

        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default App