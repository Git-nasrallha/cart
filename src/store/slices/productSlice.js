import { createSlice } from "@reduxjs/toolkit";
import { filterProducts, getProducts ,sortProducts } from "../actions/productAction";



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
            state.filterItems = action.payload
            state.error = null
        },
        [getProducts.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        //filter products by size
        [filterProducts.pending]:(state)=>{
            state.isLoading= true
            state.error = null
        },
        [filterProducts.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.filterItems = action.payload
            state.error = null
        },    
        [sortProducts.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        //sort products 
        [sortProducts.pending]:(state)=>{
            state.isLoading= true
            state.error = null
        },
        [sortProducts.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.filterItems = action.payload
            state.error = null
            console.log(action)
        },    
        [filterProducts.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
    
});

export default productSlice.reducer;