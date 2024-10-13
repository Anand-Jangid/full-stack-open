import { useEffect, useState } from "react";
import SearchCountry from "./Components/SearchCountry";
import CountryService from "./services/country.service";
import CountryDetail from "./Components/CountryDetail";
import Error from "./Components/Error";
import CountryWeather from "./Components/CountryWeather";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({});
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({
    city: "Helsinki",
    temperature: -3.73,
    wind: 1.34
  });


  const hook = () => {
    if(!country) return;
    CountryService
      .getCountryData(country)
      .then(result => {
        setCountryData({
          name: result.name.common,
          capital: result.capital[0],
          area: result.area,
          languages: result.languages,
          image: result.flags.png
        });
        setError("")
      })
      .catch(error => {
        console.log(error);
        setError("no country with given name");
        setCountryData({})
      });
  }

  useEffect(hook, [country]);
  
  return (
    <div>
      <SearchCountry setCountry={setCountry} text={country}/>
      <Error error={error} />
      <CountryDetail countryData={countryData}/>
      <CountryWeather weather={weather}/>
    </div>
  );
}

export default App
