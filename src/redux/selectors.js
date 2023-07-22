import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
