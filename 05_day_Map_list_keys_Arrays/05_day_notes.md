# Mapping Arrays

An array is one of the most frequently used data structures to solve many kinds of problems. In React, we often use arrays to render lists of JSX elements by transforming each item into an HTML element.

## Mapping and Rendering Arrays

Most of the time, data comes in the form of an array or an array of objects. To render this data in React, we usually transform it using the `map()` method.

### Mapping Arrays of Numbers

```jsx
import React from 'react'

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>)
  return list
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <h1>Numbers</h1>
          <ul>
            <Numbers numbers={numbers} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
```

### Mapping an Array of Arrays

```jsx
import React from 'react'

const Skills = ({ skills }) => {
  const skillList = skills.map(([name, level], index) => {
    return (
      <li key={index}>
        {name} - Level: {level}
      </li>
    )
  })

  return <ul>{skillList}</ul>
}

const App = () => {
  const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
  ]

  return (
    <>
      <Skills skills={skills} />
    </>
  )
}

export default App
```

### Mapping an Array of Objects

```jsx
import React from 'react'

const Countries = ({ countries }) => {
  const countryList = countries.map(({ name, city }, index) => {
    return (
      <li key={index}>
        <h1>
          {name} : {city}
        </h1>
      </li>
    )
  })

  return <ul>{countryList}</ul>
}

const App = () => {
  const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavik' },
  ]

  return (
    <>
      <Countries countries={countries} />
    </>
  )
}

export default App
```

## Keys in Mapping Arrays

Keys help React identify which items have changed, been added, or been removed. Keys should be assigned to elements inside an array so React can give each element a stable identity.

The key should be unique. Most of the time, data comes with an `id`, and we can use that as the key. If we do not pass a key to React while mapping, React will show a warning in the browser. If the data does not have an `id`, we should find another way to create a unique identifier for each element.

### Syntax

```jsx
const Numbers = ({ numbers }) => {
  const list = numbers.map((num) => <li key={num}>{num}</li>)
  return list
}
```

## Exercises

### Level 1

1. Why do you need to map an array?
2. Why do we need keys when mapping an array?
3. What is the importance of destructuring in your code?
4. Does destructuring make your code cleaner and easier to read?
