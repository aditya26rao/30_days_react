# Forms

A form is used to collect data from a user. We use forms on websites to submit information such as names, emails, passwords, phone numbers, dates, feedback, and file uploads.

Common form fields include text input, email, password, telephone, date, checkbox, radio button, select options, and textarea. HTML5 provides many useful input types.

## Common HTML Input Types

```html
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
```

Other HTML elements used in forms are `textarea` and `select`.

```html
<textarea>Please write your comment...</textarea>

<select name="country">
  <option value="">Select your country</option>
  <option value="finland">Finland</option>
  <option value="sweden">Sweden</option>
  <option value="denmark">Denmark</option>
  <option value="norway">Norway</option>
  <option value="iceland">Iceland</option>
</select>
```

## Getting Data from an Input Field

To get data from an input field in React, we usually need:

- an input field
- state to store the value
- an event handler such as `onChange`

This is called a controlled input because React controls the input value through state.

The input element can have attributes such as `value`, `name`, `id`, `placeholder`, and `type`. We can connect a `label` to an input using the input's `id` and the label's `htmlFor`. When they are linked, clicking the label focuses the input.

## Single Input Example

### Function Component

```jsx
import React, { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('')

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div className='App'>
      <label htmlFor='userName'>User Name: </label>
      <input
        type='text'
        id='userName'
        name='userName'
        value={userName}
        onChange={handleChange}
      />

      <h3>{userName}</h3>
    </div>
  )
}

export default App
```

### Class Component

```jsx
import React from 'react'

class App extends React.Component {
  state = {
    userName: '',
  }

  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }

  render() {
    return (
      <div className='App'>
        <label htmlFor='userName'>User Name: </label>
        <input
          type='text'
          id='userName'
          name='userName'
          value={this.state.userName}
          onChange={this.handleChange}
        />

        <h3>{this.state.userName}</h3>
      </div>
    )
  }
}

export default App
```

## Getting Multiple Input Values from a Form

In this section, we collect multiple values from a form. We use:

- `onChange` for each input
- `onSubmit` for the form
- state to store all input values

### Class Component

```jsx
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
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
```

### Function Component

```jsx
import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
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
```

The forms above handle only text inputs. In real applications, forms usually contain different field types.

## Getting Data from Different Input Types

### Class Component

```jsx
import React, { Component } from 'react'

const options = [
  { value: '', label: '-- Select Country --' },
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
    file: null,
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

    const formattedSkills = Object.keys(skills)
      .filter((key) => skills[key])
      .map((key) => key.toUpperCase())

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

          <div className='form-group'>
            <label>Date of Birth</label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
            />
          </div>

          <div className='form-group'>
            <label>Favorite Color</label>
            <input
              type='color'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
            />
          </div>

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

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>

          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
```

### Function Component

```jsx
import React, { useState } from 'react'

const options = [
  { value: '', label: '-- Select Country --' },
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
    file: null,
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
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

    const formattedSkills = Object.keys(formData.skills)
      .filter((key) => formData.skills[key])
      .map((key) => key.toUpperCase())

    const data = {
      ...formData,
      skills: formattedSkills,
    }

    console.log(data)
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

        <input
          type='radio'
          name='gender'
          value='Male'
          checked={formData.gender === 'Male'}
          onChange={handleChange}
        />{' '}
        Male

        <input
          type='radio'
          name='gender'
          value='Female'
          checked={formData.gender === 'Female'}
          onChange={handleChange}
        />{' '}
        Female

        <input
          type='checkbox'
          name='html'
          checked={formData.skills.html}
          onChange={handleChange}
        />{' '}
        HTML

        <input
          type='checkbox'
          name='css'
          checked={formData.skills.css}
          onChange={handleChange}
        />{' '}
        CSS

        <input
          type='checkbox'
          name='javascript'
          checked={formData.skills.javascript}
          onChange={handleChange}
        />{' '}
        JavaScript

        <textarea name='bio' value={formData.bio} onChange={handleChange} />

        <input type='file' name='file' onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
```

