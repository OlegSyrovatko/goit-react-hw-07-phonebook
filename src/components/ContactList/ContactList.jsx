import { getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

import Filter from 'components/Filter';
import { ContactListItem } from '../ContactListItem/ContactListItem';

import { UL } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  const lowerFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerFilter)
  );
  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      {filteredContacts.length > 0 && (
        <UL>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </UL>
      )}
    </>
  );
};
export default ContactList;
