# Uncontrolled Components

On Day 11, we learned controlled inputs, where React state manages form values.

In React, controlled inputs are used most of the time. However, in some cases, we can use uncontrolled inputs. In an uncontrolled component, the form data is handled by the DOM itself, and we read values using refs.

## What Is an Uncontrolled Component?

Instead of updating React state on every `onChange`, we attach a ref to the input and read its current value during submit.

## Getting Data from a Single Uncontrolled Input

### Class Component

```jsx
import React, { Component } from 'react'

export default class App extends Component {
  firstNameRef = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.firstNameRef.current.value)
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First Name'
            ref={this.firstNameRef}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
```

### Function Component

```jsx
import React, { useRef } from 'react'

const App = () => {
  const firstNameRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstNameRef.current.value)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          ref={firstNameRef}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
```

## Getting Multiple Input Values from a Form

We can attach multiple refs and collect all values in `handleSubmit`.

### Class Component

```jsx
import React, { Component } from 'react'

export default class App extends Component {
  firstNameRef = React.createRef()
  lastNameRef = React.createRef()
  countryRef = React.createRef()
  titleRef = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      country: this.countryRef.current.value,
      title: this.titleRef.current.value,
    }

    // This is where you can send data to an API.
    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              ref={this.firstNameRef}
            />
          </div>

          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              ref={this.lastNameRef}
            />
          </div>

          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              ref={this.countryRef}
            />
          </div>

          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              ref={this.titleRef}
            />
          </div>

          <button className='btn btn-success' type='submit'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
```

### Function Component

```jsx
import React, { useRef } from 'react'

const App = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const countryRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      country: countryRef.current.value,
    }

    console.log(data)
  }

  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First Name'
            ref={firstNameRef}
          />
        </div>

        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Last Name'
            ref={lastNameRef}
          />
        </div>

        <div>
          <label htmlFor='country'>Country: </label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Country'
            ref={countryRef}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
```

## Controlled vs Uncontrolled Inputs

- Controlled input: value is managed by React state (`useState` or `this.state`).
- Uncontrolled input: value is managed by the DOM and accessed via refs.

In React applications, controlled inputs are generally preferred, especially for validation and dynamic UI behavior.

## Notes

- Use refs when you need direct access to a DOM element.
- Avoid direct DOM manipulation with plain JavaScript in React apps.
- Uncontrolled inputs can be useful for quick forms or integrating non-React code.
- File inputs are usually handled as uncontrolled inputs in React.

## Exercises

1. What is a controlled input?
2. What is an uncontrolled input?
3. How do you get the content of a specific HTML element in React?
4. Why is it not a good idea to manipulate the DOM directly in React?
5. Which is used more frequently in React: controlled or uncontrolled input?
6. What do you need to create an uncontrolled input?
7. Do you need state to create an uncontrolled input?
8. When do you use an uncontrolled input?
9. When do you use a controlled input?
10. For form field validation, do you usually use controlled or uncontrolled inputs?