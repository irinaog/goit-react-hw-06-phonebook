import { configureStore } from "@reduxjs/toolkit";
// // import { mySlice } from "./changeSlice";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContact = createAction('phoneBook/add');
// console.log(addContact.toString())

export const itemsReducer = createReducer([], {
    [addContact]: (state, action)=> [...state, action.payload],
});
export const filterReducer = createReducer('', {});

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