import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../loadingSliceShop'
import { ShopProductInitState, ShopProductProps } from '../KopiiShopProps';

const initialState: ShopProductInitState = {
  info: [],
  error: ''
}

export const fetchShopDailyDiscover = createAsyncThunk('shopDailyDiscover/fetchShopDailyDiscover', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/shop');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingShop(false));
  }
})


const shopDailyDiscoverSlice = createSlice({
  name: 'shopDailyDiscover',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopDailyDiscover.fulfilled, (state, action: PayloadAction<ShopProductProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopDailyDiscover.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default shopDailyDiscoverSlice.reducer
