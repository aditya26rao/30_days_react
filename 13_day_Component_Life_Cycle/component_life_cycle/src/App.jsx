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
    this.setState({
      day: this.state.day + 1
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.day === 31 && prevState.day !== 31) {
      this.setState({
        congratulate: '🎉 Congratulations, Challenge completed'
      })
    }
  }

  render() {
    const { congratulate, day } = this.state

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>

        <button onClick={this.doChallenge}>
          Do Challenge
        </button>

        <p>Challenge: Day {day}</p>

        {day === 31 && (
          <Child congratulate={congratulate} />
        )}
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
    console.log('Unmounted')
    clearTimeout(this.timer)  // ✅ cleanup
  }

  render() {
    return <h2>{this.props.congratulate}</h2>
  }
}

export default App