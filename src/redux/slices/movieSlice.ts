import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from "../../types/Movie";
import type { LoaderStatus } from "../../types/LoaderStatus";
import { fetchMovies } from "../thunks/fetchMovies";

interface InitialState {
  items: Movie[];
  currentPage: number;
  totalPages: number;
  totalResults: number,
  status: LoaderStatus;
  error: string | null;
}

const initialState: InitialState = {
  items: [],
  currentPage: 1,
  totalPages: 1,
  totalResults: 0,
  status: "idle",
  error: null,
};


const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovies: (state) => {
      state.items = [];
      state.error = null;
      state.status = "idle";
      state.currentPage = 1;
      state.totalPages = 0;
      state.totalResults = 0;
    },
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
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.total_pages;
        state.totalResults = action.payload.total_results;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { clearMovies } = movieSlice.actions;

export default movieSlice.reducer;
