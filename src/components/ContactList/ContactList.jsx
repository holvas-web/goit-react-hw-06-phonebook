import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; // Імпортуйте ваш зріз
import { Button, Item, List } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
}
