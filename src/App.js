
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import GridLoader from "react-spinners/GridLoader";
import './styles/App.css';

function App() {
  let [weather, setWeather] = useState(null);
  let [city, setCity] = useState('');
  let cities = ['paris', 'new york', 'tokyo', 'jeju'];
  let [loading, setLoding] = useState(true);

  let getCurrentLocation = () => {
    console.log('getCurrentLocation');
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      console.log(lat, lon);
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  let getWeatherByCurrentLocation = async (lat, lon) => {
    let apiKey = '5308c8cc7e25017d5712815584e9e989';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    setLoding(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('data : ', data);
    setWeather(data);
    setLoding(false);
  };

  let getWeatherByCity = async () => {
    let apiKey = '5308c8cc7e25017d5712815584e9e989';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    setLoding(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
    setWeather(data);
    setLoding(false);
  }








  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
      console.log(getWeatherByCity)
    }
  }, [city]);


  return (
    <div className="App">
      {
        loading ?
          <GridLoader
            className='GridLoader'
            color="#fff"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
          <div className='WeatherWrap'>
            <WeatherBox weather={weather} />
            <WeatherButton cities={cities} setCity={setCity} weather={weather} setWeather={setWeather}/>
          </div>
      }
    </div>
  );
}

export default App;
