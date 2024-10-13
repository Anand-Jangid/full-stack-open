const PersonForm = ({setNewName, newName, setNewNumber, newNumber, addName}) => {
    return (
        <form>
            <div>name: <input type="text" onChange={(event) => setNewName(event.target.value)} value={newName}/></div>
            <br />
            <div>number: <input type="tel" onChange={(event) => setNewNumber(event.target.value)} value={newNumber} /></div>
            <br />
            <button type="submit" onClick={addName}>Add</button>
        </form>
    );
}

export default PersonForm