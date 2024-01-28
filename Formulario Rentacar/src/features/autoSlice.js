import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  list: [],
};
export const autoSlice = createSlice({
  name: 'auto',
  initialState,
  reducers: {
    addAuto: (state, action) => {
        state.list.push(action.payload);
    },
    removeAuto: (state, action) => {
      state.list = state.list.filter(car => car.id !== action.payload);
    },
  },
});


export const { addAuto , removeAuto} = autoSlice.actions;

export default autoSlice.reducer;