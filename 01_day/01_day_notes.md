# Day 01 Notes

## What Is React?

React is a JavaScript library for building user interfaces, especially single page applications (SPAs).

- React was initially released by Facebook in May 2013.
- React helps us build reusable UI components.
- In React, we usually do not update the DOM directly.
- React uses a Virtual DOM to detect changes and update only the parts that need to change.

## Why React?

React is one of the most popular JavaScript libraries and has been widely used by companies for years.

- Fast
- Modular
- Scalable
- Flexible
- Big community
- Open source
- High job opportunity

## JSX

JSX stands for **JavaScript XML**.

- It allows us to write HTML-like syntax inside JavaScript.
- Instead of using `createElement()` manually, we can write JSX elements directly.
- JSX is converted to JavaScript using a transpiler like Babel.
- Babel can also convert modern JavaScript into older JavaScript versions for browser compatibility.

### JSX Syntax

```jsx
// JSX syntax
// we don't need to use quotes with JSX

const jsxElement = <h1>I am a JSX element</h1>
const welcome = <h1>Welcome to 30 Days of React Challenge</h1>
const data = <small>Oct 2, 2020</small>

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
)
```

## Comments In JSX

Comments are similar to JavaScript comments:

- `//`
- `/* */`

## Rendering A JSX Element

We can use React through:

- `npm`
- CDN links

### Example: Rendering a Single JSX Element

```html
<div class="root"></div>
<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
  console.log(React)

  // to get the root element from the HTML document
  const rootElement = document.querySelector('.root')

  // JSX element
  const jsxElement = <h1>I am a JSX element</h1>

  // JSX element using whole tags
  const header = (
    <header>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 2, 2020</small>
    </header>
  )

  // we render the JSX element using the ReactDOM package
  ReactDOM.render(jsxElement, rootElement)
</script>
```

### Example: Rendering Multiple JSX Elements

```jsx
<script type="text/babel">
  // To get the root element from the HTML document
  const rootElement = document.querySelector('.root')

  // JSX element
  const header = (
    <header>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>B Aditya Rao</p>
      <small>Mar 25, 2026</small>
    </header>
  )

  const main = (
    <main>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </main>
  )

  const footer = (
    <footer>
      <p>Copyright 2026</p>
    </footer>
  )

  // JSX element, app, a container or a parent
  const app = (
    <div>
      {header}
      {main}
      {footer}
    </div>
  )

  // we render the JSX element using the ReactDOM package
  // ReactDOM has the render method and the render method takes two arguments
  ReactDOM.render(app, rootElement)
</script>
```

## Style And `className` In JSX

We can style JSX in different ways, such as internal CSS, external CSS, or inline styles.

### Example

```jsx
const header = (
  <header
    style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
  >
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)
```

Or:

```jsx
const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }

const header = (
  <header style={style}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)
```

## Injecting Data Into A JSX Element

We can inject:

- strings
- numbers
- arrays
- expressions

We cannot directly inject an object into JSX. We should first extract the values from the object or destructure it.

### Example

```jsx
<script type="text/babel">
  // To get the root element from the HTML document
  const rootElement = document.querySelector('.root')

  // JSX element, header
  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
  }
  const date = 'Oct 2, 2020'

  // JSX element, header
  const header = (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {author.firstName} {author.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  )

  const numOne = 3
  const numTwo = 2

  const result = (
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  )

  const yearBorn = 1820
  const currentYear = new Date().getFullYear()
  const age = currentYear - yearBorn

  const personAge = (
    <p>
      {author.firstName} {author.lastName} is {age} years old
    </p>
  )

  // JSX element, main
  const techs = ['HTML', 'CSS', 'JavaScript']

  const main = (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started <strong><em>react.js</em></strong>:
        </p>
        <ul>{techs}</ul>
        {result}
        {personAge}
      </div>
    </main>
  )

  const copyRight = 'Copyright 2020'

  // JSX element, footer
  const footer = (
    <footer>
      <div className='footer-wrapper'>
        <p>{copyRight}</p>
      </div>
    </footer>
  )

  // JSX element, app
  const app = (
    <div className='app'>
      {header}
      {main}
      {footer}
    </div>
  )

  // we render the JSX element using the ReactDOM package
  ReactDOM.render(app, rootElement)
</script>
```

## Using Array Methods In JSX

If we directly inject an array in JSX, it may appear on one line. To render each value as its own element, we can use array methods like `map()`.

### Example

```jsx
// JSX element, main
const techs = ['HTML ', 'CSS ', 'JavaScript ']

const techSingleElement = techs.map((item) => {
  <li>{item}</li>
})
```

## Exercises

### What Is React?

- What is React?
- What is a library?
- What is a single page application?
- What is a component?
- What is the latest version of React?
- What is DOM?
- What is React Virtual DOM?
- What does a web application or a website have?

### Why React?

- Why did you choose to use React?
- What measures do you use to know popularity?
- What is more popular, React or Vue?

### JSX

- What is an HTML element?
- How do you write a self-closing HTML element?
- What is an HTML attribute? Write some of them.
- What is JSX?
- What is Babel?
- What is a transpiler?

### JSX Elements

- What is a JSX element?
- Write your name in a JSX element and store it in a `name` variable.
- Write a JSX element which displays your full name, country, title, gender, email, and phone number.
- Use `h1` for the name and `p` for the rest of the information, and store it in a `user` variable.
- Write a footer JSX element.

### Inline Style

- Create a style object for the main JSX.
- Create a style object for the footer and app JSX.
- Add more styles to the JSX elements.

### Internal Styles

- Apply different styles to your JSX elements.

### Inject Data To JSX

- Practice making JSX elements and injecting dynamic data such as string, number, boolean, array, and object values.

## Congratulations

Congratulations!
