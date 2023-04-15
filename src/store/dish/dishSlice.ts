import { createSlice } from '@reduxjs/toolkit';

import { Dish } from '../../shared/@types/dish';

interface IDishState {
  dishes: Dish[]
  loading: boolean
}

const initialState: IDishState = {
  dishes: [],
  loading: false
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {}
});

export default dishSlice.reducer;
