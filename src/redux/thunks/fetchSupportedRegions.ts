import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Region } from "../../types/Region";

export const fetchSupportedRegions = createAsyncThunk<
    { results: Region[] }
>("supportedRegions/fetchSupportedRegions", async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/watch/providers/regions?&api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch regions");

    return await response.json();
});
