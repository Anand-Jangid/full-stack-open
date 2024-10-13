const Filter = ({filterName, setFilterName}) => {
    return (
        <div>
            filter shown with <input type="text" value={filterName} onChange={(event) => setFilterName(event.target.value)}/>
        </div>
    );
}

export default Filter