import cartSlicer from "./cart-slicer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        store: cartSlicer
    }
})