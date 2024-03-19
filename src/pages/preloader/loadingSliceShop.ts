import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingStateShop } from "../kopiishop/KopiiShopProps";

const initialState: LoadingStateShop = {
  isLoadingShop: false
};

const loadingSliceShop = createSlice({
  name: 'loadingShop',
  initialState,
  reducers: {
    setLoadingShop: (state, action: PayloadAction<boolean>) => {
      state.isLoadingShop = action.payload;
    },
  },
});

export const { setLoadingShop } = loadingSliceShop.actions;
export default loadingSliceShop.reducer;
