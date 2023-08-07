export const selectContacts = state => state.contactsDetails.contacts.items;
export const selectIsLoading = state =>
  state.contactsDetails.contacts.isLoading;
export const selectError = state => state.contactsDetails.contacts.error;
export const selectFilter = state => state.contactsDetails.filter;
export const selectName = state => state.contactsDetails.name;
export const selectPhone = state => state.contactsDetails.phone;
