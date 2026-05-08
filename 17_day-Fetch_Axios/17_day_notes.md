# Fetch and Axios

## 1) Fetch

Fetch is a built-in JavaScript API used to make HTTP requests.

- No installation is required.
- It returns a Promise.
- It is used for GET, POST, PUT, PATCH, and DELETE requests.
- It requires manual conversion to JSON using `.json()`.
- It does not automatically throw errors for HTTP errors like 404 or 500.
- It is supported by most modern browsers.

### Basic Syntax

```jsx
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

We can implement all types of HTTP requests using Fetch.

### 1) GET: Get all data or a single item

```jsx
import React, { useState, useEffect } from 'react'

const App = () => {
  const [cart, setCart] = useState([])

  const handleData = () => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((data) => setCart(data.carts))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <li>{item.id}</li>
          {item.products.map((product) => (
            <img
              src={product.thumbnail}
              alt={product.title}
              key={product.id}
              width="150"
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default App
```

### 2) POST: Create new data

```jsx
import React, { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState({})

  const handlePost = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'iPhone 17 Pro Max',
        price: 1999,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCart(data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h2>{cart.title}</h2>
      <h3>{cart.price}</h3>
      <button onClick={handlePost}>Add Product</button>
    </>
  )
}

export default App
```

### 3) PUT: Complete update

```jsx
import React, { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState({})

  const handlePut = () => {
    fetch('https://dummyjson.com/products/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'iPhone 15 Pro Max',
        price: 1999,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCart(data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h2>{cart.title}</h2>
      <h3>{cart.price}</h3>
      <button onClick={handlePut}>Update Product</button>
    </>
  )
}

export default App
```

### 4) PATCH: Partial update

```jsx
import React, { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState({})

  const handlePatch = () => {
    fetch('https://dummyjson.com/products/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'iPhone 18 Pro Max',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCart(data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h2>{cart.title}</h2>
      <h3>{cart.price}</h3>
      <button onClick={handlePatch}>Update Product</button>
    </>
  )
}

export default App
```

### 5) DELETE: Delete data

```jsx
import React, { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState({})

  const handleDelete = () => {
    fetch('https://dummyjson.com/products/1', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCart(data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h2>{cart.title}</h2>
      <h3>{cart.price}</h3>

      {cart.isDeleted && <p>Product deleted successfully</p>}

      <button onClick={handleDelete}>Delete Product</button>
    </>
  )
}

export default App
```

## Real-Time API GET Call

```jsx
import React, { useState, useEffect } from 'react'

const Country = ({
  country: {
    name,
    capital,
    flags,
    languages,
    population,
    currencies,
  },
}) => {
  return (
    <div>
      <img
        src={flags.png}
        alt={name.common}
        width="200"
      />

      <h2>{name.common}</h2>

      <p>
        Capital:
        {capital ? capital[0] : 'No Capital'}
      </p>

      <p>
        Languages:
        {languages
          ? Object.values(languages).join(', ')
          : 'No Language'}
      </p>

      <p>
        Population:
        {population.toLocaleString()}
      </p>

      <p>
        Currency:
        {currencies
          ? Object.values(currencies)
              .map((currency) => currency.name)
              .join(', ')
          : 'No Currency'}
      </p>
    </div>
  )
}

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,flags,languages,population,currencies'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Countries: {data.length}</h1>

      {data.map((country, index) => (
        <Country
          key={index}
          country={country}
        />
      ))}
    </div>
  )
}

export default App
```

## 2) Axios

Axios is a third-party package, so we need to install it using npm. It is one of the most popular ways to make HTTP requests such as GET, POST, PUT, PATCH, and DELETE.

```bash
npm install axios
```

### 1) GET

```jsx
axios.get('https://dummyjson.com/products')
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => console.log(error))
```

### 2) POST

```jsx
axios.post(
  'https://dummyjson.com/products/add',
  {
    title: 'iPhone 17 Pro Max',
    price: 999,
  }
)
.then((res) => {
  console.log(res.data)
})
.catch((error) => console.log(error))
```

### 3) PUT

```jsx
axios.put(
  'https://dummyjson.com/products/1',
  {
    title: 'Samsung S25',
    price: 2000,
  }
)
.then((res) => {
  console.log(res.data)
})
.catch((error) => console.log(error))
```

### 4) PATCH

```jsx
axios.patch(
  'https://dummyjson.com/products/1',
  {
    price: 3000,
  }
)
.then((res) => {
  console.log(res.data)
})
.catch((error) => console.log(error))
```

### 5) DELETE

```jsx
axios.delete('https://dummyjson.com/products/1')
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => console.log(error))
```

## Real-Time Example Using Axios

```jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])

  // GET request
  const getProducts = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products)
      })
      .catch((error) => console.log(error))
  }

  // POST request
  const addProduct = () => {
    axios
      .post(
        'https://dummyjson.com/products/add',
        {
          title: 'iPhone 17 Pro Max',
          price: 999,
        }
      )
      .then((res) => {
        console.log('POST:', res.data)

        setProducts([
          ...products,
          res.data,
        ])
      })
      .catch((error) => console.log(error))
  }

  // PUT request
  const updateProduct = () => {
    axios
      .put(
        'https://dummyjson.com/products/1',
        {
          title: 'Samsung S25 Ultra',
          price: 2000,
        }
      )
      .then((res) => {
        console.log('PUT:', res.data)
      })
      .catch((error) => console.log(error))
  }

  // PATCH request
  const patchProduct = () => {
    axios
      .patch(
        'https://dummyjson.com/products/1',
        {
          price: 3000,
        }
      )
      .then((res) => {
        console.log('PATCH:', res.data)
      })
      .catch((error) => console.log(error))
  }

  // DELETE request
  const deleteProduct = () => {
    axios
      .delete('https://dummyjson.com/products/1')
      .then((res) => {
        console.log('DELETE:', res.data)

        const filteredProducts =
          products.filter(
            (product) => product.id !== 1
          )

        setProducts(filteredProducts)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Axios CRUD Operations</h1>

      <button onClick={getProducts}>
        GET Products
      </button>

      <button onClick={addProduct}>
        POST Product
      </button>

      <button onClick={updateProduct}>
        PUT Product
      </button>

      <button onClick={patchProduct}>
        PATCH Product
      </button>

      <button onClick={deleteProduct}>
        DELETE Product
      </button>

      <hr />

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
          }}
        >
          <h2>{product.title}</h2>

          <p>Price: ${product.price}</p>

          <img
            src={product.thumbnail}
            alt={product.title}
            width="150"
          />
        </div>
      ))}
    </div>
  )
}

