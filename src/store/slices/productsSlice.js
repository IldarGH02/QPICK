import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "mock";

const initialState = {
    products: [...productsData],
    wired: [],
    wireless: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setWired(state) {
            state.wired = state.products.filter(item => item.type === 'wired')
        },
        setWireless(state) {
            state.wireless = state.products.filter(item => item.type === 'wireless')
        }
    }
})

export const {setWired, setWireless} = productsSlice.actions

export default productsSlice.reducer