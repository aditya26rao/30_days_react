# Class Components

We will cover class components, also called stateful components. Only class-based components used to have state and lifecycle methods. However, after React version 16.8.0, functional components can also have state and lifecycle behavior using React Hooks. We will cover React before 16.8.0 and after, which means both the older and newer versions. There is a lot of code written in older versions, and at some point it may need migration. In addition, to understand React well, someone should understand class-based components too.

All the previous components are functional components. Let us also make a class-based component. A class-based component is made using a JavaScript class, and it inherits from `React.Component`. Let us learn how to make a class-based component by converting the functional components we made previously. It is not important to convert all of them, but we are converting them for the sake of learning how to change functional components into class components.

```jsx
// Pure JavaScript class and child
// Imagine this what we import from React package
class Component {
  constructor(props) {}
}

// This how we make class based components by inheriting from the parent
class Child extends Component {
  constructor(props) {
    super(props)
  }
}
```

Functional React Component

```jsx
// index.js

import React from 'react'
import ReactDOM from 'react-dom'
// Header Component
// Functional component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 6, 2020</small>
    </div>
  </header>
)
// if I am writing code in main.jsx, I need this
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)
```

Class based React component is a child of React.Component and it has a built-in render method and it may have a constructor.

```jsx
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}
// if I am writing code in main.jsx, I need this
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)
```

Let's see the above component with a constructor.

```jsx
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor runs before any other code
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}
// if I am writing code in main.jsx, I need this
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)
```

Let's change all the functional components to class-based components.

```jsx
// TechList Component
// functional component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// TechList Component
// class based component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Functional Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
    </div>
  </main>
)

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

// Footer Component
// Functional component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright 2020</p>
        </div>
      </footer>
    )
  }
}

// The App, or the parent or the container component
// Functional Component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

```

Let's put all the class-based components together in one file.

```jsx
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor runs before any other code
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}

// TechList Component
// class based component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright 2020</p>
        </div>
      </footer>
    )
  }
}

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

// if I am writing code in main.jsx, I need this
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Accessing props in Class components

We stated that props are a way to send data from one component to another, or we can say that props are a data carrier. Therefore, we should handle props in class-based components too. We can access the props of a class-based component using the keyword `this`.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
 // const { data } = this.props // instead of writing this.props every time
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>{this.props.data.author.firstName} {this.props.data.author.lastName}</h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Aditya',
        lastName: 'Rao',
      },
      date: 'April 1, 2026',
    }
    return (
      <div className="app" >
        <Header data={data} />
      </div>
    )
  }

}

export default App
```

As you can see in the above example, to get the data out from props we have to write `props.data` every time. We can avoid this repetition by using destructuring.

```jsx
// index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor runs before any other code
  }
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Oct 6, 2020',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}

export default App
```

## Methods in Class based component

We can access methods in a class-based component. Most of the time, we write different methods in the parent component and pass them to child components. Let's see the implementation.

Let's add a method on this component.

```jsx
import React from 'react'

class Header extends React.Component {
  greetPeople = () => {
    alert('Welcome to 30 days of React Challenge')
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    )
  }
}

export default Header
```

The invoking or calling of the method triggers when the event occurs. Therefore, whenever you pass a method to an event listener do not invoke the method.

Now, let's take the code we had and add all the necessary methods.

```jsx
import React from 'react'

class Header extends React.Component {
  // greetPeople = () => {
  //   alert('Welcome to 30 days of React Challenge')
  // } // if we use an arrow function, we do not need binding


  greetPeople() {
    alert("Hello")
  }
  constructor(props) {
    super(props)
    this.greetPeople = this.greetPeople.bind(this)
  }

  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    )
  }
}

export default Header
```

If I use an arrow function, I do not need binding. I can directly write:

```jsx
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
```

If we use a normal function, we need to bind the function using `bind`:

```jsx
greetPeople() {
  alert("Hello")
}
constructor(props) {
  super(props)
  this.greetPeople = this.greetPeople.bind(this)
}
```

The invoking or calling of the method triggers when the event occurs. Therefore, whenever you pass a method to an event listener do not invoke the method.

Now, let's take the code we had and add all the necessary methods.

```jsx

import React from "react";

const UserCard = ({ user: { firstName, lastName } }) => {
  return (
    <div className="user-card">
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  )
}

const Button = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={this.props.techs} />
        </ul>
        <UserCard user={this.props.user} />
        <Button text='Greet People'
          onClick={this.props.greetPeople}
          style={buttonStyles} />
        <Button
          text='Show Time'
          onClick={this.props.handleTime}
          style={buttonStyles}
        />
      </div>
    )
  }
}

// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }

  handleTime = () => {
    alert(this.showDate(new Date()))
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Aditya',
        lastName: 'Rao',
      },
      date: 'Apr 1, 2026',
    }
    const techs = ['HTML', 'CSS', 'JavaScript','React','Node','Express','MongoDB']

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author }

    return (
      <div className='app'>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}


export default App
```

Most of the time, the container or parent component can be written as a class component, and the others can be functional or presentational components. Data usually flows from parent components to child components, and it is unidirectional. However, the latest version of React allows us to write every component in our application using only functional components. This was impossible in previous versions. In the next section, we will cover state, which is the heart of React. State allows a React component to re-render whenever there is a change in state.

Exercises:
1. How do you write a pure JavaScript function?
2. What is inheritance and how do you make a child from a parent class?
3. What is a class-based React component?
4. What is the difference between a functional React component and a class-based React component?
5. When do we need to use class-based components instead of functional components?
6. What are the use cases of class-based components?
7. Which type of component do you use most frequently: functional or class-based?
8. What is the React lifecycle? (not covered yet)
9. What is state in React? (not covered yet)
