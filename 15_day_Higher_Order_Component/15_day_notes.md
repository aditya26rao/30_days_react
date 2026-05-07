# Higher Order Component

A Higher Order Component (HOC) is a function that takes a component and returns a new enhanced component.

This is similar to a higher order function in JavaScript. A higher order function takes another function as a parameter or returns another function.

In the same way, a higher order component takes a component as input and returns another component with extra behavior, data, or styling.

## Basic HOC Example

```jsx
import React from 'react'

const CountryList = ({ data = [] }) => {
  return (
    <div>
      <h2>Countries list</h2>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  )
}

const withLoading = (Component) => {
  return (props) => {
    if (props.loading) {
      return <h2>Loading...</h2>
    }
    return <Component {...props} />
  }
}

const EnhancedCountryList = withLoading(CountryList)

export default EnhancedCountryList
```

## Passing Style Or Data Into A Component

```jsx
import React from 'react'

const CountryList = ({ data = [], style }) => {
  return (
    <div style={style}>
      <h2>Countries list</h2>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  )
}

const withLoading = (Component) => {
  return (props) => {
    if (props.loading) {
      return <h2>Loading...</h2>
    }

    const style = {
      backgroundColor: '#61dbfb',
      padding: '10px 25px',
      border: 'none',
      borderRadius: 5,
      margin: 3,
      color: 'black',
      cursor: 'pointer',
      fontSize: 18,
    }

    return <Component {...props} style={style} />
  }
}

const EnhancedCountryList = withLoading(CountryList)

export default EnhancedCountryList
```

## Creating Multiple HOCs

```jsx
import React from 'react'

const CountryList = ({ data = [], style }) => {
  return (
    <div style={style}>
      <h2>Countries list</h2>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  )
}

const withLoading = (Component) => {
  return (props) => {
    if (props.loading) {
      return <h2>Loading...</h2>
    }
    return <Component {...props} />
  }
}

const withColor = (Component) => {
  return (props) => {
    const hocStyle = {
      backgroundColor: '#61dbfb',
      padding: '10px 25px',
      border: 'none',
      borderRadius: 5,
      margin: 3,
      cursor: 'pointer',
      fontSize: 18,
      color: 'black',
    }

    return <Component {...props} style={{ ...hocStyle, ...props.style }} />
  }
}

const EnhancedCountryList = withColor(withLoading(CountryList))

export default EnhancedCountryList
```

## Real-Time Use Of HOC

```jsx
import React from 'react'

const Dashboard = () => {
  return <h2>Welcome to Dashboard</h2>
}

const withAuth = (Component) => {
  return (props) => {
    const isLogin = true

    if (isLogin) {
      return <Component {...props} />
    }

    return <h2>Please Login...</h2>
  }
}

const EnhancedComponent = withAuth(Dashboard)

export default EnhancedComponent
```

```jsx
import React from 'react'

const Dashboard = () => {
  return <h2>Welcome to Dashboard</h2>
}

const Button = ({ text, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}

const withAuth = (Component) => {
  return (props) => {
    const isLogin = true

    if (isLogin) {
      return <Component {...props} />
    }

    return <h2>Please Login...</h2>
  }
}

const buttonWithStyles = (Component, name = 'default') => {
  const colors = [
    { name: 'default', backgroundColor: '#e7e7e7', color: '#000' },
    { name: 'react', backgroundColor: '#61dbfb', color: '#fff' },
    { name: 'success', backgroundColor: '#4caf50', color: '#fff' },
    { name: 'info', backgroundColor: '#2196f3', color: '#fff' },
    { name: 'warning', backgroundColor: '#ff9800', color: '#fff' },
    { name: 'danger', backgroundColor: '#f44336', color: '#fff' },
  ]

  const selected = colors.find((color) => color.name === name)

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

const EnhancedComponent = withAuth(Dashboard)

const DefaultButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const SuccessButton = buttonWithStyles(Button, 'success')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')

const App = () => {
  return (
    <div>
      <EnhancedComponent />

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
```

The above example is one use case of a Higher Order Component. HOCs can do more than style a simple button. They allow us to reuse component logic and enhance a component with styling, authentication, loading states, or other functionality.

In the coming sections, we will cover React Router, where you will often see one component wrap another component.

## Exercise

1. What is a higher order function?
2. What is a Higher Order Component?
3. What is the difference between a higher order function and a Higher Order Component?
4. A Higher Order Component can allow us to enhance a component. True or false?
