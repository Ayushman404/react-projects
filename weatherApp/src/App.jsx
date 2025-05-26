import { useEffect, useRef, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchHeader from './components/SearchHeader'


function App() {
  const [searchQuery, setSearchQuery] = useState('Patna, India');
  const searchRef = useRef(null);
  const [isRaining, setIsRaining] = useState(false);
  const [isNight, setIsNight] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  // const query = 'Patna, India';

  
  const checkIsNight = (time) => {
    const hour = new Date(time).getHours();
    return hour < 6 || hour >= 18; // Assuming night is from 6 PM to 6 AM
  }
  const checkIsRaining = (description) => {
    return description.toLowerCase().includes('rain');
  }


  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setData({
          city: data.location.name,
          time: data.location.localtime,
          description: data.current.weather_descriptions[0] || 'No description available',
          temperature: Math.round(data.current.temperature),
          feelsLike: Math.round(data.current.feelslike),
          humidity: data.current.humidity,
          windSpeed: Math.round(data.current.wind_speed),
          // icon: isRaining ? "../assets/rain.svg" : "../assets/sun_cloud.svg",
        });

        setIsNight(checkIsNight(data.location.localtime));
        setIsRaining(checkIsRaining(data.current.weather_descriptions[0]));
        
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    
    const handleSearch = (e) => {
      e.preventDefault();
      setSearchQuery(searchRef.current.value);
      searchRef.current.value = '';
      fetchWeatherData(searchQuery);
      console.log(searchQuery); 
    };
    
    const [data, setData] = useState({
      city: 'Patna',
      time: '2023-10-01 12:00',
      description: 'Clear',
      temperature: 30,
      feelsLike: 28,
      humidity: 60,
      windSpeed: 10,
      // icon: isRaining ? "../assets/rain.svg" : "../assets/sun_cloud.svg",
    });
    
    useEffect(()=>{
      fetchWeatherData(`${searchQuery}`);
    }, [searchQuery])

    // setIsRaining(true);  
    const bg_image = isRaining ? 'rain_bg.jpg' : 'sunny_bg.jpg';
  return (
    <>
      <div className={`w-full h-screen bg-[url(../assets/${bg_image})] bg-cover bg-center`}>

        <h1 className='text-center text-yellow-500 font-bold text-5xl py-5 text-shadow-black
        text-shadow-md light:text-shadow-white'>Weather Now</h1>

        <SearchHeader inputRef = {searchRef} handleSearch= {handleSearch}/>
        <WeatherCard data = {data} isRaining = {isRaining}/>
      </div>
    
    </>
  )
}

export default App
