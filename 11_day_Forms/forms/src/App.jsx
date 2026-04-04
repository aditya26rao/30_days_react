import React, { useState } from 'react'

const options = [
  { value: '', label: '-- Select Country--' },
  { value: 'Finland', label: 'Finland' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Denmark', label: 'Denmark' },
]

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>{label}</option>
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
    file: null,
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    errors: {},
  })

  // ✅ Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [name]: checked,
        },
      }))
    }
    else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    }
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  // ✅ Validation
  const validate = () => {
    const errors = {}

    if (!formData.firstName) {
      errors.firstName = 'First name is required'
    } else if (formData.firstName.length < 3 || formData.firstName.length > 12) {
      errors.firstName = 'First name must be 3–12 characters'
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required'
    }

    if (!formData.email || !formData.email.includes('@')) {
      errors.email = 'Valid email is required'
    }

    if (!formData.tel) {
      errors.tel = 'Phone number is required'
    }

    if (!formData.country) {
      errors.country = 'Please select a country'
    }

    if (!formData.gender) {
      errors.gender = 'Please select gender'
    }

    return errors
  }

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validate()

    if (Object.keys(errors).length > 0) {
      setFormData((prev) => ({
        ...prev,
        errors,
      }))
      return
    }

    const formattedSkills = Object.keys(formData.skills)
      .filter((key) => formData.skills[key])
      .map((key) => key.toUpperCase())

    const data = {
      ...formData,
      skills: formattedSkills,
    }

    console.log('Submitted Data:', data)
    alert('Form submitted successfully 🚀')

    // Reset
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      tel: '',
      dateOfBirth: '',
      favoriteColor: '',
      weight: '',
      gender: '',
      file: null,
      bio: '',
      skills: {
        html: false,
        css: false,
        javascript: false,
      },
      errors: {},
    })
  }

  return (
    <div className="App">
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit} noValidate>

        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {formData.errors.firstName && <p style={{ color: 'red' }}>{formData.errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {formData.errors.lastName && <p style={{ color: 'red' }}>{formData.errors.lastName}</p>}
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formData.errors.email && <p style={{ color: 'red' }}>{formData.errors.email}</p>}
        </div>

        <div>
          <label>Telephone</label>
          <input type="tel" name="tel" value={formData.tel} onChange={handleChange} />
          {formData.errors.tel && <p style={{ color: 'red' }}>{formData.errors.tel}</p>}
        </div>

        <div>
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            {selectOptions}
          </select>
          {formData.errors.country && <p style={{ color: 'red' }}>{formData.errors.country}</p>}
        </div>

        <div>
          <p>Gender</p>
          <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
          <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other
          {formData.errors.gender && <p style={{ color: 'red' }}>{formData.errors.gender}</p>}
        </div>

        <div>
          <p>Skills</p>
          <input type="checkbox" name="html" checked={formData.skills.html} onChange={handleChange} /> HTML
          <input type="checkbox" name="css" checked={formData.skills.css} onChange={handleChange} /> CSS
          <input type="checkbox" name="javascript" checked={formData.skills.javascript} onChange={handleChange} /> JavaScript
        </div>

        <div>
          <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Write about yourself..." />
        </div>

        <div>
          <input type="file" name="file" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App