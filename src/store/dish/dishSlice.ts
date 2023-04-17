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
  reducers: {
    setCurrentDish: (state, action) => {
      state.currentDish = action.payload;
    }
  }
});

export const { setCurrentDish } = dishSlice.actions;
export default dishSlice.reducer;
