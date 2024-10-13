const CountryWeather = ({weather}) => {
    if(!weather || Object.values(weather).length === 0) return null;
    return (
        <div>
            <h2>Weather in {weather.city}</h2>
            <p>temperature {weather.temperature} Celcius</p>
            <p>wind {weather.wind} m/s</p>
        </div>
    );
}

export default CountryWeather;