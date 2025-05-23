import {createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk(
    "products/getProducts",
    async () => {
      const res = await axios.get("http://localhost:5000/dealers");
      return res.data;
    }  
  );

const productSlice = createSlice({
    name:'products',
    initialState:{},
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(getProductsThunk.pending, (state) =>{
            state.loading = true;
        })
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
    },

});
export default productSlice.reducer;