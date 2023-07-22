import { useAuth } from '../Hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

import { UserMenu } from '../../components/userMenu/UserMenu';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Navigation />
            </Typography>

            {isLoggedIn ? (
              <div>
                <UserMenu />
              </div>
            ) : (
              <div>
                <AuthNav />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
