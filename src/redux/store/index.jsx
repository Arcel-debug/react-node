import { configureStore } from "@reduxjs/toolkit";
import studentState from "../reducers/studentReducer";

export const store = configureStore({
    reducer: {
        studentState
    }
});

export default store;