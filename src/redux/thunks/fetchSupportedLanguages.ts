import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Language } from "../../types/Language";

export const fetchSupportedLanguages = createAsyncThunk<
  Language[]
>("supportedLanguages/fetchSupportedLanguages", async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/configuration/languages?&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`
  );

  if (!response.ok) throw new Error("Failed to fetch languages");

  return await response.json();
});
