import * as React from 'react';
import Button from '@mui/material/Button';
import { Logout } from '@mui/icons-material';

export const Btn = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={<Logout />}
      type="submit"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
