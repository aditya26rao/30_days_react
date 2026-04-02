import React, { Component } from 'react'

// Child Component
class Country extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>{this.props.country}</h1>
        <button onClick={this.props.changeCountry}>
          Change Country
        </button>
      </div>
    )
  }
}

// Parent Component
export default class App extends Component {

  // ✅ Make countries accessible everywhere
  countries = [
    'Japan 🇯🇵',
    'France 🇫🇷',
    'Italy 🇮🇹',
    'Australia 🇦🇺',
    'Canada 🇨🇦',
    'Brazil 🇧🇷',
    'Switzerland 🇨🇭',
    'Thailand 🇹🇭',
    'Dubai 🇦🇪',
    'Maldives 🇲🇻',
  ]

  state = {
    country: 'Select a country 🌍'
  }

  changeCountry = () => {
    const randomIndex = Math.floor(
      Math.random() * this.countries.length
    )

    this.setState({
      country: this.countries[randomIndex]
    })
  }

  render() {
    return (
      <>
        <Country
          country={this.state.country}
          changeCountry={this.changeCountry}
        />
      </>
    )
  }
}