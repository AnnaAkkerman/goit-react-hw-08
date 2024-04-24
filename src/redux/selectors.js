export const selectContacts = (state) => state.contactsData.contacts.items;
export const selectNameFilter = (state) => state.filtersData.filters.name;

export const selectLoading = (state) => state.contactsData.contacts.loading;
export const selectError = (state) => state.contactsData.contacts.error;
