# States

## What Is State?

What is state? The English meaning of state is the particular condition that someone or something is in at a specific time.

Let us see some examples of state. Are you happy or sad? Is the light on or off? Is something present or absent? Is it full or empty? For instance, I am happy because I am enjoying creating the 30 Days Of React challenge. I believe that you are happy too.

State is an object in React that lets a component re-render when state data changes.

### How to Set State

We can use state in both class-based components and function-based components.

1. Class Component:

We set an initial state inside the constructor or outside the constructor of a class-based component. We do not directly change or mutate the state, but we use the `setState()` method to update it to a new state.

```jsx
import React from "react";

class App extends React.Component{
  // declaring state
  state = {
    count: 0,
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>
      </div>
    )
  }
}

export default App
```

If you run the above code, you will see zero in the browser. We can increase or decrease the value of the state by changing it using a JavaScript method.

2. Function Component:
We set an initial state inside a function-based component using the `useState` hook. We do not directly change or mutate the state, but we use the state updater function to update it to a new state.

```jsx
import React, { useState } from "react";

const App = () => {
  // declaring state
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* accessing the state value */}
      <h1>{count}</h1>
    </div>
  );
};

export default App;
```
If you run the above code, you will see zero in the browser. We can increase or decrease the value of the state by updating it using the setter function.

## Resetting a state using a JavaScript method
Let's add some methods that increase or decrease the value of `count` by clicking a button.

1. In Class Component:

```jsx
import React from 'react'

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add One
        </button>
      </div>
    )
  }
}
export default App
```

2. In Function Component:

```jsx
import React, { useState } from "react";

const App = () => {
  // declaring state
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* accessing the state value */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;
```

If you understand the above example, adding minus one method will be easy. Let us add the minus one method on the click event.

In Class Component:
```jsx
import React from 'react'

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>

        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Add One
          </button>{' '}
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Minus One
          </button>
        </div>
      </div>
    )
  }
}
export default App
```

In Function Component:
```jsx
import React, { useState } from "react";

const App = () => {
  // declaring state
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* accessing the state value */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default App;
```


## Anyway, We Are Going to Learn State Hooks in Function Components

Both buttons work well, but we need to restructure the code properly. Let us create separate methods in the component.

```jsx
import React from "react";

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  // method which add one to the state

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>

        <div>
          <button className='btn btn-add' onClick={this.addOne}>
            +1
          </button>{' '}
          <button className='btn btn-minus' onClick={this.minusOne}>
            -1
          </button>
        </div>
      </div>
    )
  }
}

export default App
```

### Examples on State

Let us do one more example about state. In the following example, we will develop a small application that shows either a dog or a cat. We can start by setting the initial state to cat, then when it is clicked it will show dog, alternating between the two.

```jsx
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
  }

  changeAnimal = () => {
    let dogUrl =
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400'

    let catURL =
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400'

    let image = this.state.image === catURL ? dogUrl : catURL

    this.setState({ image })
  }

  render() {
    return (
      <div className="App">
        <h1>30 Days of React</h1>

        <div className="animal">
          <img
            src={this.state.image}
            alt="animal"
            style={{ width: '200px', borderRadius: '10px' }}
          />
        </div>

        <button onClick={this.changeAnimal} className="btn btn-add">
          Change
        </button>
      </div>
    )
  }
}
```


Now, let's put together all the code we have so far and also implement state where it is necessary.

```jsx

import React from 'react'

// Function to show date
const showDate = (time) => {
  const months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// User Card Component
const UserCard = ({ user: { firstName, lastName } }) => (
  <div className='user-card'>
    <h2>{firstName} {lastName}</h2>
  </div>
)

// Button Component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// Button Styles
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

// Header Component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

// Counter Component
const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>
    <Button text='+1' onClick={addOne} style={buttonStyles} />
    <Button text='-1' onClick={minusOne} style={buttonStyles} />
  </div>
)

// Tech List
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    return (
      <>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </>
    )
  }
}

// Main Component
class Main extends React.Component {
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props

    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>

          <ul>
            <TechList techs={techs} />
          </ul>

          <UserCard user={user} />

          <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button text='Change Background' onClick={changeBackground} style={buttonStyles} />

          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer
class Footer extends React.Component {
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

// App Component
class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '#fff',
      color: '#000',
    },
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleTime = () => {
    alert(showDate(new Date()))
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }

  // 🔥 Fixed Background Change
  changeBackground = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

    this.setState({
      styles: {
        backgroundColor: randomColor,
        color: '#fff',
      },
    })
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

    const techs = ['HTML', 'CSS', 'JavaScript']
    const user = { ...data.author }

    return (
      <div className='app' style={this.state.styles}>
        <Header data={data} styles={this.state.styles} />

        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}

export default App
```

## Exercises:

1. What was your state today? Are you happy? I hope so. If you managed to make it this far, you should be happy.
2. What is state in React?
3. What is the difference between props and state in React?
4. How do you access state in a React component?
5. How do you set state in a React component?
