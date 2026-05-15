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