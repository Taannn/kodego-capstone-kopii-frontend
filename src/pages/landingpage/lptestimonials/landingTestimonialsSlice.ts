import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoadingLanding } from '../../preloader/loadingSliceLanding';
import { LandingTestimonialsInitState, LandingTestimonialsProps } from '../LandingPageProps';

const initialState: LandingTestimonialsInitState = {
  info: [],
  error: ''
}

export const fetchLandingTestimonials = createAsyncThunk('landingTestimonials/fetchLandingTestimonials', async (_, { dispatch }) => {
  dispatch(setLoadingLanding(true));
  try {
    const response = await axios.get('/testimonials');
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching: ${error}`);
  } finally {
    dispatch(setLoadingLanding(false));
  }
})


const landingTestimonialsSlice = createSlice({
  name: 'landingTestimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLandingTestimonials.fulfilled, (state, action: PayloadAction<LandingTestimonialsProps[]>) => {
      // state.loading = false
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchLandingTestimonials.rejected, (state, action) => {
      // state.loading = false
      state.info = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error parang yung not nullable an unary not ! ope
    })
  }
})

export default landingTestimonialsSlice.reducer
