import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/productSlice'
import categorySlice from './reducers/categorySlice'
export const store = configureStore({
    reducer:{
        products:productSlice,
        category:categorySlice
    }
})