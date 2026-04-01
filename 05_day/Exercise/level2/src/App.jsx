import React from 'react'
import Header from './components/Header'
import NumberCard from './components/NumberCard'

const App = () => {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31,
  ]

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-center">
      <div className="mx-auto max-w-6xl">
        <Header />
        <section className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-8">
          {numbers.map((number) => (
            <NumberCard key={number} number={number} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
