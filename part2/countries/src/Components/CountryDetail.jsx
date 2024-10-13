import CountryLanguages from "./CountryLanguages";

const CountryDetail = ({countryData}) => {
    if(!countryData || Object.keys(countryData).length === 0) return null;
    return (
        <div>
            <h1>{countryData.name}</h1>
            <br />
            <p>capital: {countryData.capital}</p>
            <p>area: {countryData.area}</p>
            <CountryLanguages languages={countryData.languages}/>
            <img src={countryData.image} alt="country flag" />
        </div>
    );
}

export default CountryDetail