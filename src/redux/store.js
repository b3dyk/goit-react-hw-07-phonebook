import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts/contacts.init-state';

import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

export const store = configureStore({
  preloadedState: contactsInitState,
  devTools: true,

  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
