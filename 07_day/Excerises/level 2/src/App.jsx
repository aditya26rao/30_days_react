import React, { Component } from 'react'

class Header extends Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{date}</small>
        <br />
        <button onClick={this.props.changeBg}>Change Bg</button>
      </div>
    )
  }
}

export default class App extends Component {

  // ✅ ADD STATE
  state = {
    styles: {
      backgroundColor: '#ffffff',
      color: '#000000',
      height: '100vh',
      textAlign: 'center',
      paddingTop: '50px'
    }
  }

  // ✅ FUNCTION
  changeBg = () => {
    const randomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16)

    this.setState({
      styles: {
        ...this.state.styles,
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

    return (
      // ✅ APPLY STYLE HERE
      <div style={this.state.styles}>
        <Header data={data} changeBg={this.changeBg} />
      </div>
    )
  }
}