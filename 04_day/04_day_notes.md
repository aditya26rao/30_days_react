# Props

## Props in Functional Components

### What are props?

`props` is a special object in React that stands for **properties**. It is used to pass data from one component to another, usually from a parent component to a child component.

You can think of props as a way to transport data between components.

### Example

```jsx
const UserDetails = (props) => {
  return (
    <header>
      <div>
        <h1>{props.firstName}</h1>
        <h2>{props.role}</h2>
        <p>{props.bio}</p>
      </div>
    </header>
  )
}

const App = () => {
  return (
    <>
      <UserDetails
        firstName='Aditya'
        role='Full Stack Developer'
        bio='I am 23 years old.'
      />
    </>
  )
}

export default App
```

## Props Object

In React, props are received as an object inside a functional component. We can access each value using dot notation, like `props.firstName` or `props.role`.

## Different Data Types of Props

### 1. String Props

The value we pass to a component can be a string.

```jsx
const Header = (props) => {
  console.log(props)

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

const App = () => (
  <div className='app'>
    <Header
      welcome='Welcome to 30 Days of React'
      title='Getting Started with React'
      subtitle='JavaScript Library'
      firstName='Aditya'
      lastName='Rao'
      date='March 27, 2026'
    />
  </div>
)

export default App
```

If we check the browser console, we will see a props object similar to this:

```jsx
{
  welcome: 'Welcome to 30 Days of React',
  title: 'Getting Started with React',
  subtitle: 'JavaScript Library',
  firstName: 'Aditya',
  lastName: 'Rao',
  date: 'March 27, 2026'
}
```

We can also pass string values using variables.

```jsx
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
)

const App = () => {
  const welcome = 'Welcome to 30 Days of React'
  const title = 'Getting Started with React'
  const subtitle = 'JavaScript Library'
  const firstName = 'Aditya'
  const lastName = 'Rao'
  const date = 'March 27, 2026'

  return (
    <div className='app'>
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  )
}
```

### 2. Number Props

We can also pass numbers as props.

```jsx
const Age = (props) => <div>My age is {props.age}</div>

const App = () => {
  const currentYear = new Date().getFullYear()
  const birthYear = 2002
  const age = currentYear - birthYear

  return (
    <>
      <Age age={age} />
    </>
  )
}

export default App
```

### 3. Boolean Props

We can pass boolean values to a React component.

```jsx
const Status = (props) => {
  const message = props.status ? 'Old enough to drive' : 'Too young for driving'

  return <p>{message}</p>
}

const App = () => {
  const currentYear = new Date().getFullYear()
  const birthYear = 2002
  const age = currentYear - birthYear
  const status = age >= 18

  return (
    <>
      <Status status={status} />
    </>
  )
}

export default App
```

### 4. Array Props

In programming, arrays are commonly used to store a collection of values. We often pass arrays as props in React.

```jsx
const Skills = (props) => {
  return (
    <ul>
      {props.skills.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const App = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Express', 'MongoDB', 'PostgreSQL']

  return (
    <>
      <Skills skills={skills} />
    </>
  )
}

export default App
```

### 5. Object Props

We can also pass an object as a prop to a React component.

```jsx
const Skills = (props) => {
  return (
    <ul>
      <li>{props.skills.frontend}</li>
      <li>{props.skills.language}</li>
      <li>{props.skills.backend}</li>
      <li>{props.skills.database}</li>

      {Object.entries(props.skills).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  const skills = {
    frontend: 'HTML, CSS',
    language: 'JavaScript',
    backend: 'Node.js, React, Express',
    database: 'MongoDB, PostgreSQL',
  }

  return (
    <>
      <Skills skills={skills} />
    </>
  )
}

export default App
```

### 6. Array of Objects Props

We can pass an array of objects as props.

```jsx
const Skills = (props) => {
  return (
    <ul>
      {props.skills.map((skill) => (
        <li key={skill.name}>
          {skill.name}: {skill.value}
        </li>
      ))}
    </ul>
  )
}

const App = () => {
  const skills = [
    { name: 'Frontend', value: 'HTML, CSS' },
    { name: 'Language', value: 'JavaScript' },
    { name: 'Backend', value: 'Node.js, React, Express' },
    { name: 'Database', value: 'MongoDB, PostgreSQL' },
  ]

  return (
    <>
      <Skills skills={skills} />
    </>
  )
}

export default App
```

### 7. Function Props

We can pass a function as a prop to a React component.

```jsx
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  return (
    <>
      <Button text='Say Hi' onClick={() => alert('Hi')} />
    </>
  )
}

export default App
```

## Destructuring Props

Destructuring makes code easier to read by extracting values from the props object.

### Syntax

```jsx
const Button = (props) => {
  const { onClick, text } = props

  return <button onClick={onClick}>{text}</button>
}
```

We can also destructure props directly in the function parameter.

```jsx
import React from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const sayHi = () => {
    alert('Helloooooo brother')
  }

  return (
    <>
      <Button text='Say Hi' onClick={sayHi} />
    </>
  )
}

export default App
```

## `propTypes`

The `propTypes` package helps us define the expected data type of props passed to a component.

## `defaultProps`

`defaultProps` can be used when we want a component to have default values for props.

We will cover `propTypes` in more detail in later sections.

## Exercises: Components and Props

### Level 1

1. What is props in a React component?
2. How do you access props in a React component?
3. What data types can we pass as props to components?
4. What is `propTypes`?
5. What is `defaultProps`?
