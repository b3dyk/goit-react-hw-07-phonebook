import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contacts.thunk';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong</p>}
      {!isLoading && !error && (
        <List>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </List>
      )}
    </>
  );
};
