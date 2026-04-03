# Events

## What Is an Event?
An event is an action or occurrence that the browser can detect, such as clicking a button, moving the mouse, typing on the keyboard, submitting a form, or copying text.

In React, we listen to these browser actions and respond to them with event handlers.

Common examples:
- clicking a button
- hovering over an element
- typing in an input
- submitting a form
- copying text
- moving the mouse

## React Events vs HTML Events
Handling events in React is very similar to handling events in plain JavaScript, but there are a couple of important differences:

1. React event names use `camelCase` instead of lowercase.
2. In JSX, we pass a function reference instead of a string.

## Event Handling in HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>30 Days Of React App</title>
  </head>
  <body>
    <button onclick="greetPeople()">Greet People</button>

    <script>
      const greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge')
      }
    </script>
  </body>
</html>
```

## Event Handling in React

### Function Component Example
```jsx
import React from 'react'

const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }

  return <button onClick={greetPeople}>Greet People</button>
}

export default App
```

### Class Component Example
```jsx
import React, { Component } from 'react'

class App extends Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }

  render() {
    return <button onClick={this.greetPeople}>Greet People</button>
  }
}

export default App
```

## Preventing Default Behavior
In plain HTML, we often return `false` to stop the default behavior of an element. In React, we use `event.preventDefault()` instead.

### Plain HTML
```html
<a href="#" onclick="console.log('The link was clicked.'); return false;">
  Click me
</a>
```

### React
```jsx
import React from 'react'

const App = () => {
  const handleClick = (e) => {
    e.preventDefault()
    alert('Welcome to 30 Days Of React Challenge')
  }

  return (
    <a href='#' onClick={handleClick}>
      Click me
    </a>
  )
}

export default App
```

## Common React Events
Event handling is a broad topic, but these are some of the most common events we use in React:

- `onClick`
- `onMouseMove`
- `onMouseEnter`
- `onMouseLeave`
- `onMouseOut`
- `onKeyDown`
- `onKeyPress`
- `onKeyUp`
- `onCopy`
- `onCut`
- `onDrag`
- `onChange`
- `onBlur`
- `onInput`
- `onSubmit`

## Class Component Example
```jsx
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    firstName: '',
    message: '',
    key: '',
  }

  handleClick = () => {
    this.setState({
      message: 'Welcome to the world of events',
    })
  }

  handleMouseMove = () => {
    this.setState({
      message: 'Mouse is moving',
    })
  }

  handleCopy = () => {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
  }

  handleKeyPress = (e) => {
    this.setState({
      message: `${e.target.value} has been pressed and the key code is ${e.charCode}`,
    })
  }

  handleBlur = () => {
    this.setState({
      message: 'Input field has been blurred',
    })
  }

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      message: `Form submitted. Hello ${this.state.firstName}`,
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copyright permission by copying this text
        </p>

        <p>{this.state.message}</p>

        <label htmlFor='keypress'>Test for onKeyPress Event: </label>
        <input id='keypress' type='text' onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor='blur'>Test for onBlur Event: </label>
        <input id='blur' type='text' onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              id='firstName'
              type='text'
              onChange={this.handleChange}
              name='firstName'
              value={this.state.firstName}
            />
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}
```

## Function Component Example
This example matches the Day 10 practice app in `events/src/App.jsx`.

```jsx
import React, { useState } from 'react'

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = () => {
    setMessage('Welcome to the world of events')
  }

  const handleMouseMove = () => {
    setMessage('Mouse is moving')
  }

  const handleChange = (e) => {
    setFirstName(e.target.value)
    setMessage(e.target.value)
  }

  const handleCopy = () => {
    setMessage('Using 30 Days Of React for commercial purpose is not allowed')
  }

  const handleKeyPress = (e) => {
    setMessage(`${e.target.value} has been pressed and the key is ${e.key}`)
  }

  const handleBlur = () => {
    setMessage('Input field has been blurred')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Form has been submitted. Hello ${firstName}`)
  }

  return (
    <div>
      <h1>Welcome to the World of Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <p onCopy={handleCopy}>
        Check copyright permission by copying this text
      </p>

      <p>{message}</p>

      <label htmlFor='keypress'>Test for onKeyPress Event: </label>
      <input id='keypress' type='text' onKeyPress={handleKeyPress} />
      <br />

      <label htmlFor='blur'>Test for onBlur Event: </label>
      <input id='blur' type='text' onBlur={handleBlur} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            id='firstName'
            type='text'
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
```

## Notes
- `onClick` is commonly used for buttons.
- `onChange` is commonly used for input fields.
- `onSubmit` belongs on the `form` element.
- `onBlur` runs when an input loses focus.
- `onKeyPress` runs when a key is pressed inside an input.
- `e.preventDefault()` prevents the browser's default form or link behavior.

## Exercises
1. What is an event?
2. What is the difference between an HTML event and a React event?
3. Write at least 4 keyboard events.
4. Write at least 8 mouse events.
5. What are the most common mouse and keyboard events?
6. Write an event specific to an input element.
7. Write an event specific to a form element.
8. Display the coordinates of the viewport when the mouse is moving on the page.
9. What is the difference between `onInput`, `onChange`, and `onBlur`?
10. Where do we put the `onSubmit` event?
