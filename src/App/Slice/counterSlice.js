import { createSlice } from "@reduxjs/toolkit"

const initState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, value) => {
            state.value += value;
        },
        decrementByValue: (state, value) => {
            state.value -= value;
        },
    },
});

export const { increment, decrement, incrementByValue, decrementByValue} = counterSlice.actions;

export default counterSlice.reducer;