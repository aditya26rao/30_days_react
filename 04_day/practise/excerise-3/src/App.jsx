import React from 'react'

const Main = ({ colors }) => {
  return (
    <ul>
      {colors.map((item, index) => (
        <li key={index} style={{ background: item, color: 'white', padding: '10px', textAlign: 'center'  }}>
          {item}
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  const colors = ['#518cef', '#3b10c4','#9aede6','#a30dd0']

  return (
    <>
      <Main colors={colors} />
    </>
  )
}

export default App