import { combineReducers } from '@reduxjs/toolkit';

import dishSlice from './dish/dish-slice';

export const reducer = combineReducers({
  dish: dishSlice
});
