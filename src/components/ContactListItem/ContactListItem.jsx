import { useDeleteContactMutation } from 'redux/phonebookSlice';
import { Spinner } from 'components/Spinner/Spinner';
import { Li, P, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Li key={id}>
      <P>{name}</P>
      <P>{number}</P>
      <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button>
    </Li>
  );
};
