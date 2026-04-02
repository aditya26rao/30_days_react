import React from 'react'

const Button = (props) => {
  const {onClick,text} = props
  return (
<button onClick={onClick}>{text}</button>
  )
}


const App = () => {
const sayHi = () => {
  alert('Helloooooo brother')
}

  return (
    <>
      <Button text = 'Say Hi' onClick = {sayHi}/>
    </>
  )
}

export default App

