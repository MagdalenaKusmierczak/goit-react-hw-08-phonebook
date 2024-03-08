import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

import Section from 'components/Section/Section.jsx';
import ContactList from 'components/ContactList/ContactList.jsx';
import ContactForm from 'components/ContactForm/ContactForm.jsx';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section title="Phonebook">
      <ContactForm />
      <ContactList>
        {isLoading && !error && <b>Request in progress...</b>}
        <Filter />
      </ContactList>
    </Section>
  );
};
export default Contacts;
