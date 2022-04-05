
import { ProductModel } from './../../../models/ProductModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './action-creator';

interface ProductsState {
    products: ProductModel[];
    isProductsLoading: boolean;
    productsError: string | null;
}

const initialState: ProductsState = {
    products: [],
    isProductsLoading: false,
    productsError: null,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductModel[]>) => {
            state.isProductsLoading = false;
            state.productsError = null;
            state.products = action.payload;
        },
        [fetchProducts.pending.type]: (state) => {
            state.isProductsLoading = true;
        },
        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isProductsLoading = false;
            state.productsError = action.payload;
        },
    }
})

export default productsSlice.reducer;