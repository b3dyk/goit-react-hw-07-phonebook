import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Heading } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Heading>Phonebook</Heading>

      <ContactForm />

      <Heading>Contacts</Heading>

      <Filter />

      <ContactList />
    </Container>
  );
};
