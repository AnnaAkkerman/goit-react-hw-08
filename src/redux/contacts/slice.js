import { createSlice, createSelector } from "@reduxjs/toolkit";
// import { INITIAL_STATE } from "../constants";
import { fetchContacts, addContact, deleteContact } from "./operations";

export const INITIAL_STATE_CONTACTS = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.contacts.loading = true;
};

const handleRejected = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE_CONTACTS,
  reducers: {
    clearContacts: (state) => {
      state.contacts.items = [];
      state.contacts.loading = false;
      state.contacts.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const { clearContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
