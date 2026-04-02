# Day 2

## Setting up React

However, we do not use a CDN in real projects. We use npm and React tooling to generate a React project starter (boilerplate). The initial `create-react-app` was released in 2016. Before that, people used React in a similar way to what we did on Day 1.

Before that, we have to install Node.js.

After installation, we can check whether Node.js is installed by running:

`node -v`

in the terminal.

## How Modules Work

A module can contain a single function or multiple functions that can be exported and imported when needed. Modules can be included in a project. In React, we do not use the `link` tag to access modules or packages. Instead, we import the modules into our project.

```js
// math.js
export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b

export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  }
})()

// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js' // to import everything remaining
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
```

After this, when you see `import React from 'react'` or `import ReactDOM from 'react-dom'`, you will not be surprised.

## Package

A package is a module or a collection of modules. For instance, React and ReactDOM are packages.

## npm (Node Package Manager)

It was created in 2010. You do not need to install npm separately. When you install Node.js, npm is installed as well.
npm manages packages for Node.js.

## Create React App

We have 3 different ways to create a React app.

1) Using npx:
   npx create-react-app app-name

2) Using npm (Vite):
   npm create vite@latest app-name

3) Using yarn:
   yarn create vite

--> After installing the project, we have to run:
    npm install  
    and then:
    npm start   (for Create React App)
    or  
    npm run dev (for Vite)

## React Boilerplate

Let's see the React boilerplate created by `create-react-app`. Whenever you create a new project, you run `create-react-app` and provide the project name.

In the React boilerplate, there are three folders: `node_modules`, `public`, and `src`. In addition, there are `.gitignore`, `README.md`, `package.json`, and `yarn.lock`. Some of you may have `package-lock.json` instead of `yarn.lock`.

It is good to know these folders and files.

`node_modules` - stores all the necessary Node packages for the React application.

`public`

`index.html` - the only HTML file we have in the entire application

`favicon.ico` - an icon file

`manifest.json` - used to make the application a Progressive Web App

other images - Open Graph images (these are visible when a link is shared on social media)

`robots.txt` - contains information about whether the website allows web scraping

`src`

`App.css`, `index.css` - different CSS files
`index.js` - a file that connects all the components with `index.html`
`App.js` - a file where we usually import most of the presentational components
`serviceWorker.js` - used to add Progressive Web App features
`setupTests.js` - used to write test cases
`package.json` - list of packages the application uses

`.gitignore` - the React boilerplate comes with Git initialized, and `.gitignore` allows files and folders not to be pushed to GitHub

`README.md` - Markdown file used to write documentation

`yarn.lock` or `package-lock.json` - used to lock the versions of packages

## Inside the React files

```js
// index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'

const jsxElement = <h1>This is a JSX element</h1>
const rootElement = document.getElementById('root')

ReactDOM.render(jsxElement, rootElement)
```

We can delete unwanted files and rewrite the code:

```jsx
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 2, 2020</small>
      </header>
    </>
  )
}

export default App
```

## Styles in JSX

Let's apply style to the JSX elements. We can style JSX either using inline, internal or external CSS styles. Now, let's apply inline styles to each JSX element.

```jsx
const headerrStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
  return (
    <>
      <header style={headerrStyles}>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 2, 2020</small>
      </header>
    </>
  )
```

## Injecting Data to JSX Elements

We have seen this before on Day 1. It is similar, but we will learn it in more detail when we get into React components.

## Importing Media Objects in React

How do we import images, videos, and audio in React?
We first initialize/store the media files in the `src/assets` folder or the `public` folder.

```jsx
import assetsImage from './assets/assets_image.jpg'

<img src={assetsImage} alt="Image imported from assets" />

{/* Public folder images should be accessed directly */}
<img src="/public_image.jpg" alt="Image imported from public folder" />
```
