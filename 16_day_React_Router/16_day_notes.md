# React Router

## What is React Router?

React Router is a routing library for React. It lets us navigate between different components without refreshing the browser page.

React applications are usually single page applications. This means the browser loads one `index.html` file, and React decides which component should be shown for the current URL.

Install React Router DOM with:

```bash
npm install react-router-dom
```

For React Router v6 and v7, the commonly used imports are:

```jsx
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  Outlet,
  useNavigate,
  useParams,
} from 'react-router-dom'
```

Older tutorials may mention `Switch`, `Redirect`, `Prompt`, or `withRouter`. Those belong to React Router v5. In React Router v6 and newer:

- `Switch` was replaced by `Routes`
- `Redirect` was replaced by `Navigate`
- `Prompt` was removed
- `withRouter` was replaced by hooks such as `useNavigate`, `useParams`, and `useLocation`

## 1. BrowserRouter

`BrowserRouter` is the parent router component. It wraps the routes of the application and lets React Router use the browser URL and history.

Example:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## `element` vs `Component`

In React Router v6 and v7, a route can render a component using `element` or `Component`.

`element` accepts JSX:

```jsx
<Route path='/' element={<Home name='Aditya' />} />
```

`Component` accepts a component reference:

```jsx
<Route path='/' Component={Home} />
```

Use `element` when you want to pass props directly:

```jsx
<Route path='/profile' element={<Profile username='aditya' />} />
```

You cannot pass props directly like this with `Component`:

```jsx
<Route path='/profile' Component={Profile} />
```

## 2. NavLink

`NavLink` is used to create navigation links. It works like an anchor tag, but it does not refresh the page.

`NavLink` also adds an `active` class automatically when the link matches the current URL.

Example:

```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/services'>Services</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## Route Not Found

If the user opens a URL that does not match any route, we can show a not found page using `path='*'`.

```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'

const NotFound = () => <h1>The page you are looking for was not found.</h1>

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/services'>Services</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## 3. Navigate

`Navigate` is used to redirect automatically from one route to another.

Syntax:

```jsx
import { Navigate } from 'react-router-dom'

<Navigate to='/home' />
```

Example:

```jsx
import { Navigate } from 'react-router-dom'

const Login = ({ isAuth }) => {
  if (isAuth) {
    return <Navigate to='/dashboard' />
  }

  return <h2>Please Login</h2>
}
```

## 4. Nested Routing

Nested routes let one route render child routes inside it.

`Outlet` is used to show the child route component.

```jsx
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'

const Home = () => <h2>Home Page</h2>
const About = () => <h2>About Page</h2>
const Contact = () => <h2>Contact Page</h2>

const Challenges = () => {
  return (
    <div>
      <h2>Challenges</h2>

      <ul>
        <li>
          <NavLink to='python'>Python</NavLink>
        </li>
        <li>
          <NavLink to='react'>React</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

const Python = () => <h3>30 Days of Python</h3>
const ReactChallenge = () => <h3>30 Days of React</h3>
const NotFound = () => <h3>404 Page Not Found</h3>

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/challenges'>Challenges</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/challenges' element={<Challenges />}>
          <Route path='python' element={<Python />} />
          <Route path='react' element={<ReactChallenge />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## 5. useNavigate

`useNavigate` returns a `navigate` function. We use it when navigation should happen after an event.

Common use cases:

- Button click
- Form submit
- API success response
- Logout

Syntax:

```jsx
const navigate = useNavigate()
```

Example:

```jsx
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return <button onClick={handleLogin}>Login</button>
}
```

Example with confirmation:

```jsx
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

const FormPage = () => {
  const navigate = useNavigate()

  const handleLeave = () => {
    const confirmLeave = window.confirm('Are you sure you want to leave?')

    if (confirmLeave) {
      navigate('/')
    }
  }

  return (
    <>
      <h2>Form page</h2>
      <button onClick={handleLeave}>Leave Page</button>
    </>
  )
}

const Home = () => <h2>Home page</h2>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## 6. Prompt

`Prompt` was used in React Router v5 to warn users before leaving a page.

Example from React Router v5:

```jsx
<Prompt
  when={true}
  message='Are you sure you want to leave?'
/>
```

In React Router v6 and newer, `Prompt` is not available. For simple cases, use `window.confirm` with `useNavigate`, as shown above.

## Real Time Example of React Router DOM

```jsx
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  useParams,
  useNavigate,
} from 'react-router-dom'

const Home = () => <h2>Welcome Home</h2>
const About = () => <h2>About Us</h2>
const Contact = () => <h2>Contact Us</h2>

const challenges = [
  {
    name: '30 Days Of Python',
    slug: 'python',
    description: 'Learn Python in 30 days',
  },
  {
    name: '30 Days Of React',
    slug: 'react',
    description: 'Learn React in 30 days',
  },
]

const Challenge = () => {
  const { slug } = useParams()
  const challenge = challenges.find((item) => item.slug === slug)

  if (!challenge) {
    return <h2>Challenge Not Found</h2>
  }

  return (
    <div>
      <h2>{challenge.name}</h2>
      <p>{challenge.description}</p>
    </div>
  )
}

const Challenges = () => {
  return (
    <div>
      <h2>Challenges</h2>

      <ul>
        {challenges.map((item) => (
          <li key={item.slug}>
            <NavLink to={`/challenges/${item.slug}`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=':slug' element={<Challenge />} />
      </Routes>
    </div>
  )
}

const User = ({ isLoggedIn, handleLogin }) => {
  const { username } = useParams()

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome {username}</h2>
          <p>You can access challenges now.</p>
        </>
      ) : (
        <p>Please login to access challenges.</p>
      )}

      <button onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

const Login = ({ isLoggedIn, handleLogin }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    handleLogin()
    navigate('/challenges')
  }

  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back</h2> : <p>Please Login</p>}

      <button onClick={handleClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/user/aditya'>User</NavLink>
      </li>
      <li>
        <NavLink to='/challenges'>Challenges</NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
    </ul>
  )
}

const NotFound = () => <h2>404 Page Not Found</h2>

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn((currentStatus) => !currentStatus)
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route
          path='/user/:username'
          element={
            <User
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
            />
          }
        />

        <Route
          path='/login'
          element={
            <Login
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
            />
          }
        />

        <Route
          path='/challenges/*'
          element={
            isLoggedIn
              ? <Challenges />
              : <Navigate to='/user/aditya' />
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

## Exercises

1. What package do you use to implement routing in React?

`react-router-dom`

2. What is the default export in `react-router-dom`?

In React Router v6 and newer, `react-router-dom` does not have a default export. We use named exports:

```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
```

3. What is the use of `Route`, `NavLink`, `Switch`, `Redirect`, and `Prompt`?

`Route` renders a component for a matching URL path.

`NavLink` creates navigation links and adds an active state when the current URL matches.

`Switch` was used in React Router v5 to render the first matching route. In v6 and newer, use `Routes`.

`Redirect` was used in React Router v5 to redirect users. In v6 and newer, use `Navigate`.

`Prompt` was used in React Router v5 to warn users before leaving a page. It is not available in v6 and newer.
