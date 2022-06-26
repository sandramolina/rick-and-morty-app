import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    faveList: ["yas ", "queen!"]
}

export const faveSlice = createSlice({
    name: 'counterName',
    initialState,
    reducers: {
        increment: (state) => {
            state.faveList = [...state.faveList, "krrr!"];
        },
        decrement: (state) => {
            state.faveList.pop();
        },
    }
});

export const {increment, decrement} = faveSlice.actions;
export default faveSlice.reducer;