import { productsAPI } from '../../../API/API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        try {
            let response = await productsAPI.getProducts()
            return response.data.products;
        } catch (e) {
            return thunkAPI.rejectWithValue("products loading error")
        }
    }
)