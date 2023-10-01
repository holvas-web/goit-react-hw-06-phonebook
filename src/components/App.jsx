                                                                                                                                                                                                                                                                                                                     // App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './ContactForm/ContactForm.styled';
import { Header } from './ContactList/ContactList.styled';
import { addContact, deleteContact, updateFilter } from '../redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <Header>Contacts</Header>
      <Filter value={state.contacts.filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </Container>
  );
};


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Container } from './ContactForm/ContactForm.styled';
// import { Header } from './ContactList/ContactList.styled';
// import { addContact, deleteContact, updateFilter } from '../redux/contactsSlice'; 
// import 'modern-normalize';

// export const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.contacts.filter);

//   console.log("Contacts:", contacts); 
//   console.log("Filter:", filter); 

//   const handleAddContact = (name, number) => {
//     dispatch(addContact({ id: nanoid(), name, number }));
//   };
//   console.log(handleAddContact);
//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   const handleFilterChange = event => {
//     dispatch(updateFilter(event.target.value));
//   };

//   const filteredContacts = contacts.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm onAddContact={handleAddContact} />
//       <Header>Contacts</Header>
//       <Filter value={filter} onChange={handleFilterChange} />
//       <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
//     </Container>
//   );
// };
