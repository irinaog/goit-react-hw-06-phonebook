import { configureStore } from "@reduxjs/toolkit";
import { mySlice } from "./changeSlice";

export default configureStore({
    reducer:
    {
       mySlice, 
    }
});