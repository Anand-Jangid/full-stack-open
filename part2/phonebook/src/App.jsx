import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm"
import  Persons from "./Components/Persons";
import Notification from "./Components/Notification";
import ContactService from "./services/contacts";


const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [notification, setNotification] = useState('');


  const addContact = (event) => {
    event.preventDefault()
    const sameName = persons.find((person) => person.name === newName);
    if(sameName){
      if(window.confirm(`${sameName.name} is already added to phonebook, replace the old number with new one?`)){
        const contact = {
          name: newName,
          number: newNumber
        };
        ContactService
          .updateContact(contact, sameName.id)
          .then(contactUpdated => {
            setPersons(persons.map(person => person.id != contactUpdated.id ? person : contactUpdated));
            setNewName('');
            setNewNumber('');
            setNotification(`contact ${contactUpdated.name} is updated.`);
            setTimeout(()=> setNotification(''), 2000);
          })
          .catch(error => {
            console.log("error===========>", error);
            setPersons(persons.filter(person => person.id != sameName.id));
            setNewName('');
            setNewNumber('');
            setNotification(`contact ${contact.name} is already deleted from DB.`);
            setTimeout(()=> setNotification(''), 2000);
          })
      }
    }else{
      const contact = {
        name: newName,
        number: newNumber
      };
      ContactService
        .saveContact(contact)
        .then(contactCreated => {
          setPersons(persons.concat(contactCreated));
          setNewName('');
          setNewNumber('');
          setNotification(`${contactCreated.name} is added to Phonebook`);
          setTimeout(()=> setNotification(''), 2000);
        })
    }
  }

  const deleteContact = (contact) => {
    if(window.confirm(`Do you want to delete ${contact.name} ?`)){
      ContactService
        .deleteContact(contact.id)
        .then(deleteContact => {
          setPersons(persons.filter((person) => person.id !== deleteContact.id));
        })    
    }
  }

  const showContancts = filterName === '' ? persons : persons.filter(person => person.name.toLowerCase() === filterName.toLowerCase());

  const hook = () => {
    console.log("Fetching phonenumbers");
    ContactService
      .getAllContacts()
      .then(contacts => {
        setPersons(contacts)
        console.log("fetching completed")
      });
  }

  useEffect(hook, []);

  console.log("redering persons", showContancts.length);
  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={notification}/>

      <Filter filterName={filterName} setFilterName={setFilterName} />
     
      <h2>add a new</h2>
      <PersonForm setNewName={setNewName} newName={newName} setNewNumber={setNewNumber} newNumber={newNumber} addName={addContact} />
     
      <h2>Numbers</h2>
      <Persons showContancts={showContancts} deleteContactHandler={deleteContact} />
    </div>
  );
}

export default App