## Updating State in a Function Component

### Normal update

```jsx
setFormData({
  ...formData,
  [name]: value,
})
```

### Nested update

```jsx
setFormData({
  ...formData,
  skills: {
    ...formData.skills,
    [name]: checked,
  },
})
```

## Form Validation

### What is validation?
Validation is the process of checking whether data is correct, complete, and in the expected format.

### Why is validation important?
Validation helps us:

- collect the correct data from users
- improve user experience
- reduce invalid submissions
- prevent some malicious or unwanted input

## Types of Validation

1. Client-side validation
2. Server-side validation

Validation can be done on the client side or the server side. Since React is a front-end library, we usually start with client-side validation. Validation can be implemented using HTML5 built-in validation or JavaScript logic such as regular expressions.

The `onBlur` event is often used to validate a field when the input loses focus.

## Validation Example

### Class Component

```jsx
import React, { Component } from 'react'

const options = [
  { value: '', label: '-- Select Country --' },
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
    file: null,
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    errors: {},
  }

  handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === 'checkbox') {
      this.setState((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [name]: checked,
        },
      }))
    } else if (type === 'file') {
      this.setState({ [name]: files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }

  validate = () => {
    const errors = {}

    if (!this.state.firstName) {
      errors.firstName = 'First name is required'
    } else if (
      this.state.firstName.length < 3 ||
      this.state.firstName.length > 12
    ) {
      errors.firstName = 'First name must be 3-12 characters'
    }

    if (!this.state.lastName) {
      errors.lastName = 'Last name is required'
    }

    if (!this.state.email || !this.state.email.includes('@')) {
      errors.email = 'Valid email is required'
    }

    if (!this.state.tel) {
      errors.tel = 'Phone number is required'
    }

    if (!this.state.country) {
      errors.country = 'Please select a country'
    }

    if (!this.state.gender) {
      errors.gender = 'Please select gender'
    }

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const errors = this.validate()

    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
      return
    }

    const formattedSkills = Object.keys(this.state.skills)
      .filter((key) => this.state.skills[key])
      .map((key) => key.toUpperCase())

    const data = {
      ...this.state,
      skills: formattedSkills,
      errors: {},
    }

    console.log('Submitted Data:', data)
    alert('Form submitted successfully')
  }

  render() {
    const { errors } = this.state

    return (
      <div className='App'>
        <h3>Add Student</h3>

        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            {errors.firstName && (
              <p style={{ color: 'red' }}>{errors.firstName}</p>
            )}
          </div>

          <div>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            {errors.lastName && (
              <p style={{ color: 'red' }}>{errors.lastName}</p>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div>
            <label>Telephone</label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
            />
            {errors.tel && <p style={{ color: 'red' }}>{errors.tel}</p>}
          </div>

          <div>
            <label>Country</label>
            <select
              name='country'
              value={this.state.country}
              onChange={this.handleChange}
            >
              {selectedOptions}
            </select>
            {errors.country && (
              <p style={{ color: 'red' }}>{errors.country}</p>
            )}
          </div>

          <div>
            <p>Gender</p>

            <input
              type='radio'
              name='gender'
              value='Female'
              checked={this.state.gender === 'Female'}
              onChange={this.handleChange}
            />{' '}
            Female

            <input
              type='radio'
              name='gender'
              value='Male'
              checked={this.state.gender === 'Male'}
              onChange={this.handleChange}
            />{' '}
            Male

            <input
              type='radio'
              name='gender'
              value='Other'
              checked={this.state.gender === 'Other'}
              onChange={this.handleChange}
            />{' '}
            Other

            {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
          </div>

          <div>
            <p>Skills</p>

            <input
              type='checkbox'
              name='html'
              checked={this.state.skills.html}
              onChange={this.handleChange}
            />{' '}
            HTML

            <input
              type='checkbox'
              name='css'
              checked={this.state.skills.css}
              onChange={this.handleChange}
            />{' '}
            CSS

            <input
              type='checkbox'
              name='javascript'
              checked={this.state.skills.javascript}
              onChange={this.handleChange}
            />{' '}
            JavaScript
          </div>

          <div>
            <textarea
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              placeholder='Write about yourself...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
```

