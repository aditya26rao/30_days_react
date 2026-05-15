# Introducing React Hook

In the previous, section you have learned how to use React with hooks which is the older version. Currently, hooks has been introduced to React.

Hooks are a new addition in React 16.8. They allow you use state, life cycle methods and other React features without writing a class component. If we are using hooks we can have only a functional component in the entire application

Different hooks have been introduced to React:Basic hooks and additional hooks

### Basic Hooks
useState
useEffect
useContext
### Additional Hooks
useRef
useReducer
useMemo
useCallback
useLayoutEffect
useImperativeHandle
useDebugValue

## 1) State Hook :-

Using hooks we can access state without writing a class based component. Let's use the same example we used for class based components on day 8.

To use hooks, first we should import the useState hooks from react. The useState is a function which takes one argument and returns a current state and functions that lets you update it.

```jsx
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    if(count <= 0){
      setCount(0)
    }else{
      setCount(count - 1)
    }
  }

  return (
    <div className='app'>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Add One</button>
      <button onClick={handleSubtract}>Subtract One</button>
    </div>
  )
}

export default App

Let us do more example about state, in the following example we will develop small application which shows either a dog or cat. We can start by setting the initial state with cat then when it is clicked it will show dog and alternatively. We need one method which changes the animal alternatively. See the code below.

```jsx
import React, { useState } from 'react'

const App = () => {
const url =  'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

const [image,setImage] = useState(url)

const changeAnimal = () => {
   let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

      let result = image === catURL ? dogURL : catURL;
      setImage(result)
}

  return (
    <div className='app'>
      <h1>30 Days of React</h1>
      <div className='animal'>
        <img src={image} />
      </div>
      <button onClick={changeAnimal}>
        Change 
      </button>
    </div>
  )
}

export default App

Now, let's put all the codes we have so far and also let's implement state using the useState hooks when it is necessary.

```jsx
import React, { useState } from 'react'

const showDate = (time) => {
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

  return `${month} ${date}, ${year}`
}

const UserCard = ({ user: { firstName, lastName } }) => (
  <div className="user-card">
    <h2>
      {firstName} {lastName}
    </h2>
  </div>
)

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

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

const Header = ({ data, styles }) => {
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data

  return (
    <header style={styles}>
      <div className="header-wrapper">
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count}</h1>

    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

const TechList = ({ techs }) => {
  return techs.map((tech) => <li key={tech}>{tech}</li>)
}

const Main = ({
  techs,
  user,
  greetPeople,
  handleTime,
  changeBackground,
  count,
  addOne,
  minusOne,
}) => {
  return (
    <main>
      <div className="main-wrapper">
        <p>Prerequisites to get started React.js</p>

        <ul>
          <TechList techs={techs} />
        </ul>

        <UserCard user={user} />

        <Button
          text="Greet People"
          onClick={greetPeople}
          style={buttonStyles}
        />

        <Button
          text="Show Time"
          onClick={handleTime}
          style={buttonStyles}
        />

        <Button
          text="Change Background"
          onClick={changeBackground}
          style={buttonStyles}
        />

        <Count
          count={count}
          addOne={addOne}
          minusOne={minusOne}
        />
      </div>
    </main>
  )
}

const Footer = ({ date }) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
  )
}

const App = () => {
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const addOne = () => {
    setCount(count + 1)
  }

  const minusOne = () => {
    setCount(count - 1)
  }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  const changeBackground = () => {
    const colors = [
      '#f87171',
      '#60a5fa',
      '#34d399',
      '#fbbf24',
      '#a78bfa',
      '#fb7185',
    ]

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)]

    setBackgroundColor(randomColor)
  }

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Aditya',
      lastName: 'Rao',
    },
    date: 'May 15, 2026',
  }

  const techs = ['HTML', 'CSS', 'JavaScript']

  const user = {
    firstName: 'Aditya',
    lastName: 'Rao',
  }

  return (
    <div
      className="app"
      style={{
        backgroundColor,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Header data={data} />

      <Main
        techs={techs}
        user={user}
        handleTime={handleTime}
        greetPeople={greetPeople}
        changeBackground={changeBackground}
        addOne={addOne}
        minusOne={minusOne}
        count={count}
      />

      <Footer date={new Date()} />
    </div>
  )
}

export default App

