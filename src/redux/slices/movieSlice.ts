import {  createSlice } from "@reduxjs/toolkit";
import type { Movie } from "../../types/Movie";
import type { LoaderStatus } from "../../types/LoaderStatus";
import { fetchMovies } from "../thunks/fetchMovies";

interface InitialState {
  items: Movie[];
  currentPage: number;
  totalPages: number;
  status: LoaderStatus;
  error: string | null;
}

const initialState: InitialState = {
  items: [],
  currentPage: 1,
  totalPages: 1,
  status: "idle",
  error: null,
};


const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.results;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default movieSlice.reducer;
