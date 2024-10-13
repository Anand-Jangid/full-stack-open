const CountryLanguages = ({languages}) => {
    if(!languages) return null;
    return (
        <div>
            <h2>Languages: </h2>
            <ul>
                {Object.values(languages).map(language => <li key={language}>{language}</li>)}
            </ul>
        </div>
    );
}

export default CountryLanguages;