import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsInitState } from './contacts.init-state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContactAction: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },

    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    filterContactsAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContactAction, deleteContactAction, filterContactsAction } =
  contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
