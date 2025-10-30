import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import WeatherCard from '../components/WeatherCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import ForecastCard from '../components/ForecastCard.jsx'
const App = () => {
  const [weatherData, setWeatherData] = useState({})
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-10 bg-gradient-b from-sky-400 to-blue-600 text-white'>
      <h1 className='text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg'>WEATHERLY</h1>
      <SearchBar setWeatherData={setWeatherData} />
      <div className='mt-8 w-full max-w-md'>
        <WeatherCard weatherData={weatherData} />
      </div>
      <ForecastCard />
    </div>
  )
}

export default App 