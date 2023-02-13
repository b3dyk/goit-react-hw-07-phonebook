import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/contacts.selector';
import { fetchContacts } from 'redux/contacts.thunk';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};
