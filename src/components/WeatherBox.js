import React from 'react'
import { FaTemperatureHalf } from "react-icons/fa6";

const WeatherBox = ({ weather }) => {
  console.log('weather : ', weather);
  let weatherIconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon[0].icon}@2x.png`;
  }

  const getWeatherImageUrl = (weatherData) => {
    if (weatherData && weatherData.length>0) {
      const weatherDescription = weatherData[0].main.toLowerCase();
      switch (weatherDescription) {
        case 'clear':
          return './images/clear_sky.svg';
        case 'clouds':
          return './images/broken_clouds.svg';
        case 'rain':
          return './images/shower_rain.svg';
        case 'drizzle':
          return './images/shower_rain.svg';
        case 'thunderstorm':
          return './images/thunderstorm.svg';
        case 'snow':
          return './images/snow.svg';
        case 'mist':
          return './images/mist.svg';
        case 'smoke':
          return './images/mist.svg';
        case 'haze':
          return './images/mist.svg';
        case 'dust':
          return './images/mist.svg';
        case 'fog':
          return './images/mist.svg';
        case 'sand':
          return './images/mist.svg';
        case 'ash':
          return './images/mist.svg';
        case 'squall':
          return './images/mist.svg';
        case 'tornado':
          return './images/mist.svg';
        default:
          return weatherIconUrl(weatherData); // 알 수 없는 날씨에 대한 기본 이미지 설정
      }
    } else {
      return './images/default.png'; // 기본 이미지 설정 (날씨 정보가 없을 경우)
    }
  }

  return (
    <div className='WeatherBox'>
      {/* <h3>위치1{weather && weather.name}</h3>
      <h3>위치2{weather?.name}</h3> */}
      <h3>
        {/* <img src={
          weatherIconUrl(weather ? weather.weather : '정보를 가져올 수 없음')
        } alt="weather icon" /> */}
        <img src={process.env.PUBLIC_URL + (weather ? getWeatherImageUrl(weather.weather) : '날씨 정보를 가져올 수 없음')} alt="weather image" 
        style={{
          width:"150px"
        }} />
      </h3>
      <h3>{weather ? weather.name : '정보를 표시할 수 없음'}</h3>
      <div>
        <h3>{weather?.weather[0].description}</h3>
        <h3><FaTemperatureHalf className='temperature'/>{Math.floor(weather?.main.temp)}˚</h3>
      </div>
      {/* 소수점 없애기 Math.floor() */}
      <h3>Wind : {weather?.wind.speed}</h3>
    </div>
  )
}

export default WeatherBox