import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './App.styled';
import { useFetchContactsQuery } from 'redux/contactSlice';
const App = () => {
  const { data, error, isFetching } = useFetchContactsQuery();
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {data && <ContactList />}
      {isFetching && !error && <p>Loading...</p>}
      {error && <p>Something goes wrong...:( Please restart thispage</p>}
    </Container>
  );
};

export default App;
