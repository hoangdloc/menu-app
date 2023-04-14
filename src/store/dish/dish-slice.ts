import { createSlice } from '@reduxjs/toolkit';

import { Dish } from '../../shared/@types/dish';

const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    dishes: [] as Dish[],
    loading: false
  },
  reducers: {
    fetchDishes: (state, action) => {
      state.dishes = action.payload;
    }
  }
});

export const { fetchDishes } = dishSlice.actions;
export default dishSlice.reducer;
