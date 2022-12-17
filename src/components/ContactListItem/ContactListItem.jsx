import { useDeleteContactMutation } from 'redux/contactSlice';
const { Item, Button } = require('./ContactListItem.styled');

export const ContactListItem = (id, name, number) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Item id={id}>
      {name}: {number}
      <Button onClick={() => deleteContact(id)} disabled={isLoading}>
        Delete
      </Button>
    </Item>
  );
};
