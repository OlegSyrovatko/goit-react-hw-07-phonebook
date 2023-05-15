import React from 'react';
import { getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusModal } from 'redux/modalSlice';
import { getModal } from 'redux/selectors';

import Modal from 'components/Modal';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import {
  Book,
  Button,
  CloseButton,
  ModalBlock,
  ModalItems,
} from './App.styled';

export const App = () => {
  const showModal = useSelector(getModal);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setStatusModal(!showModal));
  };
  const contacts = useSelector(getContacts);
  return (
    <Book>
      <h1>Phonebook</h1>
      <Button type="button" onClick={toggleModal}>
        Add Contact
      </Button>
      {showModal && (
        <Modal>
          <ModalBlock>
            <ModalItems>
              <CloseButton type="button" onClick={toggleModal}>
                Close
              </CloseButton>
              <ContactForm />
            </ModalItems>
          </ModalBlock>
        </Modal>
      )}

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}
      <ContactList />
    </Book>
  );
};
