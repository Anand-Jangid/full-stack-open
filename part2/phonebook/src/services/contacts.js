import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

function getAllContacts() {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

function saveContact(contact) {
    const request = axios.post(baseUrl, contact);
    return request.then(response => response.data);
}

function updateContact(contact, id) {
    const request = axios.put(`${baseUrl}/${id}`, contact);
    return request.then(response => response.data);
}

function deleteContact(id) {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => {
        return response.data;
    })
}

export default {
    getAllContacts,
    saveContact,
    updateContact,
    deleteContact
}