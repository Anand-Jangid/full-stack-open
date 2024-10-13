import axios from "axios";

const baseUrlOpenWeather = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherData = (city) => {
    const request = axios.get(baseUrlOpenWeather + `?city=${city}&appid=`);
}