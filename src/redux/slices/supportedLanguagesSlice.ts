import { createSlice } from "@reduxjs/toolkit";
import { fetchSupportedLanguages } from "../thunks/fetchSupportedLanguages";
import type { Language } from "../../types/Language";

interface InitialState {
  items: Language[];
}

const initialState: InitialState = {
  items: [],
};

const supportedLanguagesSlice = createSlice({
    name: "supportedlanguages",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSupportedLanguages.fulfilled, (state, action) => {
                state.items = action.payload;
            })
    },
})

export  default supportedLanguagesSlice.reducer;