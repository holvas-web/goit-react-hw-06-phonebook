import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = event => {
    event.preventDefault();

    const isDuplicate = state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Contact "${name}" is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
