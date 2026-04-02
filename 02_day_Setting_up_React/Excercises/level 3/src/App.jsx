import './App.css'
import assetsImage from './assets/assets_image.jpg'

function App() {
  const records = [
    {
      IPL: '8k runs, King Kohli is the best player in IPL T20 format',
      ODI: '54 ODI centuries, highest among players, even Sachin has 51',
      Test: '9700 runs and 31 centuries',
      T20I: 'Best strike rate of 137 and 4100 runs'
    }
  ]

  return (
    <>
      <img src={assetsImage} alt="Virat Kohli" />
      <h1>Virat Kohli</h1>
      <h2>Cricketer</h2>
      <h2>Records</h2>

      <ul>
        {records.map((item) => (
          <>
            <li>{item.IPL}</li>
            <li>{item.ODI}</li>
            <li>{item.Test}</li>
            <li>{item.T20I}</li>
          </>
        ))}
      </ul>
    </>
  )
}

export default App
