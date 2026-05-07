import React from 'react'

// Dashboard Component
const Dashboard = () => {
  return <h2>Welcome to Dashboard</h2>
}

// Button Component
const Button = ({ text, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}

// HOC - Authentication
const withAuth = (Component) => {
  return (props) => {
    const isLogin = true // change to false to test

    if (isLogin) {
      return <Component {...props} />
    }
    return <h2>Please Login...</h2>
  }
}

// HOC - Styling
const buttonWithStyles = (Component, name = 'default') => {
  const colors = [
    { name: 'default', backgroundColor: '#e7e7e7', color: '#000' },
    { name: 'react', backgroundColor: '#61dbfb', color: '#fff' },
    { name: 'success', backgroundColor: '#4CAF50', color: '#fff' },
    { name: 'info', backgroundColor: '#2196F3', color: '#fff' },
    { name: 'warning', backgroundColor: '#ff9800', color: '#fff' },
    { name: 'danger', backgroundColor: '#f44336', color: '#fff' },
  ]

  const selected = colors.find((c) => c.name === name)

  const style = {
    backgroundColor: selected.backgroundColor,
    color: selected.color,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
  }

  return (props) => {
    return <Component {...props} style={style} />
  }
}

// Enhanced Components
const EnhancedComponent = withAuth(Dashboard)

const DefaultButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const SuccessButton = buttonWithStyles(Button, 'success')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')

// App Component
const App = () => {
  return (
    <div>
      <Button text="No Style" onClick={() => alert('No Style')} />

      <DefaultButton text="Default" />
      <ReactButton text="React" />
      <InfoButton text="Info" />
      <SuccessButton text="Success" />
      <WarningButton text="Warning" />
      <DangerButton text="Danger" />
    </div>
  )
}

export default App