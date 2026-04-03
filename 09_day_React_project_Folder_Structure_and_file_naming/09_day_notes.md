# React Project Folder Structure and File Naming

## File Naming
In React projects, it is a good practice to use `CamelCase` or `PascalCase` for component files. Descriptive file names make the codebase easier to read and maintain.

Examples:
- `Header.jsx`
- `TechList.jsx`
- `UserCard.jsx`

## Folder Structure
As a project grows, keeping related files in separate folders makes the app easier to manage.

A common structure is:
- `assets/` for images, icons, and fonts
- `components/` for reusable React components
- `styles/` for CSS files if the project uses a separate styles folder
- `public/` for static files served directly

So far, we have been writing many components inside `App.jsx`. A better approach is to move each component into its own file and then import those files into `App.jsx`.

## `main.jsx`
The `main.jsx` file is the entry point of the React app.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## `App.jsx`
Here is a simple example of an `App` component:

```jsx
import React from 'react'

const App = () => {
  return <div>App</div>
}

export default App
```

We export a component so that it can be imported and used in another file. In React, a file can have:
- one `default export`
- many `named exports`

## Named Export
We can create a named export by adding the `export` keyword before the variable or function.

### Named export with an arrow function
```jsx
import React from 'react'

export const App = () => <h1>Welcome to 30 Days Of React</h1>
```

### Named export with a regular function
```jsx
import React from 'react'

export function App() {
  return <h1>Welcome to 30 Days Of React</h1>
}
```

### Importing a named export
```jsx
import { App } from './App.jsx'
```

## Default Export
Default export is commonly used for React components.

### Default export with a function declaration
```jsx
import React from 'react'

export default function App() {
  return <h1>Welcome to 30 Days Of React</h1>
}
```

### Recommended default export pattern
```jsx
import React from 'react'

const App = () => <h1>Welcome to 30 Days Of React</h1>

export default App
```

### Importing a default export
```jsx
import App from './App.jsx'
```

Note:
- `export default const App = ...` is not valid JavaScript syntax.
- Named exports must be imported with curly braces.
- Default exports are imported without curly braces.

## Organizing Components
We can place reusable components in a `components` folder and import them into `App.jsx`.

Example:
```jsx
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
```

## Folder Structure Example
```text
folder_file_structure/
|-- public/
|   `-- public_image.jpg
|-- src/
|   |-- assets/
|   |   `-- assets_image.jpg
|   |-- components/
|   |   |-- Footer.jsx
|   |   |-- Header.jsx
|   |   |-- Main.jsx
|   |   `-- TechList.jsx
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
`-- vite.config.js
```

## Fragments
Fragments allow us to group JSX elements without adding an extra HTML element to the DOM.

### Using `Fragment`
```jsx
import React, { Fragment } from 'react'

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  )
}

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
```

### Using `React.Fragment`
```jsx
import React from 'react'

const Skills = () => {
  return (
    <React.Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </React.Fragment>
  )
}
```

### Using the short fragment syntax
```jsx
import React from 'react'

const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  )
}
```

The short syntax `<> </>` is the most common and recommended option when no `key` is needed.

## Cleaner Class Component Import
When writing class components, we do not always need to write `React.Component`. We can import `Component` directly for cleaner code.

### Without importing `Component`
```jsx
import React from 'react'

class App extends React.Component {
  render() {
    return <h1>30 Days Of React</h1>
  }
}
```

### By importing `Component`
```jsx
import React, { Component } from 'react'

class App extends Component {
  render() {
    return <h1>30 Days Of React</h1>
  }
}
```

## Why Folder Structure and File Naming Matter
- They make the project easier to read
- They help us find files quickly
- They improve maintainability as the app grows
- They support teamwork and consistency
- They reduce confusion when reusing components

## Exercises
1. What is the importance of React folder structure and file naming?
2. How do you export a file or component?
3. How do you import a file or component?
4. Create a component and export it as a named export.
5. Create a component and export it as a default export.
6. Create a component in a separate file and import it into `App.jsx`.
7. Move your existing components into a better folder structure.
