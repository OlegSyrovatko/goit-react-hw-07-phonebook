// import { getContacts, getFilter } from 'redux/selectors';

import { UL } from './ContactList.styled';

//   const contacts = useSelector(getContacts);

//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   const handleDelete = function (id) {
//     dispatch(deleteContact(id));
//   };

//   const filterContacts = () => {
//     const lowerFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(lowerFilter)
//     );
//   };

//   const visibleContacts = filterContacts();

import { ContactListItem } from '../ContactListItem/ContactListItem';
const ContactList = ({ contacts }) => {
  return (
    <UL>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </UL>
  );
};
export default ContactList;
