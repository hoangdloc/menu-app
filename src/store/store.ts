import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { dishApi } from './dish/dishService';
import dishSlice from './dish/dishSlice';

export const store = configureStore({
  reducer: {
    dish: dishSlice,
    [dishApi.reducerPath]: dishApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
