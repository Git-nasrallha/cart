import { createAsyncThunk } from '@reduxjs/toolkit';
import { FILTER_BY_SIZE, FILTER_BY_PRICE, GET_PRODUCTS } from "../types/Types";
import axios from "axios";


export const getProducts = createAsyncThunk(`${GET_PRODUCTS}/getProducts`, async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    // const products = await fetch('/json/data.json').then(res=> res.json());
    try {
        const res = await axios.get('/json/data.json');
        const products = res.data;
        return products;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// filter items  by size
export const filterProducts = createAsyncThunk(`${FILTER_BY_SIZE}/getProduct`, async (size, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    try {
        let items = getState().products.productItems;
        items = size === "All" ? items : items.filter(item => item.avalbelSize.includes(size));
        return items;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});
//sort items hightest / lowest / latest
export const sortProducts = createAsyncThunk(`${FILTER_BY_PRICE}/getProduct`, async (sort, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;

    try {
        const items = getState().products.filterItems.slice();
        // comper sort by id
        sort === "latest"? items.sort((a,b)=>( a.id > b.id ? 1 : -1))
        :items.sort((a,b)=>(
            sort==="hightest"  ? a.price > b.price ? -1 : 1 : a.price < b.price ? 1 : -1
        ))
        
            
        return items;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})
