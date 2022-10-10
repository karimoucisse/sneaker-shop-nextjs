import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtreSlice"
import cartReducer from "./cartSlice"

export default configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
    }
})