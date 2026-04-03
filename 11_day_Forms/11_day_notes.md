# Forms

Form is used to collect data from a user. Once in a while we use form to fill our information on a paper or on a website.

we fill different form fields to submit our data to remote database. We encounter different form fields when we fill a form such as simple text, email, password, telephone, date, checkbox, radio button, option selection and text area field. Currently, HTML5 has provide quite a lot of field types. 

You may have a look at the following available HTML5 input types.

```cmd
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />

Another HTML fields to get data from a form are textarea and select with options elements.

```cmd
<textarea>Please write your comment ...</textarea>

<select name="country">
  <option value="">Select your country</option>
  <option value="finland">Finland</option>
  <option value="sweden">Sweden</option>
  <option value="denmark">Denmark</option>
  <option value="norway">Norway</option>
  <option value="iceland">Iceland</option>
</select>

Now, you know most of the fields we need to get data from a form

## Getting data from an input field

So far we did not get any data from input field. Now, it is time to learn how to get data from an input field. We need an input field, event listener (onChange) and state to get data from a controlled input

The input element has many attributes such as value, name, id, placeholder, type and event handler. In addition, we can link a label and an input field using an id of input field and htmlFor of the label.If label and input are linked it will focus the input when we click on label. Look at the example give below.

in Functional Component
```jsx

import React, { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('')

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div className='App'>
      <label htmlFor="userName">User Name: </label>

      <input
        type="text"
        id="userName"
        name="userName"
        value={userName}
        onChange={handleChange}
      />

      <h3>{userName}</h3>
    </div>
  )
}

export default App

in Class Component
```jsx
import React from 'react'

class App extends React.Component {
  state = {
    userName: ''
  }
  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <label htmlFor="userName">User Name</label>
        <input type="text" id='userName' name='userName' value={this.state.userName} onChange={this.handleChange} />
        {this.state.userName}
      </div>
    )
  }

}

export default App

## Getting multiple input data from form

In this section we will develop a small form which collect user information. Our user is a student. We use a parent form element and certain number of input elements to collect user information. In addition to that we will have event listener for the form (onSubmit) and for the inputs (onChange)

in Class Component
```jsx

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    const { firstName, lastName, title, country } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    )
  }
}


in Functional Component
```jsx
import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    title: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='App'>
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default App

The above form handles only text types but do have different input field types. Let's do another form which handle all the different input field types.

## Get data from different input field types

 in Class Component

```jsx
import React, { Component } from 'react'

const options = [
  { value: '', label: '-- Select Country--' },
  { value: 'Finland', label: 'Finland' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Denmark', label: 'Denmark' },
]

const selectedOptions = options.map(({ value, label }) => (
  <option key={value} value={value}>
    {label}
  </option>
))

export default class App extends Component {
  state = {
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
    },
  }

  handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === 'checkbox') {
      this.setState({
        skills: {
          ...this.state.skills,
          [name]: checked,
        },
      })
    } else if (type === 'file') {
      this.setState({ [name]: files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state

    // Convert skills object to array
  const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    }

    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <h3>Add Student</h3>

        <form onSubmit={this.handleSubmit}>
          {/* Name Fields */}
          <div className='row'>
            <div className='form-group'>
              <label>First Name</label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder='First Name'
              />
            </div>

            <div className='form-group'>
              <label>Last Name</label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Last Name'
              />
            </div>

            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>
          </div>

          {/* Contact */}
          <div className='form-group'>
            <label>Telephone</label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          {/* DOB */}
          <div className='form-group'>
            <label>Date of Birth</label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
            />
          </div>

          {/* Color */}
          <div className='form-group'>
            <label>Favorite Color</label>
            <input
              type='color'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
            />
          </div>

          {/* Weight */}
          <div className='form-group'>
            <label>Weight (Kg)</label>
            <input
              type='number'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>

          {/* Country */}
          <div>
            <label>Country</label>
            <br />
            <select
              name='country'
              value={this.state.country}
              onChange={this.handleChange}
            >
              {selectedOptions}
            </select>
          </div>

          {/* Gender */}
          <div>
            <p>Gender</p>

            <input
              type='radio'
              name='gender'
              value='Female'
              checked={this.state.gender === 'Female'}
              onChange={this.handleChange}
            />
            <label>Female</label>

            <input
              type='radio'
              name='gender'
              value='Male'
              checked={this.state.gender === 'Male'}
              onChange={this.handleChange}
            />
            <label>Male</label>

            <input
              type='radio'
              name='gender'
              value='Other'
              checked={this.state.gender === 'Other'}
              onChange={this.handleChange}
            />
            <label>Other</label>
          </div>

          {/* Skills */}
          <div>
            <p>Select your skills</p>

            <input
              type='checkbox'
              name='html'
              checked={this.state.skills.html}
              onChange={this.handleChange}
            />
            <label>HTML</label>

            <input
              type='checkbox'
              name='css'
              checked={this.state.skills.css}
              onChange={this.handleChange}
            />
            <label>CSS</label>

            <input
              type='checkbox'
              name='javascript'
              checked={this.state.skills.javascript}
              onChange={this.handleChange}
            />
            <label>JavaScript</label>
          </div>

          {/* Bio */}
          <div>
            <label>Bio</label>
            <br />
            <textarea
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='50'
              rows='5'
              placeholder='Write about yourself...'
            />
          </div>

          {/* File */}
          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>

          {/* Submit */}
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

In Functional Component
```jsx
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

In FUnction Componet, if we want to update a state, we do like htis , bewlow example
Normal Update
```jsx
setFormData({
  ...formData,
  [name]: value
})

Nested Update
```jsx
skills: {
  ...formData.skills,
  [name]: checked
}

## Form Validation

### What is Validation ?
The action or process of checking or proving the validity or accuracy of something in this case data.

### What is the purpose of validation
The main purpose to validation is to get a desired data from users. In addition, to prevent malicious users and data.

## Validation Types
1) Client Side
2) Server Side

Validation can be done in client side or sever side. At the moment, we are using React which is a front end technology and we use client side validation.A validation can implement using HTML5 built-in validation or using JavaScript(using regular expression).

In the following snippet of code, a validation has been implemented the first field. Try to understand how it works. The onBlur event has been used to check validity when the input is not focused.