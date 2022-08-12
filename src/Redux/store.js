import { configureStore } from "@reduxjs/toolkit";
// // import { mySlice } from "./changeSlice";
import { createAction, createReducer } from "@reduxjs/toolkit";



export const addContact = createAction('phoneBook/add');
export const deleteContact = createAction('phoneBook/delete');
// console.log(addContact.toString())
export const filter = createAction('phoneBook/filter');
export const filterContacts = createAction('phoneBook/filterContacts')

export const itemsReducer = createReducer(JSON.parse(window.localStorage.getItem('contacts'))??[], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
    [filterContacts]:(state,action)=>state.filter(contact=>contact.name.toLowerCase().includes(action.payload))
});
export const filterReducer = createReducer('', {
    [filter]: (state, action) =>  state= action.payload,
});

export const store = configureStore({
    reducer:{
        // contacts: {
        items: itemsReducer,
        filter:filterReducer,
        // },
    }
})



// export default configureStore({
//     reducer:
//     {
//        mySlice, 
//     }
// });