import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [products, setProducts] = useState([])

  // GET REQUEST
  const getProducts = async () => {
    try {
      const res = await axios.get(
        'https://dummyjson.com/products'
      )

      setProducts(res.data.products)

    } catch (err) {
      console.log(err)
    }
  }

  // POST REQUEST
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

  // PUT REQUEST
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

  // PATCH REQUEST
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

  // DELETE REQUEST
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

            <p>
              Price: ${product.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App