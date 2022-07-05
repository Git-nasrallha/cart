import { createSlice } from "@reduxjs/toolkit";
import { filterProducts, getProducts } from "../actions/productAction";



const INIT_STATE ={
    isLoading :false,
    productItems:[],
    filterItems:[],
    error :null,
};

const productSlice = createSlice({
    name:"products",
    initialState :INIT_STATE,
    // get allproducts
    extraReducers:{
        [getProducts.pending]:(state)=>{
            state.isLoading = true
            state.error = null
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.isLoading =false
            state.productItems = action.payload
            state.error = null
        },
        [getProducts.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        //filter products
        [filterProducts.pending]:(state)=>{
            state.isLoading= true
            state.error = null
        },
        [filterProducts.fulfilled]:(state,action)=>{
            state.isLoading =false;
           state.filterItems = action.payload
            state.error=null
        },
        [filterProducts.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
    
});

export default productSlice.reducer;