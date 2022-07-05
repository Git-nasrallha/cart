import {createAsyncThunk  } from '@reduxjs/toolkit';
import { FILTER_BY_SIZE, GET_PRODUCTS } from "../types/Types";
import axios from "axios";


export const  getProducts = createAsyncThunk(`${GET_PRODUCTS}/getProducts`, async(_ ,thunkApi)=>{
    const {rejectWithValue} = thunkApi;
   // const products = await fetch('/json/data.json').then(res=> res.json());
    try {
        const res =await axios.get('/json/data.json');
        const products = res.data;
        return products;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const filterProducts = createAsyncThunk(`${FILTER_BY_SIZE}/getProduct` , async(size,thunkApi)=>{
const {rejectWithValue,getState } = thunkApi;
try {
    const items =getState().products.productItems;
    return size==="All" ? items :items.filter(item=>item.avalbelSize.includes(size)) ;
    
} catch (error) {
    return rejectWithValue(error.message);
}
});
