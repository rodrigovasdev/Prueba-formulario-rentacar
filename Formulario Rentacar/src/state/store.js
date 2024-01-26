import { configureStore } from '@reduxjs/toolkit'
import autoSlice from '../features/autoSlice'

export const store = configureStore({
  reducer: {
    auto: autoSlice,
  },
})