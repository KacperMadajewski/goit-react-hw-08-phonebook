import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { Box } from '@mui/material';

export const PhonebookPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Box
        sx={{
          display: 'flex',

          gap: '20px',
          justifyContent: 'space-around',
          backgroundColor: 'transparent',
        }}
      >
        <Box
          sx={{
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '20px',
          }}
        >
          <h2>Add your new contact</h2>
          <ContactForm />
        </Box>
        <Box
          sx={{
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '20px',
          }}
        >
          <h2>Contacts</h2>
          <Filter />
          <div>{isLoading && 'Loading contacts..'}</div>
          <ContactList />
        </Box>
      </Box>
    </div>
  );
};
