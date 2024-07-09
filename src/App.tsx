import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./Contact";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<string[]>([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const addContact = (contact: string) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const deleteContact = (index: number) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <Contact
        addContact={addContact}
        deleteContact={deleteContact}
        contacts={contacts}
      />
    </div>
  );
};

export default App;
