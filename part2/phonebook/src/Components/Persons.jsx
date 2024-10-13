const Persons = ({showContancts, deleteContactHandler}) => {
    return (
        <div>
            {showContancts.map((person) => 
                <p key={person.name}>
                    {person.name} {person.number}
                    <button onClick={() => deleteContactHandler(person)}>Delete</button>
                </p>
            )}
        </div>
    );
}

export default Persons