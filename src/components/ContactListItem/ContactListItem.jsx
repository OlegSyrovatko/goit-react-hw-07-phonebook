import { useDeleteContactMutation } from 'redux/phonebookSlice';
import { Spinner } from 'components/Spinner/Spinner';
import Notiflix from 'notiflix';
import { Li, P, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleDelete = async id => {
    try {
      await deleteContact(id);
      Notiflix.Notify.success('Contact deleted!');
    } catch (error) {
      Notiflix.Notify.failure(error);
    }
  };

  return (
    <Li key={id}>
      <P>{name}</P>
      <P>{number}</P>
      <Button
        onClick={() => {
          handleDelete(id);
        }}
        disabled={isDeleting}
      >
        {isDeleting && <Spinner size={12} />}
        Delete
      </Button>
    </Li>
  );
};
