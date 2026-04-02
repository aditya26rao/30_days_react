import { Component } from 'react'
import TechList from './TechList'

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
)

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)

const Welcome = () => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

class Main extends Component {
  render() {
    const { techs, greetPeople, handleTime, loggedIn, handleLogin, message } =
      this.props

    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started with React.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started with React.</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about the 30 Days Of
                React challenge.
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {loggedIn ? <Welcome /> : <Login />}
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

export default Main
