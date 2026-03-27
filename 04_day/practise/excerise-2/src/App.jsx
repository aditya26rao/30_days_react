import React from 'react'

const Main = () => {
    return (
        <div className="bg-sky-400 min-h-screen flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">

                <h3 className="font-bold text-black text-2xl text-center mb-2">
                    Hey React 👋
                </h3>

                <p className="text-center text-gray-600 mb-6">
                    How's your learning going on!!
                </p>

                <div className="flex flex-col gap-4">

                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Enter first name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Enter last name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Enter email"
                        />
                    </div>

                    <button className="bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition">
                        Submit
                    </button>

                </div>

            </div>
        </div>
    )
}

const App = () => {
    return <Main />
}

export default App