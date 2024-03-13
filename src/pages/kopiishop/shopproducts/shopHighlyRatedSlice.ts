import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../loadingSliceShop'
import { ShopProductInitState, ShopProductProps } from '../KopiiShopProps'

const initialState: ShopProductInitState = {
  info: [],
  error: ''
}

export const fetchShopHighlyRated = createAsyncThunk('shopHighlyRated/fetchShopHighlyRated', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/shop/highrated');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingShop(false));
  }
})


const shopHighlyRatedSlice = createSlice({
  name: 'shopHighlyRated',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopHighlyRated.fulfilled, (state, action: PayloadAction<ShopProductProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopHighlyRated.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default shopHighlyRatedSlice.reducer
