import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ setWeatherData }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [city, setCity] = useState('')

  const handleSearch = async () => {
    if (!city) {
      return toast.error("Please enter a city name!", { autoClose: 1000 })
    }

    try {
      const response = await axios.post(`${backendUrl}/api/getWeather`, { city })
      setWeatherData(response.data.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
      toast.error("City Not Recognized", { autoClose: 1000 })
    }
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
        Search Weather by City
      </h1>

      <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-xl px-4 py-3 shadow-md">
        <FaSearch className="text-white/70 mr-3 text-lg" />
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-transparent outline-none text-white placeholder-white/60 w-64 md:w-80 font-semibold"
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
