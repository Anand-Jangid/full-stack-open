const SearchCountry = ({setCountry, text}) => {
    const changeCountry = (event) => {
        console.log("country========>", event.target.value);
        setCountry(event.target.value);
    }

    return (
        <div>
            find countries 
            <input type="text" onChange={changeCountry} value={text}/>
        </div>
    );
} 

export default SearchCountry;