import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "Toutes les chaussures",
        sort: "Les plus récents"
    },
    reducers: {
        update: (state, action) => {
            state.filter = action.payload.filter
            state.sort = action.payload.sort
        }
    }
})

export const { update } = filterSlice.actions
export default filterSlice.reducer