import React, { useState } from 'react'
import validator from 'validator'


const App = () => {
  const [loginForm, setLoginForm] = useState({
    userName: '',
    password1: '',
    password2: '',
    email: '',
    errors: {}
  })

  // ✅ Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target

    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // ✅ Validation
  const validate = () => {
    const errors = {}

    // Username
    if (validator.isEmpty(loginForm.userName)) {
      errors.userName = 'User name is required'
    } else if (!validator.isLength(loginForm.userName,{min: 3, max: 12})) {
      errors.userName = 'User name must be 3-12 characters'
    }

    // Email
    if (validator.isEmpty(loginForm.email)) {
      errors.email = 'Email is required'
    } else if (!validator.isEmail(loginForm.email)) {
      errors.email = 'Invalid email'
    }

    // Password match
    if (!validator.equals(loginForm.password1, loginForm.password2)) {
      errors.password = 'Passwords do not match'
    }

      // Password
    if (validator.isEmpty(loginForm.password1)) {
      errors.password = 'Password is required'
    } else if (!validator.isLength(loginForm.password1, { min: 8 })) {
      errors.password = 'Password must be at least 8 characters'
    }

    return errors
  }

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validate()

    if (Object.keys(errors).length > 0) {
      setLoginForm(prev => ({
        ...prev,
        errors
      }))
      return
    }

    alert('Form submitted successfully 🚀')
  }

  return (
    <form className="app" onSubmit={handleSubmit}>

      {/* Username */}
      <div className="form-data">
        <label>User Name:- </label>
        <input
          type="text"
          name="userName"
          value={loginForm.userName}
          onChange={handleChange}
        />
        {loginForm.errors.userName && <p style={{ color: 'red' }}>{loginForm.errors.userName}</p>}
      </div>

      {/* Email */}
      <div className="form-data">
        <label>Email:- </label>
        <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={handleChange}
        />
        {loginForm.errors.email && <p style={{ color: 'red' }}>{loginForm.errors.email}</p>}
      </div>

      {/* Password */}
      <div className="form-data">
        <label>Password:- </label>
        <input
          type="password"
          name="password1"
          value={loginForm.password1}
          onChange={handleChange}
        />
      </div>

      {/* Confirm Password */}
      <div className="form-data">
        <label>Confirm Password:- </label>
        <input
          type="password"
          name="password2"
          value={loginForm.password2}
          onChange={handleChange}
        />
        {loginForm.errors.password && <p style={{ color: 'red' }}>{loginForm.errors.password}</p>}
      </div>

      {/* Submit */}
      <button type="submit">Submit</button>

    </form>
  )
}

export default App