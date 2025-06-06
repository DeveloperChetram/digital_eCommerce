import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/UserSlice'
import productSlice from './reducers/productSlice'
import cartSlice from './reducers/cartSlice'
export const store = configureStore({

  reducer: {

    users: userSlice,
    products:productSlice,
    carts:cartSlice
    
  },
})