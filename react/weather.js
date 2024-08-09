import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function WeatherDashboard() {
  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    'New York': { 
      temperature: '22°C', 
      humidity: '56%', 
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': { 
      temperature: '15°C', 
      humidity: '70%', 
      windSpeed: '20 km/h' 
    },
  };

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [previousSearches, setPreviousSearches] = useState([]);

  const handleSearch = () => {
    const cityWeather = mockWeatherData[city];
    if (cityWeather) {
      setWeatherInfo(cityWeather);
      setError(null);
      if (!previousSearches.includes(city)) {
        setPreviousSearches([...previousSearches, city]);
      }
    } else {
      setWeatherInfo(null);
      setError('City not found');
    }
  }

  const handlePreviousSearchClick = (city) => {
    const cityWeather = mockWeatherData[city];
    setWeatherInfo(cityWeather);
    setError(null);
  }

  return (
    <div>
      <input 
        type="text" 
        id="citySearch" 
        placeholder="Search for a city..." 
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      {weatherInfo ? (
        <div id="weatherData">
          <div>Temperature: {weatherInfo.temperature}</div>
          <div>Humidity: {weatherInfo.humidity}</div>
          <div>Wind Speed: {weatherInfo.windSpeed}</div>
        </div>
      ) : (
        error && <div id="weatherData">{error}</div>
      )}

      <div id="previousSearches">
        {previousSearches.map((city, index) => (
          <button
            key={index}
            className="previousSearchButton"
            onClick={() => handlePreviousSearchClick(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WeatherDashboard />);