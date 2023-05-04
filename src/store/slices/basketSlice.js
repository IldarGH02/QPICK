import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    basketPrice: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.basket.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        },
        addBasketPrice: (state, action) => {
            state.basketPrice += action.payload
        },
        removeBasketPrice: (state, action) => {
            state.basketPrice -= action.payload
        }
    }
})

export const {addProduct, deleteProduct, addBasketPrice, removeBasketPrice} = basketSlice.actions

export default basketSlice.reducer