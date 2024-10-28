import React, { useState, useEffect } from "react";

const ContactForm = ({ currentContact, handleAddOrEdit }) => {
  const [contact, setContact] = useState(currentContact);

  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddOrEdit(contact);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{contact.id ? "Update Contact" : "Add Contact"}</button>
    </form>
  );
};

export default ContactForm;
