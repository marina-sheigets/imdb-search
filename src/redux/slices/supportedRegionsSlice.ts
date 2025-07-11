import { createSlice } from "@reduxjs/toolkit";
import { fetchSupportedRegions } from "../thunks/fetchSupportedRegions";
import type { Region } from "../../types/Region";

interface InitialState {
    items: Region[];
}

const initialState: InitialState = {
    items: [],
};

const supportedRegionsSlice = createSlice({
    name: "supportedRegions",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSupportedRegions.fulfilled, (state, action) => {
                state.items = action.payload.results;
            })
    },
})

export default supportedRegionsSlice.reducer;