export default App
```

## Using Async and Await

```jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])

  // GET request
  const getProducts = async () => {
    try {
      const res = await axios.get(
        'https://dummyjson.com/products'
      )

      setProducts(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  // POST request
  const addProduct = async () => {
    try {
      const res = await axios.post(
        'https://dummyjson.com/products/add',
        {
          title: 'iPhone 17 Pro Max',
          price: 999,
          thumbnail:
            'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
        }
      )

      console.log('POST:', res.data)

      setProducts((prevProducts) => [
        ...prevProducts,
        res.data,
      ])
    } catch (error) {
      console.log(error)
    }
  }

  // PUT request
  const updateProduct = async () => {
    try {
      const res = await axios.put(
        'https://dummyjson.com/products/1',
        {
          title: 'Samsung S25 Ultra',
          price: 2000,
        }
      )

      console.log('PUT:', res.data)

      const updatedProducts =
        products.map((product) =>
          product.id === 1
            ? res.data
            : product
        )

      setProducts(updatedProducts)
    } catch (error) {
      console.log(error)
    }
  }

  // PATCH request
  const patchProduct = async () => {
    try {
      const res = await axios.patch(
        'https://dummyjson.com/products/1',
        {
          price: 3000,
        }
      )

      console.log('PATCH:', res.data)

      const patchedProducts =
        products.map((product) =>
          product.id === 1
            ? {
                ...product,
                price: res.data.price,
              }
            : product
        )

      setProducts(patchedProducts)
    } catch (error) {
      console.log(error)
    }
  }

  // DELETE request
  const deleteProduct = async () => {
    try {
      const res = await axios.delete(
        'https://dummyjson.com/products/1'
      )

      console.log('DELETE:', res.data)

      const filteredProducts =
        products.filter(
          (product) => product.id !== 1
        )

      setProducts(filteredProducts)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial',
      }}
    >
      <h1>Axios CRUD Operations</h1>

      <button onClick={getProducts}>
        GET Products
      </button>

      <button onClick={addProduct}>
        POST Product
      </button>

      <button onClick={updateProduct}>
        PUT Product
      </button>

      <button onClick={patchProduct}>
        PATCH Product
      </button>

      <button onClick={deleteProduct}>
        DELETE Product
      </button>

      <hr />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              boxShadow:
                '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />

            <h2>{product.title}</h2>

            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
```

## Exercises

1. What is an HTTP request?
2. What are the most common HTTP request methods?
3. What is Fetch?
4. What is Axios?
5. What is the difference between Fetch and Axios?
6. Do you prefer Fetch or Axios for making HTTP requests?
