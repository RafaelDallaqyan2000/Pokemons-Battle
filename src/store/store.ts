import { configureStore } from '@reduxjs/toolkit';
import { battleReducer } from './slices';

export const store = configureStore({
  reducer: {
    battle: battleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
