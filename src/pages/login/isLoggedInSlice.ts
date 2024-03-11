import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IsLoggedInProp } from "../kopiishop/KopiiShopProps";

const initialState: IsLoggedInProp = {
  isLoggedIn: false
};

const isLoggedInSlice = createSlice({
  name: 'loadingShop',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
