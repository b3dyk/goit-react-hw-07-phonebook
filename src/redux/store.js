import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';

import { contactsReducer } from './contacts.slice';

export const store = configureStore({
  preloadedState: contactsInitState,
  devTools: true,

  reducer: contactsReducer,
});
