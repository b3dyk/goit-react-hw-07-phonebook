import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts.selector';
import { fetchContacts } from 'redux/contacts.thunk';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};
