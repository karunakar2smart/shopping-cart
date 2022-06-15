import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 show: false,
 quantity: 0,
 message: {
  type: "",
  text: "",
 },
 products: [],
};
const cartSlice = createSlice({
 name: "cartSlice",
 initialState,
 reducers: {
  showCart: (state, action) => {
   state.show = !state.show;
  },
  addToCart: (state, action) => {
   state.quantity = state.quantity + 1;
   state.products = [...state.products, action.payload];
  },
  showMessage: (state, action) => {
   state.type = action.payload;
   state.text = action.payload;
  },
 },
});
export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
