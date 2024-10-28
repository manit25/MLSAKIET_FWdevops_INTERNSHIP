import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import './styles.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Manit", phone: "8887550476" },
    { id: 2, name: "Urwashi", phone: "9755070896" },
    { id: 3, name: "Stuti", phone:"9968709774"},
  ]);

  const [currentContact, setCurrentContact] = useState({ id: null, name: "", phone: "" });

  const handleAddOrEdit = (contact) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!contact.name || !phoneRegex.test(contact.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (contact.id) {
      setContacts(
        contacts.map((c) => (c.id === contact.id ? contact : c))
      );
    } else {
      contact.id = contacts.length + 1;
      setContacts([...contacts, contact]);
    }
    setCurrentContact({ id: null, name: "", phone: "" });
  };

  const handleEditClick = (contact) => {
    setCurrentContact(contact);
  };

  const handleDeleteClick = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactForm
        currentContact={currentContact}
        handleAddOrEdit={handleAddOrEdit}
      />
      <div className="contact-list-container">
        <ContactList
          contacts={contacts}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default App;
