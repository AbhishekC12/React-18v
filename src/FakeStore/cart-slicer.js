import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartCount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.cartCount = state.cartItems.length;
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartCount = state.cartItems.length;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;