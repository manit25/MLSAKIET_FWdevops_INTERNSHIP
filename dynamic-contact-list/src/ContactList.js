import React from "react";

const ContactList = ({ contacts, onEditClick, onDeleteClick }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <div className="buttons">
              <button className="edit-btn" onClick={() => onEditClick(contact)}>Edit</button>
              <button className="delete-btn" onClick={() => onDeleteClick(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
