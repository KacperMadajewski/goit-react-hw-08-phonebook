import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { Button, Card, Link, Typography } from '@mui/material';
import { EmojiPeople, Phone } from '@mui/icons-material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const Loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ul
        style={{
          overflowX: 'none',
          overflowY: 'auto',
          maxHeight: '200px',
          minWidth: '300px',
          paddingRight: '20px',
        }}
      >
        {Loading && !error ? (
          <p>Contacts loading...</p>
        ) : filteredContacts.length === 0 && !error ? (
          <p>The Phonebook is empty. Add your first contact. </p>
        ) : (
          filteredContacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
              <Card
                sx={{
                  display: 'flex',
                  gap: '23px',
                  padding: '10px',
                  marginBottom: '20px',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    gap: '5px',
                  }}
                >
                  <EmojiPeople />
                  {name}
                </Typography>

                <Link
                  sx={{
                    display: 'flex',
                    gap: '10px',
                  }}
                  href="tel:{number}"
                >
                  <Phone />
                  {number}
                </Link>

                <Button
                  variant="outlined"
                  type="submit"
                  onClick={() => dispatch(deleteContact(id))}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Card>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
