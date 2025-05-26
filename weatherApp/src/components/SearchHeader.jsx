import React from 'react'

function SearchHeader({ inputRef, handleSearch }) {
  return (
    <div>
        <div className="bg-white/40 backdrop-blur-xs rounded-lg shadow-lg p-6 max-w-md mx-auto mt-10">
            {/* <h1 className=" text-center text-3xl font-bold text-gray-800 mb-4">Search Weather</h1> */}
            <form className="flex items-center">
            <input
                type="text"
                ref={inputRef}
                placeholder="Enter city name"
                className="flex-grow p-2 border border-gray-300 bg-linear-to-b from-white to-blue-200  rounded-l-lg focus:outline-none"
            />
            <button
                type="submit"
                onClick={handleSearch}
                className={`bg-yellow-500 text-white text-shadow-lg text-shadow-amber-800 px-4 py-2
                     rounded-r-lg shadow-md shadow-amber-200 hover:bg-yellow-600 cursor-pointer`}
            >
                Search
            </button>
            </form>
        </div>
    </div>
  )
}

export default SearchHeader