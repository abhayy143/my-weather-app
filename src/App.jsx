import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Open-Meteo API URL (no key needed)
  const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
  
  const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search';

  // Function to adjust temperature unit
  const adjustTemperatureUnit = (tempC) => {
    return tempC.toFixed(1); // Adjust to one decimal place
  };

  const getWeatherDescriptionAndIcon = (weatherCode) => {
    let description = 'Unknown';
    let icon = '❓'; 

    // Mapping Open-Meteo weather codes to descriptions and icons
    if (weatherCode === 0) {
      description = 'Clear sky';
      icon = '☀️';
    } else if (weatherCode >= 1 && weatherCode <= 3) {
      description = 'Partly cloudy';
      icon = '🌤️';
    } else if (weatherCode >= 45 && weatherCode <= 48) {
      description = 'Foggy';
      icon = '🌫️';
    } else if (weatherCode >= 51 && weatherCode <= 57) {
      description = 'Drizzle';
      icon = '🌧️';
    } else if (weatherCode >= 61 && weatherCode <= 67) {
      description = 'Rain';
      icon = '☔';
    } else if (weatherCode >= 71 && weatherCode <= 77) {
      description = 'Snow';
      icon = '❄️';
    } else if (weatherCode >= 80 && weatherCode <= 82) {
      description = 'Rain showers';
      icon = '⛈️';
    } else if (weatherCode >= 85 && weatherCode <= 86) {
      description = 'Snow showers';
      icon = '🌨️';
    } else if (weatherCode >= 95 && weatherCode <= 99) {
      description = 'Thunderstorm';
      icon = '⚡';
    }
    return { description, icon };
  };


  //Function to fetch the weather data
  const fetchWeatherForCity = async (cityName) => {
    if (!cityName) {
      setError('Please enter a city name.');
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      //Geocoding (City Name to Lat/Lon)
      const geocodingResponse = await fetch(
        `${NOMINATIM_BASE_URL}?q=${encodeURIComponent(cityName)}&format=json&limit=1&accept-language=en`,
        {
          headers: {
            'User-Agent': 'ReactWeatherApp/1.0 (abhaychetri22@gmail.com)' 
          }
        }
      );

      if (!geocodingResponse.ok) {
        throw new Error(`Geocoding error: ${geocodingResponse.statusText}`);
      }

      const geoData = await geocodingResponse.json();

      if (geoData.length === 0) {
        throw new Error(`Could not find coordinates for "${cityName}".`);
      }

      const { lat, lon, display_name } = geoData[0]; 

      const weatherResponse = await fetch(
        `${OPEN_METEO_BASE_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=celsius&wind_speed_unit=ms&timezone=auto&forecast_days=1`
      );

      if (!weatherResponse.ok) {
        throw new Error(`Weather API error: ${weatherResponse.statusText}`);
      }

      const weatherApiData = await weatherResponse.json();

      if (!weatherApiData.current) {
        throw new Error('No current weather data available for this location.');
      }

      // Extracting relevant data from the API response
      const {
        temperature_2m,
        relative_humidity_2m,
        wind_speed_10m,
        weather_code
      } = weatherApiData.current;

      const { description, icon } = getWeatherDescriptionAndIcon(weather_code);

      setWeatherData({
        name: display_name, 
        temperature: adjustTemperatureUnit(temperature_2m),
        description: description,
        humidity: relative_humidity_2m,
        windSpeed: wind_speed_10m,
        icon: icon 
      });

    } catch (err) {
      console.error('Error in fetchWeatherForCity:', err);
      setError(err.message || 'Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchWeatherForCity('Guwahati'); // Default city added for initial load
  }, []); 

  const handleCityInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    fetchWeatherForCity(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherForCity(city);
    }
  };

  return (
    <div className="weather-container">
      <h1>Abbie Weather</h1>
      <div className="search-box">
        <input
          type="text"
          id="cityInput"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityInputChange}
          onKeyPress={handleKeyPress}
        />
        <button id="searchButton" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      <div id="weatherInfo" className="weather-info">
        {loading && <p>Loading weather data...</p>}

        {error && <p className="error-message">{error}</p>}

        {weatherData && !loading && !error && (
          <>
            <h2>{weatherData.name}</h2>
            <p className="weather-icon-emoji">{weatherData.icon}</p> { }
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Description: {weatherData.description}</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          </>
        )}

        {!weatherData && !loading && !error && (
          <p>Enter a city to get weather information.</p>
        )}
      </div>
    </div>
  );
}

export default App;