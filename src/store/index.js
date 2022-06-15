import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import fetchSlice from "./Slices/fetchSlice";

const reducers = {
 fetchSlice: fetchSlice,
 cartSlice: cartSlice,
};
const store = configureStore({
 reducer: reducers,
});

export default store;
