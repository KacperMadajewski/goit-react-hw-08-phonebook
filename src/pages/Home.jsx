import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import '@fontsource/roboto/300.css';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345, backgroundColor: 'transparent' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Phonebook
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Keep all your contacts in one place! Log in or register if you
              don't have an account yet. Otherwise, keep your friends close.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
