import { configureStore } from "@reduxjs/toolkit";
import {filterReducer, itemsReducer} from './phoneBookReducer';

export const store = configureStore({
    reducer: {
            items:itemsReducer,
            filter:filterReducer,
    
    }
})



