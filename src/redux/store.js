import { configureStore } from '@reduxjs/toolkit';
import { contactsDetailsReducer } from './contactsDetailsReducer';

export const store = configureStore({
  reducer: {
    contactsDetails: contactsDetailsReducer,
  },
});

