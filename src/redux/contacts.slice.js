import { createSlice } from '@reduxjs/toolkit';

import { contactsInitState } from './contacts.init-state';
import { addContact, deleteContact, fetchContacts } from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    filterContactsAction: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.error = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== payload
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const { addContactAction, deleteContactAction, filterContactsAction } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
