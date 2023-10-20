// import { store } from "./store";
// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = store => store.contacts.items;
export const getFilter = store => store.filter;
export const getFilteredContacts = store => {
  return store.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(store.filter.toLowerCase())
    )
  };