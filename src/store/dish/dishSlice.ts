import { createSlice } from '@reduxjs/toolkit';

import { Dish } from '../../shared/@types/dish';

interface IDishState {
  currentDish: Dish | null
}

const initialState: IDishState = {
  currentDish: null
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {}
});

export default dishSlice.reducer;
