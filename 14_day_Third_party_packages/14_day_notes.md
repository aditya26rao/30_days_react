# Third Party Packages

JavaScript has millions of packages on npm, so for many problems there is already a library you can install instead of building everything from scratch.

In React projects, third-party packages are commonly used for:

- HTTP requests
- icons
- styling
- date formatting
- utility helpers
- form validation

Some useful packages you may see in React applications are:

- `axios`
- `react-icons`
- `sass`
- `styled-components`
- `reactstrap`
- `lodash`
- `uuid`
- `classnames`
- `validator`

Older tutorials may mention `node-sass`, but that package is deprecated. Use `sass` instead.

Moment.js still works, but the project is now considered a legacy library in maintenance mode. In new projects, many developers prefer lighter alternatives such as `Day.js`, `date-fns`, or the built-in `Intl` APIs.

## What Is a Third-Party Package?

A third-party package is a library created by someone else and published for other developers to use. We install it into our project when it solves a problem we do not want to build from scratch.

Examples:

- `axios` helps us make HTTP requests
- `react-icons` gives us ready-made SVG icons
- `sass` lets us write SCSS
- `validator` helps validate strings like emails and URLs

## NPM or Yarn

You can use either `npm` or `yarn` to install packages. Both are package managers.

Stick to one package manager in a project. Do not mix `npm` and `yarn` in the same app, because that usually creates multiple lockfiles and inconsistent installs.

```bash
# install a package
npm install package-name

# short form
npm i package-name

# or with yarn
yarn add package-name
```

## How to Choose a Good Package

Before installing a third-party package, it is good to check:

- documentation quality
- recent maintenance activity
- npm downloads
- GitHub issues and stars
- bundle size
- TypeScript support if your project uses TypeScript
- security history and advisories

## Sass

Sass is a CSS preprocessor that adds features like:

- nesting
- variables
- partials
- mixins

Install Sass:

```bash
npm install sass

# or
yarn add sass
```

After installing `sass`, you can use `.scss` files in your React project.

### Example Folder Structure

```text
src/
  styles/
    app.scss
```

### Example SCSS

```scss
/* ./styles/app.scss */
header {
  background-color: #61dbfb;
  padding: 10px;
  margin: 0;

  .app-wrapper {
    h1 {
      color: #000;
    }
  }
}
```

### Importing SCSS in a Component

```jsx
import React from 'react'
import './styles/app.scss'

const App = () => (
  <header>
    <div className='app-wrapper'>
      <h1>30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Aditya</p>
      <small>Apr 7, 2026</small>
    </div>
  </header>
)

export default App
```

## CSS Modules

In addition to Sass, it is good to know how to use CSS Modules in React. In many React setups, including Vite, CSS Modules work without installing a separate package.

You can use CSS Modules with plain CSS or with Sass.

### Naming Convention

```text
[name].module.css
[name].module.scss
```

### Example: `app.module.scss`

```scss
.header {
  background-color: #61dbfb;
  padding: 10px;
  margin: 0;
}

.headerWrapper {
  font-weight: 500;
  border: 5px solid orange;
}
```

### Using CSS Modules in React

```jsx
import React from 'react'
import styles from './styles/app.module.scss'

const App = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1>30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Aditya</p>
      <small>Apr 7, 2026</small>
    </div>
  </header>
)

export default App
```

You can also destructure the classes:

```jsx
const { header, headerWrapper } = styles
```

When we use CSS Modules, each class is compiled into a unique generated class name. If you inspect the page in developer tools, you may see something like this:

```html
<header class="_header_150ox_1">
  <div class="_headerWrapper_150ox_7"></div>
</header>
```

## Axios

Axios is a JavaScript library for making HTTP requests. It supports all common request types:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

Install Axios:

```bash
npm install axios

# or
yarn add axios
```

### Functional Component Example

```jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3'
        )

        setData(response.data)
      } catch (err) {
        setError('Failed to fetch countries')
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  if (loading) {
    return <h2>Loading countries...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className='app'>
      <h1>Fetching Data Using Axios</h1>
      <p>There are {data.length} countries in the API.</p>

      <div className='countries-wrapper'>
        {data.map((country) => (
          <div key={country.cca3} className='country'>
            <img
              src={country.flags?.png}
              alt={country.name?.common}
              width='100'
            />
            <h2>{country.name?.common}</h2>
            <p>Capital: {country.capital?.[0] ?? 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
```

### Class Component Example

```jsx
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    data: [],
    loading: true,
    error: null,
  }

  async componentDidMount() {
    const API_URL =
      'https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3'

    try {
      const response = await axios.get(API_URL)

      this.setState({
        data: response.data,
        loading: false,
      })
    } catch (err) {
      console.log(err)
      this.setState({
        error: 'Failed to fetch countries',
        loading: false,
      })
    }
  }

  render() {
    const { data, loading, error } = this.state

    if (loading) {
      return <h1>Loading...</h1>
    }

    if (error) {
      return <h1>{error}</h1>
    }

    return (
      <div className='app'>
        <h1>Fetching Data Using Axios</h1>
        <p>There are {data.length} countries in the API.</p>

        <div className='countries-wrapper'>
          {data.map((country) => (
            <div key={country.cca3} className='country'>
              <img
                src={country.flags?.png}
                alt={country.name?.common}
                width='100'
              />
              <h2>{country.name?.common}</h2>
              <p>Capital: {country.capital?.[0] ?? 'N/A'}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
```

When using `async` and `await`, always handle errors with `try` and `catch`.

## React Icons

Icons are an important part of modern user interfaces. The `react-icons` package gives access to icon packs that can be used as React components.

Install it like this:

```bash
npm install react-icons

# or
yarn add react-icons
```

### Example

```jsx
import React, { Component } from 'react'
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'

const Footer = () => {
  return (
    <footer>
      <h3>30 Days of React</h3>
      <div>
        <TiSocialFacebook />
        <TiSocialInstagram />
      </div>
    </footer>
  )
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Welcome to the World of Icons</h1>
        <Footer />
      </div>
    )
  }
}

export default App
```

## Moment

Moment.js is a date and time library that makes formatting and relative-time calculations easy.

Install it like this:

```bash
npm install moment

# or
yarn add moment
```

### Example

```jsx
import React, { Component } from 'react'
import moment from 'moment'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>How to Use Moment</h1>
        <p>This challenge was started {moment('2026-04-22').fromNow()}</p>
        <p>The challenge will be over in {moment('2026-05-08').fromNow()}</p>
        <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
      </div>
    )
  }
}

export default App
```

Note:

- Moment is still usable, especially in older codebases.
- For new projects, many developers prefer `Day.js`, `date-fns`, `Luxon`, or native `Intl`.

## Notes

- A package is reusable code published for others to install.
- A third-party package is any package not written by you or your team.
- You do not have to use third-party packages, but they can save time.
- Always choose packages carefully instead of installing them just because they are popular.
- `classnames` helps build conditional class name strings.
- `validator` helps validate text such as emails, URLs, and phone numbers.

## Exercises

1. What is a package?
2. What is a third-party package?
3. Do you have to use third-party packages?
4. How do you know the popularity and stability of a third-party package?
5. How many JavaScript packages are available on the npm registry?
6. How do you install a third-party package?
7. What packages do you use most frequently?
8. What package do you use to fetch data?
9. What is the purpose of the `classnames` package?
10. What is the purpose of the `validator` package?
