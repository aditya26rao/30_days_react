import React, { useState } from 'react'

const options = [
  { value: '', label: '-- Select Country--' },
  { value: 'Finland', label: 'Finland' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Denmark', label: 'Denmark' },
]

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>
    {label}
  </option>
))

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    }
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [name]: checked,
        },
      })
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData) // ✅ skills stays object
  }

  return (
    <div className='App'>
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          placeholder='First Name'
        />

        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />

        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />

        <input
          type='tel'
          name='tel'
          value={formData.tel}
          onChange={handleChange}
          placeholder='Tel'
        />

        <input
          type='date'
          name='dateOfBirth'
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <input
          type='color'
          name='favoriteColor'
          value={formData.favoriteColor}
          onChange={handleChange}
        />

        <input
          type='number'
          name='weight'
          value={formData.weight}
          onChange={handleChange}
          placeholder='Weight'
        />

        <select
          name='country'
          value={formData.country}
          onChange={handleChange}
        >
          {selectOptions}
        </select>

        {/* Gender */}
        <input
          type='radio'
          name='gender'
          value='Male'
          checked={formData.gender === 'Male'}
          onChange={handleChange}
        /> Male

        <input
          type='radio'
          name='gender'
          value='Female'
          checked={formData.gender === 'Female'}
          onChange={handleChange}
        /> Female

        {/* Skills */}
        <input
          type='checkbox'
          name='html'
          checked={formData.skills.html}
          onChange={handleChange}
        /> HTML

        <input
          type='checkbox'
          name='css'
          checked={formData.skills.css}
          onChange={handleChange}
        /> CSS

        <input
          type='checkbox'
          name='javascript'
          checked={formData.skills.javascript}
          onChange={handleChange}
        /> JS

        <textarea
          name='bio'
          value={formData.bio}
          onChange={handleChange}
        />

        <input
          type='file'
          name='file'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App