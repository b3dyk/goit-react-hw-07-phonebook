import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts.selector';

import { addContactAction } from 'redux/contacts.slice';
import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const [name, setName] = useState(() => localStorage.getItem('name') ?? '');
  const [number, setNumber] = useState(
    () => localStorage.getItem('number') ?? ''
  );

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        localStorage.setItem('name', value);
        setName(value);
        break;

      case 'number':
        localStorage.setItem('number', value);
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNameExist = Boolean(
      contacts.find(contact => contact.name === name)
    );

    if (isNameExist) {
      alert(`${name} already in contacts. Enter new name`);
      localStorage.removeItem('name');
      setName('');
      return;
    }

    const contact = { id: nanoid(), name, number };

    dispatch(addContactAction(contact));

    localStorage.removeItem('name');
    localStorage.removeItem('number');
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="John Dough"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </Label>

      <Button>Add contact</Button>
    </Form>
  );
};
