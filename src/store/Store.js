import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import ProductSlice from './ProductSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
  },
})

export default store;