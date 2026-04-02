// import React, { Component } from 'react'

// // 🔄 Loading Component
// const Loading = () => (
//   <h2 style={{ color: 'gray' }}>Loading data... ⏳</h2>
// )

// // 📦 Data Component
// const Data = ({ users }) => (
//   <div>
//     <h2>Users List 👇</h2>
//     {users.map((user, index) => (
//       <p key={index}>{user}</p>
//     ))}
//   </div>
// )
// export default class App extends Component {

//   state = {
//     loading: true,
//     users: [],
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         loading: false,
//         users: ['Aditya', 'Rahul', 'Priya', 'Anjali'],
//       })
//     }, 5000)
//   }
//   render() {
//     return (
//       <div style={{ textAling: 'center', marginTop: '100px' }}>
//         <h1>Fetching Users</h1>
//         {this.state.loading ? <Loading /> : <Data users={this.state.users} />}
//       </div>
//     )
//   }
// }


import React, { useState, useEffect } from 'react'

// 🔄 Loading Component
const Loading = () => (
  <h2 style={{ color: 'gray' }}>Loading data... ⏳</h2>
)
// 📦 Data Component
const Data = ({ users }) => (
  <div>
    <h2>Users List 👇</h2>
    {users.map((user, index) => (
      <p key={index}>{user}</p>
    ))}
  </div>
)

// 🌍 Main Functional Component
const App = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('Component Mounted')

    // ⏳ Simulate API delay
    const timer = setTimeout(() => {
      setUsers(['Aditya', 'Rahul', 'Priya', 'Anjali'])
      setLoading(false)
    }, 3000)

    // 🧹 Cleanup (good practice)
    return () => clearTimeout(timer)
  }, []) // 👈 Runs only once (like componentDidMount)

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>📡 Fetching Data Example</h1>

      {/* 🔥 Conditional Rendering */}
      {loading ? <Loading /> : <Data users={users} />}
    </div>
  )
}

export default App