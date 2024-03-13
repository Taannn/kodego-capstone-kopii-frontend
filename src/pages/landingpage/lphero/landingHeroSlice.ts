import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingLanding } from '../loadingSliceLanding'
import { LandingHeroProps, LandingHeroInitState } from '../LandingPageProps'

const initialState: LandingHeroInitState = {
  info: [],
  error: ''
}

export const fetchLandingHero = createAsyncThunk('landingHero/fetchLandingHero', async (_, { dispatch }) => {
  dispatch(setLoadingLanding(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/kopiihero');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingLanding(false));
  }
})


const landingHeroSlice = createSlice({
  name: 'landingHero',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.loading = true
    // })
    builder.addCase(fetchLandingHero.fulfilled, (state, action: PayloadAction<LandingHeroProps[]>) => {
      // state.loading = false
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchLandingHero.rejected, (state, action) => {
      // state.loading = false
      state.info = []
      state.error = action.error.message || 'Error'  // to fix string | undefined error
    })
  }
})

export default landingHeroSlice.reducer
