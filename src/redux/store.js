import { configureStore } from '@reduxjs/toolkit';
import { contactsDetailsReducer } from './contactsDetailsSlice';

export const store = configureStore({
  reducer: {
    contactsDetails: contactsDetailsReducer,
  },
});
