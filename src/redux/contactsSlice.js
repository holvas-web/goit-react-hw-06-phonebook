import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
       items: [],
    },

    reducers: {
        addContact: {
            reducer:(state, action) => {
                state.items = [...state.items, action.payload];
            },

            prepare: data => {
                return {
                    payload: {
                        ...data,
                       id: nanoid(),
                    },
                };
            },
        },
       deleteContact: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
       },
    }, 
});

export const {addContact, deleteContact, resetDeletedContacts} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

