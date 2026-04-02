import React, { Component } from 'react'

// 🎨 Season Data
const seasons = [
  { name: 'Spring 🌸', color: '#A8E6CF' },
  { name: 'Summer ☀️', color: '#FFD93D' },
  { name: 'Autumn 🍂', color: '#FF8C42' },
  { name: 'Winter ❄️', color: '#4D96FF' },
]

// 🔘 Button Component
const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    {text}
  </button>
)

// 🌍 Main App
export default class App extends Component {
  state = {
    currentSeason: 'Select a Season 🌍',
    bgColor: '#ffffff',
  }

  // 🎯 Change Season
  changeSeason = (season) => {
    this.setState({
      currentSeason: season.name,
      bgColor: season.color,
    })
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.bgColor,
          height: '100vh',
          textAlign: 'center',
          paddingTop: '100px',
        }}
      >
        <h1>🌍 Season Background App</h1>
        <h2>{this.state.currentSeason}</h2>

        {/* Buttons */}
        {seasons.map((season, index) => (
          <Button
            key={index}
            text={season.name}
            onClick={() => this.changeSeason(season)}
          />
        ))}
      </div>
    )
  }
}