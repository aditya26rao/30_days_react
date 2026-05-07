import React, { Component } from 'react'
import moment from 'moment'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>How to use moment</h1>
        <p>This challenge was started {moment('2026-04-22').fromNow()}</p>
        <p>The challenge will be over in {moment('2026-05-08').fromNow()}</p>
        <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
      </div>
    )
  }
}

export default App