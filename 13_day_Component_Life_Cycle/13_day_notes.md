# Component Life Cycle

The React component life cycle describes the different stages a class component goes through from creation to removal.

The three main phases are:

1. Mounting
2. Updating
3. Unmounting

You can think of it like this:

- Mounting: the component is created and added to the DOM.
- Updating: the component re-renders because props or state changed.
- Unmounting: the component is removed from the DOM.

## 1. Mounting

Mounting happens when a component is rendered for the first time.

For a class component, these lifecycle methods run in this order:

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

## Example: Mounting Order

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('I am the constructor and I run first.')

    this.state = {
      firstName: 'Aditya',
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('I am getDerivedStateFromProps and I run second.')
    return null
  }

  componentDidMount() {
    console.log('I am componentDidMount and I run last.')
  }

  render() {
    console.log('I am render and I run third.')

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}

export default App
```

### `constructor()`

The `constructor()` method runs before any other lifecycle method when the component is created.

We usually use it to:

- initialize state
- bind methods if needed
- do one-time setup for the class instance

In modern React class components, you can also define state outside the constructor using class fields.

```jsx
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>The constructor runs first</h2>
        <p>Author: {this.state.firstName}</p>
      </div>
    )
  }
}

export default App
```

### `getDerivedStateFromProps()`

`getDerivedStateFromProps()` is a static method. It runs right before rendering, both during mounting and updating.

It is used when state needs to be derived from props.

```jsx
import React from 'react'

const User = ({ firstName }) => {
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.firstName && props.firstName !== state.firstName) {
      return { firstName: props.firstName }
    }

    return null
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <User firstName={this.state.firstName} />
      </div>
    )
  }
}

export default App
```

### `render()`

The `render()` method is required in every class component. It returns the JSX that should appear in the UI.

`render()` should stay pure:

- do not call `setState()` inside `render()`
- do not trigger side effects inside `render()`

```jsx
import React, { Component } from 'react'

class App extends Component {
  state = {
    firstName: 'John',
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h3>Render Method</h3>
        <p>{this.state.firstName}</p>
      </div>
    )
  }
}

export default App
```

### `componentDidMount()`

`componentDidMount()` runs once after the component has been rendered into the DOM.

This is a common place for:

- API calls
- timers
- subscriptions
- event listeners

```jsx
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'John',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        firstName: 'Asabeneh',
      })
    }, 3000)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>componentDidMount Method</h2>
        <p>{this.state.firstName}</p>
      </div>
    )
  }
}

export default App
```

## Example: Fetching Data in `componentDidMount()`

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
      data: [],
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
          loading: false,
        })
      })
      .catch(() => {
        this.setState({
          error: 'Failed to fetch data',
          loading: false,
        })
      })
  }

  render() {
    const { firstName, data, loading, error } = this.state

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>Hey {firstName}</h2>
        <p>There are {data.length} countries in the API.</p>

        <div className='countries-wrapper'>
          {data.map((country) => (
            <div key={country.name.common}>
              <img
                src={country.flags.png}
                alt={country.name.common}
                width='100'
              />
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital?.[0]}</p>
              <p>Population: {country.population}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
```

Sometimes it is cleaner to move the UI rendering into a helper method.

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
      data: [],
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
          loading: false,
        })
      })
      .catch(() => {
        this.setState({
          error: 'Failed to fetch data',
          loading: false,
        })
      })
  }

  renderCountries = () => {
    const { data } = this.state

    return (
      <>
        <p>There are {data.length} countries in the API.</p>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <div key={country.name.common}>
              <img
                src={country.flags.png}
                alt={country.name.common}
                width='100'
              />
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital?.[0]}</p>
              <p>Population: {country.population}</p>
            </div>
          ))}
        </div>
      </>
    )
  }

  render() {
    const { firstName, loading, error } = this.state

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>Hey {firstName}</h2>
        {this.renderCountries()}
      </div>
    )
  }
}

export default App
```

## 2. Updating

After a component has mounted, it can update when its props or state change.

These lifecycle methods are commonly associated with the updating phase:

1. `static getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

### `shouldComponentUpdate()`

`shouldComponentUpdate()` decides whether a component should re-render. It must return `true` or `false`.

- `true`: the component updates
- `false`: the component does not update

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
      data: [],
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return true
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}

export default App
```

Here is a practical example where updates stop after day 31:

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
      day: 1,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.day > 31) {
      return false
    }

    return true
  }

  doChallenge = () => {
    this.setState((prevState) => ({
      day: prevState.day + 1,
    }))
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
      </div>
    )
  }
}

export default App
```

### `componentDidUpdate()`

`componentDidUpdate(prevProps, prevState)` runs after the component updates in the DOM.

It is useful for:

- reacting to prop or state changes
- running side effects after updates
- comparing current values with previous values

```jsx
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'John',
      data: [],
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}

export default App
```

