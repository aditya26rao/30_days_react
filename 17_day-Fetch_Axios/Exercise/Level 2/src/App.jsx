import React, { useEffect, useState } from "react";

const App = () => {

  const [weight, setWeight] = useState(0)
  const [life, setLife] = useState(0)
  const [breeds, setBreeds] = useState(0)

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => res.json())
      .then((data) => {

        setBreeds(data.length)

        // Average Weight
        let totalWeight = 0

        data.forEach((cat) => {

          const metricWeight =
            cat.weight.metric.split(' - ')

          const min =
            Number(metricWeight[0])

          const max =
            Number(metricWeight[1])

          totalWeight += (min + max) / 2
        })

        const averageWeight =
          (totalWeight / data.length).toFixed(2)

        setWeight(averageWeight)

        // Average Life Span
        let totalLifeSpan = 0

        data.forEach((cat) => {

          const life =
            cat.life_span.split(' - ')

          const min =
            Number(life[0])

          const max =
            Number(life[1])

          totalLifeSpan += (min + max) / 2

        })

        const averageLifeSpan =
          (totalLifeSpan / data.length).toFixed(2)

        setLife(averageLifeSpan)

      })
      .catch((error) => console.log(error))

  }, [])

  return (
    <>

      <h1>Cat API Statistics</h1>

      <h2>
        Total Breeds: {breeds}
      </h2>

      <h2>
        Average Metric Weight: {weight} KG
      </h2>

      <h2>
        Average Life Span: {life} Years
      </h2>

    </>
  )
}

export default App