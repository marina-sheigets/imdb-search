import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import supportedLanguagesReducer from './slices/supportedLanguagesSlice';
import supportedRegionsReducer from './slices/supportedRegionsSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    supportedLanguages: supportedLanguagesReducer,
    supportedRegions: supportedRegionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
