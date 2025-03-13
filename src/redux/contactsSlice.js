import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const isDuplicate = state.items.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (!isDuplicate) {
        state.items.push({ id: nanoid(), name, number });
      } else {
        alert(`${name} is already in contacts.`);
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items; 
export default contactsSlice.reducer;