import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { Button } from '@mui/material';
import { FiberNew, Login} from '@mui/icons-material';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <Button sx={{ color: 'white' }} startIcon={<FiberNew />}>
          Register
        </Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button sx={{ color: 'white' }} startIcon={<Login />}>
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
