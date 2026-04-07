import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
      data: [],
      loading: false,
      showModal: false,
    }
  }

  // ✅ TIMER START
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => ({
        seconds: prev.seconds + 1
      }))
    }, 1000)
  }

  // ✅ CLEANUP
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  // ✅ API FETCH
  fetchUsers = () => {
    this.setState({ loading: true })

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
          loading: false
        })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  // ✅ MODAL TOGGLE
  toggleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal
    }))
  }

  render() {
    const { seconds, data, loading, showModal } = this.state

    return (
      <div className="App">
        <h1>🔥 React Lifecycle Real Project</h1>

        {/* ⏱️ TIMER */}
        <h2>Timer: {seconds}s</h2>

        {/* 🌐 API */}
        <button onClick={this.fetchUsers}>
          Fetch Users
        </button>

        {loading && <p>Loading...</p>}

        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}

        {/* 🧩 MODAL */}
        <button onClick={this.toggleModal}>
          {showModal ? 'Close Modal' : 'Open Modal'}
        </button>

        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    )
  }
}

// ✅ MODAL COMPONENT
class Modal extends React.Component {
  componentDidMount() {
    console.log('Modal Opened')
    window.addEventListener('keydown', this.handleEsc)
  }

  componentWillUnmount() {
    console.log('Modal Closed')
    window.removeEventListener('keydown', this.handleEsc)
  }

  handleEsc = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose()
    }
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <h2>Modal Content</h2>
          <button onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    )
  }
}

export default App