### Function Component

```jsx
import React, { useState } from 'react'

const options = [
  { value: '', label: '-- Select Country --' },
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
    file: null,
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    errors: {},
  })

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
    } else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const validate = () => {
    const errors = {}

    if (!formData.firstName) {
      errors.firstName = 'First name is required'
    } else if (formData.firstName.length < 3 || formData.firstName.length > 12) {
      errors.firstName = 'First name must be 3-12 characters'
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
      errors: {},
    }

    console.log('Submitted Data:', data)
    alert('Form submitted successfully')
  }

  return (
    <div className='App'>
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          {formData.errors.firstName && (
            <p style={{ color: 'red' }}>{formData.errors.firstName}</p>
          )}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
          {formData.errors.lastName && (
            <p style={{ color: 'red' }}>{formData.errors.lastName}</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {formData.errors.email && (
            <p style={{ color: 'red' }}>{formData.errors.email}</p>
          )}
        </div>

        <div>
          <label>Telephone</label>
          <input
            type='tel'
            name='tel'
            value={formData.tel}
            onChange={handleChange}
          />
          {formData.errors.tel && (
            <p style={{ color: 'red' }}>{formData.errors.tel}</p>
          )}
        </div>

        <div>
          <label>Country</label>
          <select name='country' value={formData.country} onChange={handleChange}>
            {selectOptions}
          </select>
          {formData.errors.country && (
            <p style={{ color: 'red' }}>{formData.errors.country}</p>
          )}
        </div>

        <div>
          <p>Gender</p>
          <input
            type='radio'
            name='gender'
            value='Female'
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />{' '}
          Female
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />{' '}
          Male
          <input
            type='radio'
            name='gender'
            value='Other'
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />{' '}
          Other
          {formData.errors.gender && (
            <p style={{ color: 'red' }}>{formData.errors.gender}</p>
          )}
        </div>

        <div>
          <p>Skills</p>
          <input
            type='checkbox'
            name='html'
            checked={formData.skills.html}
            onChange={handleChange}
          />{' '}
          HTML
          <input
            type='checkbox'
            name='css'
            checked={formData.skills.css}
            onChange={handleChange}
          />{' '}
          CSS
          <input
            type='checkbox'
            name='javascript'
            checked={formData.skills.javascript}
            onChange={handleChange}
          />{' '}
          JavaScript
        </div>

        <div>
          <textarea
            name='bio'
            value={formData.bio}
            onChange={handleChange}
            placeholder='Write about yourself...'
          />
        </div>

        <div>
          <input type='file' name='file' onChange={handleChange} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
```

## Quick Notes

- `onChange` is used to listen for changes in input fields.
- `onBlur` is used when an input loses focus.
- `onSubmit` is used on the `form` element.
- `e.preventDefault()` prevents the browser from reloading the page when a form is submitted.
- A checkbox returns `true` or `false` through `e.target.checked`.
- A controlled input is an input whose value is managed by React state.

## Exercises

1. What is the importance of a form?
2. How many input types do you know?
3. Mention at least four attributes of an input element.
4. What is the importance of `htmlFor`?
5. Write an input type that is not included in the example.
6. What is a controlled input?
7. What do you need to create a controlled input?
8. Which event do you use to listen for changes on an input field?
9. What is the value of a checked checkbox?
10. When do you use `onChange`, `onBlur`, and `onSubmit`?
11. What is the purpose of writing `e.preventDefault()` inside the submit handler?
12. How do you bind data in React?
13. What is validation?
14. Which event do you use to listen when an input changes?
15. Which event types do you use to validate an input?
