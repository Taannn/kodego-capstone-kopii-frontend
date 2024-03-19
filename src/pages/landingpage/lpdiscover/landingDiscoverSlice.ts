import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingLanding } from '../../preloader/loadingSliceLanding'
import { LandingDiscoverInitState, LandingDiscoverProps } from '../LandingPageProps'

const initialState: LandingDiscoverInitState = {
  info: [],
  error: ''
}

export const fetchLandingDiscover = createAsyncThunk('landingDiscover/fetchLandingDiscover', async (_, { dispatch }) => {
  dispatch(setLoadingLanding(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/discover');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingLanding(false));
  }
})


const landingDiscoverSlice = createSlice({
  name: 'landingDiscover',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLandingDiscover.fulfilled, (state, action: PayloadAction<LandingDiscoverProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchLandingDiscover.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error
    })
  }
})

export default landingDiscoverSlice.reducer
