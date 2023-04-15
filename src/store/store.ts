import { configureStore } from '@reduxjs/toolkit';

import dishSlice from './dish/dishSlice';

export const store = configureStore({
  reducer: {
    dish: dishSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
