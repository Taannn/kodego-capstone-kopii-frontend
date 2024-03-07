import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingStateLanding } from "./LandingPageProps";

const initialState: LoadingStateLanding = {
  isLoadingLanding: false
};

const loadingSliceLanding = createSlice({
  name: 'loadingLanding',
  initialState,
  reducers: {
    setLoadingLanding: (state, action: PayloadAction<boolean>) => {
      state.isLoadingLanding = action.payload;
    },
  },
});

export const { setLoadingLanding } = loadingSliceLanding.actions;
export default loadingSliceLanding.reducer;
