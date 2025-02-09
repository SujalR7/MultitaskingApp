import React, { useState, useEffect } from 'react';
import './weather.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faMoon, faTint, faWind, faThermometerHalf, faMapMarkerAlt, faClock, faSearch, faExclamationTriangle, faCompress, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import icons

function WeatherApp() {
  const [city, setCity] = useState('pune');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getCountry = (co) => {
    return new Intl.DisplayNames([co], { type: 'region' }).of(co);
  };

  const getDateTime = (dt) => {
    const currdate = new Date(dt * 1000);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(currdate);
  };

  const getTime = (dt) => {
    const currdate = new Date(dt * 1000);
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(currdate);
  };

  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3fc427311a1485047ba91cedfdea28f2`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city_name.value;
    setCity(cityName);
    e.target.elements.city_name.value = "";
  };

  if (error) {
    return (
      <div className="error-container"> {/* Container for error message */}
        <FontAwesomeIcon icon={faExclamationTriangle} className="error-icon" /> {error}
      </div>
    );
  }

  if (!weatherData) {
    return <div className="loading">Loading...</div>; // Loading message with class
  }

  const { main, name, weather, wind, sys, dt } = weatherData;

  return (
    <div className="weather-container">
        <form className="weather-search" onSubmit={handleSubmit}>
        <div className="search-bar-container">
          <input type="text" className="city_name" placeholder="Enter City" name="city_name" />
          </div>
        </form>
      <div className="weather-info"> {/* Container for weather info */}
        <div className="location-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          <span className="weather_city">{name}, {getCountry(sys.country)}</span>
        </div>

        <div className="date-time">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
          {getDateTime(dt)}
        </div>

        <div className="weather-overview">
          <div className="temperature">
            <FontAwesomeIcon icon={faThermometerHalf} className="temp-icon" />
            {(main.temp - 273.15).toFixed(2)}&#176;
          </div>
          <div className="weather-icon">
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt="Weather Icon" />
          </div>
          <div className="forecast">
            <FontAwesomeIcon icon={faCloud} className="forecast-icon" /> {weather[0].main}
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <FontAwesomeIcon icon={faThermometerHalf} className="details-icon" /> Min: {(main.temp_min - 273.15).toFixed()}&#176;
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faThermometerHalf} className="details-icon" /> Max: {(main.temp_max - 273.15).toFixed()}&#176;
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faThermometerHalf} className="details-icon" /> Feels Like: {(main.feels_like - 273.15).toFixed()}&#176;
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faTint} className="details-icon" /> Humidity: {main.humidity}%
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faWind} className="details-icon" /> Wind: {wind.speed} m/s
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faCompress} className="details-icon" /> Pressure: {main.pressure} hPa
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faSun} className="details-icon" /> Sunrise: {getTime(sys.sunrise)}
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faMoon} className="details-icon" /> Sunset: {getTime(sys.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;