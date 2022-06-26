import { configureStore } from "@reduxjs/toolkit";
import favesReducer from '../app/features/faves/favesSlice';

export const store = configureStore({
    reducer:{
        favesReducer: favesReducer,
    }
})