import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {addContact} from '../../redux/contactsSlice'; 
import { Form, Label, Input, Button } from './ContactForm.styled'

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isDuplicate = contacts.some(
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
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          type="text"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}
