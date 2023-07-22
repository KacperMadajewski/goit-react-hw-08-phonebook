import { useDispatch } from 'react-redux';
import { useAuth } from '../Hooks/useAuth';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/Auth/operations';
import { Btn } from '../Button/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}> Welcome, {user.email}</p>

      <Btn text="Log Out" onClick={() => dispatch(logOut())} />
    </div>
  );
};
