import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favList: []
}

export const favesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addNewFave: (state) => {
            state.favList = ["Hello"]
        },
        deleteFave: (state) => {
            state.favList = ["Hello"]
        },
    }
});

export const {addNewFave, deleteFave} = favesSlice.actions;
export default favesSlice.reducer;