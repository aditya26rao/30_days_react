import React, { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  useParams,
  useNavigate
} from 'react-router-dom'

// Home
const Home = () => <h2>Welcome Home</h2>

// About
const About = () => <h2>About Us</h2>

// Contact
const Contact = () => <h2>Contact Us</h2>

// Challenges Data
const challenges = [
  {
    name: '30 Days Of Python',
    slug: 'python',
    description: 'Learn Python in 30 days'
  },
  {
    name: '30 Days Of React',
    slug: 'react',
    description: 'Learn React in 30 days'
  }
]

// Challenge Details
const Challenge = () => {

  const { slug } = useParams()

  const challenge = challenges.find(
    (item) => item.slug === slug
  )

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

// Challenges Page
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
        <Route
          path=':slug'
          element={<Challenge />}
        />
      </Routes>

    </div>
  )
}

// User Page
const User = ({ isLoggedIn, handleLogin }) => {

  const { username } = useParams()

  return (
    <div>

      {
        isLoggedIn ? (
          <>
            <h2>Welcome {username}</h2>
            <p>You can access challenges now</p>
          </>
        ) : (
          <p>Please login to access challenges</p>
        )
      }

      <button onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

    </div>
  )
}

// Login Page
const Login = ({ isLoggedIn, handleLogin }) => {

  const navigate = useNavigate()

  const handleClick = () => {

    handleLogin()

    navigate('/challenges')
  }

  return (
    <div>

      {
        isLoggedIn
          ? <h2>Welcome Back</h2>
          : <p>Please Login</p>
      }

      <button onClick={handleClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

    </div>
  )
}

// Navbar
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

// Not Found
const NotFound = () => <h2>404 Page Not Found</h2>

// App
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
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
