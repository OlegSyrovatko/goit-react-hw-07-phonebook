import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setStatusModal } from 'redux/modalSlice';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/phonebookSlice';

import { Button, Form, Label } from './ContactForm.styled';
import Notiflix from 'notiflix';
import { Spinner } from 'components/Spinner/Spinner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const [createContact, { isLoading, error }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleName = e => {
    setName(e.currentTarget.value);
  };
  const handleNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameExists = contacts.some(
      contact => contact.name?.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    createContact({ name: name, number: number });
    if (error) {
      Notiflix.Notify.failure(error.message);
      return;
    }

    Notiflix.Notify.success(isLoading);

    setName('');
    setNumber('');
    dispatch(setStatusModal(false));
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="name">
          <p>Name:</p>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
            required
          />
        </Label>
        <br />
        <Label htmlFor="number">
          <p>Number:</p>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleNumber}
            required
          />
        </Label>
        <br />
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={12} />} Add Contact
        </Button>
      </Form>
    </>
  );
};
export default ContactForm;
