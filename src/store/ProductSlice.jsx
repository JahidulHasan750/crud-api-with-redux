import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    state:'idle'
};

const ProductSlice= createSlice({
    name:'products',
    initialState,
    reducers:{
      
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(getProducts.fulfilled, (state,action)=>{
            state.data=action.payload
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status='error'
        })
    }
})

export const {fetchProducts}= ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts= createAsyncThunk('products/get', async()=>{
    const data=await fetch("https://fakestoreapi.com/products")
     const result =await data.json();
     return result;
})

