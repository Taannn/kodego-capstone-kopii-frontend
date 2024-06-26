import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingLanding } from '../../preloader/loadingSliceLanding'
import { LandingAboutDataInitState, LandingAboutDataProps } from '../LandingPageProps'

const initialState: LandingAboutDataInitState = {
  info: [],
  error: ''
}

export const fetchLandingAboutData = createAsyncThunk('landingAboutData/fetchLandingAboutData', async (_, { dispatch }) => {
  dispatch(setLoadingLanding(true));
  try {
    const response = await axios.get('/featuresdata');
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching: ${error}`)
  } finally {
    dispatch(setLoadingLanding(false));
  }
})


const landingAboutDataSlice = createSlice({
  name: 'landingAboutData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.loading = true
    // })
    builder.addCase(fetchLandingAboutData.fulfilled, (state, action: PayloadAction<LandingAboutDataProps[]>) => {
      // state.loading = false
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchLandingAboutData.rejected, (state, action) => {
      // state.loading = false
      state.info = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error
    })
  }
})

export default landingAboutDataSlice.reducer
