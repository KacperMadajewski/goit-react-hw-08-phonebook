import { NavLink } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import css from './Navigation.module.css';
import HomeIcon from '@mui/icons-material/Home';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink
        className={css.link}
        to="/"
        style={{ display: 'flex', alignContent: 'center' }}
      >
        <HomeIcon sx={{ fontSize: 40, marginRight: 2 }} />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
