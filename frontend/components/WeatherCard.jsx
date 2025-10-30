import React from 'react'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.city) return null

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`

  return (
    <div className="flex justify-center items-center w-full mt-10 px-4">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl w-full max-w-sm sm:max-w-md transition-transform hover:scale-105">

        {/* Weather Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/30 rounded-full p-3 shadow-inner">
            <img
              src={iconUrl}
              alt="Weather Icon"
              className="w-20 h-20 drop-shadow-lg"
            />
          </div>
        </div>

        {/* Location */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          📍 {weatherData.city}, {weatherData.country}
        </h1>

        {/* Condition */}
        <h2 className="text-lg sm:text-xl italic mt-1 text-gray-100">
          {weatherData.description?.toUpperCase() || 'Weather Update'}
        </h2>

        {/* Temperature */}
        <p className="text-5xl sm:text-6xl font-extrabold text-white mt-4">
          {weatherData.temperature}°C
        </p>

        {/* Extra Info */}
        <div className="flex justify-around mt-6 text-sm sm:text-base font-semibold">
          <p className="text-blue-200">💧 {weatherData.humidity}%</p>
          <p className="text-green-200">💨 {weatherData.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
