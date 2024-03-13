import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../loadingSliceShop'
import { ShopCarouselInitState, ShopCarouselProps } from '../KopiiShopProps'

const initialState: ShopCarouselInitState = {
  info: [],
  error: ''
}

export const fetchShopCarousel = createAsyncThunk('shopCarousel/fetchShopCarousel', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/carousel');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingShop(false));
  }
})


const shopCarouselSlice = createSlice({
  name: 'shopCarousel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopCarousel.fulfilled, (state, action: PayloadAction<ShopCarouselProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopCarousel.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default shopCarouselSlice.reducer
