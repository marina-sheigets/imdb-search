import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import supportedLanguagesReducer from './slices/supportedLanguagesSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    supportedLanguages: supportedLanguagesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
