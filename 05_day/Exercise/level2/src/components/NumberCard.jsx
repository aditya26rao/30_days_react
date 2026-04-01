import React from 'react'

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

const NumberCard = ({ number }) => {
  let bgColor = 'bg-yellow-400'

  if (number % 2 === 0) {
    bgColor = 'bg-green-400'
  }

  if (primeNumbers.includes(number)) {
    bgColor = 'bg-red-400'
  }

  return (
    <div className={`${bgColor} flex h-24 items-center justify-center text-3xl font-bold text-white md:h-32 md:text-5xl`}>
      <span>{number}</span>
    </div>
  )
}

export default NumberCard