Here is an example using both `shouldComponentUpdate()` and `componentDidUpdate()` together:

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Aditya',
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.day > 31) {
      return false
    }

    return true
  }

  doChallenge = () => {
    this.setState((prevState) => ({
      day: prevState.day + 1,
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.day === 31 && prevState.day !== 31) {
      this.setState({
        congratulate: 'Congratulations, challenge has been completed.',
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

export default App
```

### `getSnapshotBeforeUpdate()`

`getSnapshotBeforeUpdate(prevProps, prevState)` is called right before the updated content is committed to the DOM.

It is rarely used, but it can help capture information from the DOM before it changes, such as scroll position.

```jsx
import React from 'react'

class App extends React.Component {
  listRef = React.createRef()

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.listRef.current.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Previous scroll height:', snapshot)
  }

  render() {
    return (
      <div ref={this.listRef}>
        <h1>Snapshot Example</h1>
      </div>
    )
  }
}

export default App
```

## 3. Unmounting

Unmounting is the final phase in the component lifecycle. It happens when a component is removed from the DOM.

The main lifecycle method in this phase is:

- `componentWillUnmount()`

### `componentWillUnmount()`

`componentWillUnmount()` is called just before a component is removed from the DOM.

It is used for cleanup such as:

- clearing timers
- removing event listeners
- cancelling subscriptions

Important rule:

- Do not call `setState()` inside `componentWillUnmount()`
- Use it only for cleanup

### Clear a Timer

```jsx
componentDidMount() {
  this.timer = setInterval(() => {
    console.log('Running...')
  }, 1000)
}

componentWillUnmount() {
  clearInterval(this.timer)
}
```

### Remove an Event Listener

```jsx
componentDidMount() {
  window.addEventListener('resize', this.handleResize)
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize)
}
```

### Cleanup Before Leaving

```jsx
componentWillUnmount() {
  console.log('Cleanup API or subscriptions')
}
```

## Example: `componentWillUnmount()`

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      day: 1,
      congratulate: '',
      showChild: true,
    }
  }

  doChallenge = () => {
    this.setState((prevState) => {
      const nextDay = prevState.day + 1

      return {
        day: nextDay,
        congratulate:
          nextDay === 31
            ? 'Congratulations, challenge completed.'
            : prevState.congratulate,
      }
    })
  }

  toggleChild = () => {
    this.setState((prevState) => ({
      showChild: !prevState.showChild,
    }))
  }

  render() {
    const { congratulate, day, showChild } = this.state

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <button onClick={this.toggleChild}>
          {showChild ? 'Hide Message' : 'Show Message'}
        </button>
        <p>Challenge: Day {day}</p>

        {showChild && day === 31 && <Child congratulate={congratulate} />}
      </div>
    )
  }
}

class Child extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      console.log('Running...')
    }, 5000)
  }

  componentWillUnmount() {
    console.log('Child component unmounted')
    clearTimeout(this.timer)
  }

  render() {
    return <h2>{this.props.congratulate}</h2>
  }
}

export default App
```

## Real-World Example

```jsx
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0,
      data: [],
      loading: false,
      showModal: false,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  fetchUsers = () => {
    this.setState({ loading: true })

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
          loading: false,
        })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    const { seconds, data, loading, showModal } = this.state

    return (
      <div className='App'>
        <h1>React Lifecycle Real Project</h1>
        <h2>Timer: {seconds}s</h2>

        <button onClick={this.fetchUsers}>Fetch Users</button>
        {loading && <p>Loading...</p>}

        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}

        <button onClick={this.toggleModal}>
          {showModal ? 'Close Modal' : 'Open Modal'}
        </button>

        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    )
  }
}

class Modal extends React.Component {
  componentDidMount() {
    console.log('Modal opened')
    window.addEventListener('keydown', this.handleEsc)
  }

  componentWillUnmount() {
    console.log('Modal closed')
    window.removeEventListener('keydown', this.handleEsc)
  }

  handleEsc = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose()
    }
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: '#fff',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h2>Modal Content</h2>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default App
```

## Notes

- Lifecycle methods apply to class components.
- In function components, similar behavior is usually handled with hooks such as `useEffect`.
- `componentDidMount()` is commonly used for fetching data and starting subscriptions.
- `componentDidUpdate()` is useful when you need to react to changes after a render.
- `componentWillUnmount()` is important for cleanup to avoid memory leaks.
- `render()` should stay pure and should not contain side effects.

## Exercises

1. What is a component life cycle?
2. What is the purpose of lifecycle methods?
3. What are the three stages of a component life cycle?
4. What does mounting mean?
5. What does updating mean?
6. What does unmounting mean?
7. What is the most common built-in mounting lifecycle method?
8. What are the mounting lifecycle methods?
9. What are the updating lifecycle methods?
10. What is the unmounting lifecycle method?
