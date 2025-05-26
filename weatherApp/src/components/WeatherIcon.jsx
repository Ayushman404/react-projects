import React from 'react'

function WeatherIcon({iconUrl}) {
  return (
    <div>
        <div className="flex items-center justify-center">
            <img
            src={iconUrl}
            alt="Weather Icon"
            className="w-20 h-20 md:w-25 md:h-25 lg:w-35 lg:h-35"
            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.9))' }}
            />
        </div>
    </div>
  )
}

export default WeatherIcon