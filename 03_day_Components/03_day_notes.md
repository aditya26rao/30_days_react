# Components

## What Are Components?

A React component is a small, reusable piece of code responsible for one part of the application's UI. In React, we assemble different components together to create an application.

We use JavaScript functions or classes to make components:

1. Functional Components
2. Class Components

Functional components are also known as presentational, stateless, or dumb components.
Class components are also known as container, stateful, or smart components.

So, let us change all the JSX into components. Components in React are JavaScript functions or classes that return JSX. A component name must start with an uppercase letter, and if the name has two words, it should use CamelCase.

## JavaScript Functions

A JavaScript function can be either a regular function or an arrow function. These functions are not exactly the same, but both can be used to create React components.

```jsx
const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName} ${lastName}, a ${title} developer based in ${country}. He knows ${skills.join(' ')}.`
}

// When we call this function, we need to pass parameters
const skills = ['HTML', 'CSS', 'JS', 'React']

console.log(
  getUserInfo('Aditya', 'Rao', 'India', 'FullStack Developer', skills)
)
```

## JavaScript Class

A class is a blueprint for creating objects. We instantiate a class to create different objects. In addition, we can create child classes by inheriting the methods and properties of the parent class.

```jsx
class Parent {
  constructor(firstName, lastName, country, title) {
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.title = title
  }

  getPersonalInfo() {
    return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this.country}.`
  }

  parentMethod() {
    // code goes here
  }
}

const person1 = new Parent('Aditya', 'Rao', 'India', 'FullStack Developer')

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
  }

  getSkills() {
    const len = this.skills.length
    return len > 0 ? this.skills.join(' ') : 'No skills found'
  }

  childMethod() {
    // code goes here
  }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const child = new Child(
  'Aditya',
  'Rao',
  'India',
  'FullStack Developer',
  skills
)
```

We just briefly covered functions and classes. React components can be made using JavaScript functions or classes, so now let us create React components.

## Creating React Components

### Functional Component

Using a JavaScript function, we can create a functional React component.

```jsx
// React component syntax
// It can be an arrow function, function declaration, or function expression
const jsx = <tag>Content</tag>

const ComponentName = () => {
  return jsx
}
```

### Method 1

The following expression is a JSX element:

```jsx
const App = () => {
  const header = (
    <header>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )

  return header
}
```

### Method 2

We can also return the JSX directly:

```jsx
const App = () => {
  return (
    <header style={headerStyles}>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )
}
```

### Method 3

The above code can also be written like this:

```jsx
const App = () => (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)
```

## Rendering Components

Rendering a component means displaying a React component on the screen. When React takes your component (JSX/code), converts it into actual HTML, and shows it in the browser, that is called rendering.

### Types of Rendering

1. Initial rendering: the first time a component appears on the screen
2. Re-rendering: when data or state changes and the UI updates again

We will discuss this more in the coming days.

## How to Use Multiple Components in One Component, and Export and Import Them

### Create Multiple Components and Export Them

```jsx
import React from 'react'

function Header() {
  return <h1>Component Header</h1>
}

function Main() {
  return <h1>Component Main</h1>
}

function Footer() {
  return <h1>Component Footer</h1>
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

// Export main component
export default App

// Export other components (named exports)
export { Header, Main, Footer }
```

### Importing Those Multiple Components

```jsx
import App, { Header, Main, Footer } from './App'
```

## Injecting Data into JSX in a React Component

```jsx
function Header() {
  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const firstName = 'Aditya'
  const lastName = 'Rao'
  const date = 'March 25, 2026'

  return (
    <div>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {firstName} {lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  )
}
```

## Further on Functional Components

Let us create more components. What is the smallest size of a component? A component that returns only a single HTML element as JSX is considered a small component. A button component, an alert box component, or even just an input field component can all be small components.

## Creating and Using Components in React

```jsx
const App = () => {
  const buttonStyles = {
    padding: '10px 20px',
    background: 'rgb(0, 255, 0)',
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
```

- Components can be created inside another component and used like `<Button />`.
- JSX elements should not be wrapped inside `{}` unless you are using JavaScript expressions.
- Always ensure correct syntax, such as closing brackets in style objects, to avoid errors.

## Interview Questions

1. What is the difference between a regular function and an arrow function?
2. What is a React component?
3. How do you make a React functional component?
4. What is the difference between a pure JavaScript function and a functional component?
5. How small can a React component be?
6. Can we make a button or input field component?
7. Make a reusable Button component.
8. Make a reusable InputField component.
9. Make a reusable alert box component with one `div` parent element and one `p` child element inside the `div` (warning alert box, success alert box).
