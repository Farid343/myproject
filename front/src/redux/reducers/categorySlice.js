import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const res = await axios.get("http://localhost:5000/dealers");
        return res.data;
      }  
)
export const postCardThunk = createAsyncThunk(
    "categories/postCard",
    async (data) => {
      const res = await axios.post("http://localhost:5000/dealers", data);
      return res.data;
    }
  );
  
  export const deleteCardThunk = createAsyncThunk(
    "categories/deleteCard",
    async (id) => {
      await axios.delete(`http://localhost:5000/dealers/${_id}`);
      return id;
    }
  );
  
  

const categorySlice = createSlice({
    name: "category",
    initialState: {
      products: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      //get
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //post
      .addCase(postCardThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(postCardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //delete
      .addCase(deleteCardThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteCardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    }
})
export default categorySlice.reducer