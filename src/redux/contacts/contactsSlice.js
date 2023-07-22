import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  return {
    ...state,
    loading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload,
      };
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        items: [action.payload, ...state.items],
      };
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
