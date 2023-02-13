import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { addContact } from 'redux/contscts/contacts.thunk';
import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState(() => localStorage.getItem('name') ?? '');
  const [phone, setPhone] = useState(() => localStorage.getItem('phone') ?? '');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        localStorage.setItem('name', value);
        setName(value);
        break;

      case 'phone':
        localStorage.setItem('phone', value);
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNameExist = Boolean(
      contacts.some(contact => contact.name === name)
    );

    if (isNameExist) {
      alert(`${name} already in contacts. Enter new name`);
      localStorage.removeItem('name');
      setName('');
      return;
    }

    dispatch(addContact({ name, phone }));

    localStorage.removeItem('name');
    localStorage.removeItem('phone');
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="John Dou"
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
          name="phone"
          value={phone}
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
