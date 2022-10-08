import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtreSlice"

export default configureStore({
    reducer: {
        filter: filterReducer,
        
    }
})