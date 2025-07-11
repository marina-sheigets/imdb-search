import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MovieResponse } from "../types/MovieResponse";

interface FetchParams {
  filters: Record<string, string>;
  page: number;
}

export const fetchMovies = createAsyncThunk<MovieResponse, FetchParams>(
  "movies/fetchMovies",
  async ({ filters, page }) => {
    const queryParams = new URLSearchParams({
      ...filters,
      page: page.toString(),
    }).toString();

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&${queryParams}`
    );

    if (!response.ok) throw new Error("Failed to fetch movies");
    return await response.json();
  }
);