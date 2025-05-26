import WeatherIcon from "./WeatherIcon"


function WeatherCard({data, isRaining}) {
  return (
    <div>
        <div className="flex flex-col gap-2 bg-white/40 backdrop-blur-xs
         rounded-lg shadow-lg p-6 max-w-sm mx-auto mt-10
         w-105 md:w-120">
            <div>
                <h2 className="font-semibold text-2xl text-shadow-lg text-shadow-blue text-blue-900
                tracking-wide">{data.city}</h2>
                <p className="text-gray-700">{data.time}, {data.description}</p>
            </div>

            <div className="flex justify-around items-center">
                <div>
                    <span className="text-6xl font-semibold text-slate-900">{data.temperature}°</span><span className="text-gray-700 text-2xl">C</span>
                </div>
                
                <WeatherIcon iconUrl = {isRaining ? "../assets/rain.svg" : "../assets/sun_cloud.svg"}/>
            </div>

            <div className="flex gap-4 text-gray-700 text-md">
                <p>Feels like: {data.feelsLike}°</p>
                <p>Humidity: {data.humidity}</p>
                <p>Wind: {data.windSpeed} km/h</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard