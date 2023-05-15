import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Ul, Li, P, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = function (id) {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };

  const visibleContacts = filterContacts();

  return (
    <Ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Li key={id}>
          <P>{name}</P>
          <P>{number}</P>
          <Button
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactList;
