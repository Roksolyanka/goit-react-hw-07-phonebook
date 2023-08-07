import { createSlice } from '@reduxjs/toolkit';
import {
  addContactDataThunk,
  deleteContactDataThunk,
  fetchContactDataThunk,
} from 'redux/contactsApi';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  name: '',
  phone: '',
};

const contactsDetailsSlice = createSlice({
  name: 'contactsDetails',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.phone = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactDataThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContactDataThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContactDataThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContactDataThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContactDataThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContactDataThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(deleteContactDataThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContactDataThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactDataThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      });
  },
});

export const { setFilter, deleteContact, setName, setNumber } =
  contactsDetailsSlice.actions;
export const contactsDetailsReducer = contactsDetailsSlice.reducer;

export const selectContacts = state => state.contacts.contacts.items;
