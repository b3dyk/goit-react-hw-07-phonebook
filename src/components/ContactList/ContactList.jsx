import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/contacts.selector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
