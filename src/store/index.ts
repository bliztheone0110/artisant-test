import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productsReducer from './reducers/products/index';

const rootReducer = combineReducers({
    productsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']