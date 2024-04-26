import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AddToCartProp = {
  successfullyAdded: boolean;
  reset: boolean;
}
const initialState: AddToCartProp = {
  successfullyAdded: false,
  reset: false
};

const addToCartSlice = createSlice({
  name: 'loadingShop',
  initialState,
  reducers: {
    setSuccessful: (state, action: PayloadAction<boolean>) => {
      state.successfullyAdded = action.payload;
    },
    setReset: (state, action: PayloadAction<boolean>) => {
      state.successfullyAdded = action.payload;
    },
  },
});

export const { setSuccessful, setReset } = addToCartSlice.actions;
export default addToCartSlice.reducer;
