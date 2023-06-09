import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import {} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Phonebook</title>

      <ContactForm />
      <div>{isLoading && <Loader />}</div>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
