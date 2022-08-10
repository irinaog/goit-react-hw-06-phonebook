import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
};

export const mySlice = createSlice({
    name: 'myValue',
    initialState,
    reducers: {
        addContact: (state, action) => {
            return state.contacts.items += action.payload;
        },
        filter: (state, action) => {
            return state.contacts.filter += action.payload;
        },
    }
});

export const { addContact, filter } = mySlice.actions;
export default mySlice.reducer;