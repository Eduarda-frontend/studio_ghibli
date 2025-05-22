import { configureStore } from "@reduxjs/toolkit";
import api from "../services/api";
import filtroReducer from './reducers/filtro'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        filtro: filtroReducer
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store                                                                                                            