import './App.css'
import assetsImage from './assets/assets_image.jpg'

function App() {
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
  return (
    <>
      <header style={headerStyles}>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 2, 2020</small>
      </header>
      <img src={assetsImage} alt="image imported from assets" />
      <img src="/public_image.jpg" alt="image imported from public folder" />

    </>
  )
}

export default App
