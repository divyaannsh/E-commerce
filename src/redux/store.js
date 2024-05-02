import { configureStore } from '@reduxjs/toolkit';
import cartslice from './slices/cartslice'; // Assuming your reducer is exported from 'cartslice'

export const store = configureStore({
  reducer: {
    cart: cartslice, // Use the actual reducer function here
  },
});
