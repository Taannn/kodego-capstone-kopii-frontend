import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingLanding } from '../../preloader/loadingSliceLanding'
import { LandingAboutListInitState, LandingAboutListProps } from '../LandingPageProps'

const initialState: LandingAboutListInitState = {
  info: [],
  error: ''
}

export const fetchLandingAboutList = createAsyncThunk('landingAboutList/fetchLandingAboutList', async (_, { dispatch }) => {
  dispatch(setLoadingLanding(true));
  try {
    const response = await axios.get('/featureslist');
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching: ${error}`)
  } finally {
    dispatch(setLoadingLanding(false));
  }
})


const landingAboutListSlice = createSlice({
  name: 'landingAboutList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLandingAboutList.fulfilled, (state, action: PayloadAction<LandingAboutListProps[]>) => {
      // state.loading = false
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchLandingAboutList.rejected, (state, action) => {
      // state.loading = false
      state.info = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error
    })
  }
})

export default landingAboutListSlice.reducer
