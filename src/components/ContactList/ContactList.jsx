import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contactSlice';
import { getFilter } from 'redux/selectors';
import { Item, List, Button } from './ContactList.styled';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const visibleContacts =
    contacts.length > 0 &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button onClick={() => deleteContact(id)} disabled={isLoading}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
