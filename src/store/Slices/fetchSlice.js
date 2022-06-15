import Constants from "../../Constants";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//  Fetch All Products
export const getTotalProducts = createAsyncThunk(
 "FetchSlice/getTotalProducts",
 async () => {
  const res = await fetch(Constants.FETCH_ALL_PRODUCTS);
  const data = res.json();
  return data;
 }
);

//  Fetch Single Product.
export const getSingleProduct = createAsyncThunk(
 "fetchSlice/getSingleProduct",
 async ({ id }) => {
  const res = await fetch(Constants.FETCH_SINGLE_PRODUCTS + id);
  const data = res.json();
  return data;
 }
);

const initialState = {
 data: [],
 status: null,
};

const fetchSlice = createSlice({
 name: "FetchSlice",
 initialState,
 extraReducers: {
  [getTotalProducts.pending]: (state, action) => {
   state.status = "Pending...!";
  },
  [getTotalProducts.fulfilled]: (state, action) => {
   state.data = action.payload;
   state.status = "Success...!";
  },
  [getTotalProducts.rejected]: (state, action) => {
   state.status = "Rejected...!";
  },
  [getSingleProduct.pending]: (state, action) => {
   state.status = "Pending";
  },
  [getSingleProduct.fulfilled]: (state, action) => {
   state.data = action.payload;
   state.status = "Success...!";
  },
  [getTotalProducts.rejected]: (state, action) => {
   state.status = "Rejected...!";
  },
 },
});

export const fetchSliceActions = fetchSlice.actions;
export default fetchSlice.reducer;
