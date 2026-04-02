import React from 'react'
import image from './assets/assets_image.jpg'

const Profile = () => {
  return (
    <div className="flex justify-center mt-6">
      <img
        src={image}
        alt="profile"
        className="w-44 h-44 rounded-full object-cover border-4 border-sky-400 shadow-lg"
      />
    </div>
  )
}

const Bio = () => {
  const viratKohliRecords = {
    name: "Virat Kohli",
    country: "India",
    role: "Top-order batsman",

    formats: {
      test: { matches: 138, runs: 9734 },
      odi: { matches: 290, runs: 15428 },
      t20i: { matches: 115, runs: 4128 }
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 mt-6">

      <h1 className="text-2xl font-bold text-center text-gray-800">
        {viratKohliRecords.name}
      </h1>

      <p className="text-center text-gray-500 mb-6">
        {viratKohliRecords.role} • {viratKohliRecords.country}
      </p>

      <div className="space-y-4">
        {Object.entries(viratKohliRecords.formats).map(([format, stats]) => (
          <div
            key={format}
            className="bg-sky-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-sky-600 mb-2">
              {format.toUpperCase()}
            </h3>

            <div className="flex justify-between text-sm text-gray-700">
              <span>Runs: {stats.runs}</span>
              <span>Matches: {stats.matches}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="text-center mt-8 text-gray-500 text-sm">
      © 2026 All Rights Reserved
    </footer>
  )
}

const App = () => {
  return (
    <div className="bg-gradient-to-br from-sky-100 to-blue-200 min-h-screen pb-10">
      <Profile />
      <Bio />
      <Footer />
    </div>
  )
}

export default App