import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AddToCartProp = {
  successfullyAdded: boolean;
  reset: boolean;
  successfullyChanged: boolean;
}
const initialState: AddToCartProp = {
  successfullyAdded: false,
  reset: false,
  successfullyChanged: false
};

const addToCartSlice = createSlice({
  name: 'loadingShop',
  initialState,
  reducers: {
    setSuccessful: (state, action: PayloadAction<boolean>) => {
      state.successfullyAdded = action.payload;
    },
    passwordChanged: (state, action: PayloadAction<boolean>) => {
      state.successfullyChanged = action.payload;
    },
    setReset: (state, action: PayloadAction<boolean>) => {
      state.successfullyAdded = action.payload;
    },
  },
});

export const { setSuccessful, setReset, passwordChanged } = addToCartSlice.actions;
export default addToCartSlice.reducer;
