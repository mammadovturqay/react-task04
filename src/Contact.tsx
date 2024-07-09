import React, { useState } from "react";
import "./Contact.css";

interface ContactProps {
  addContact: (contact: string) => void;
  deleteContact: (index: number) => void;
  contacts: string[];
}

const Contact: React.FC<ContactProps> = ({
  addContact,
  deleteContact,
  contacts,
}) => {
  const [newContact, setNewContact] = useState("");

  const handleAddContact = () => {
    if (newContact.trim() !== "") {
      addContact(newContact);
      setNewContact("");
    }
  };

  const handleDeleteContact = (index: number) => {
    deleteContact(index);
  };

  return (
    <div className="Contact">
      <input
        type="text"
        value={newContact}
        onChange={(e) => setNewContact(e.target.value)}
        placeholder="Add new contact"
      />
      <button onClick={handleAddContact}>Add</button>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact}
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
