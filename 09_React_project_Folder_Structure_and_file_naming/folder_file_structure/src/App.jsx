import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
  state = {
    loggedIn: false,
    message: 'Click Show Time or Greet People to change me',
  }

  handleLogin = () => {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn,
    }))
  }

  showDate = (time) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const month = months[time.getMonth()]
    const year = time.getFullYear()
    const date = time.getDate()

    return `${month} ${date}, ${year}`
  }

  handleTime = () => {
    this.setState({ message: this.showDate(new Date()) })
  }

  greetPeople = () => {
    this.setState({
      message: 'Welcome to 30 Days Of React Challenge, 2020',
    })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Aditya',
        lastName: 'Rao',
      },
      date: 'April 2, 2026',
    }

    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
      <div className='app'>
        <Header data={data} />
        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

export default App
