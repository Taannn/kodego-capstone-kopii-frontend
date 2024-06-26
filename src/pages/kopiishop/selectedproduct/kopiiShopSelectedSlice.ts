import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoadingShop } from '../../preloader/loadingSliceShop';
import { ShopSelectedProductInitState, ShopSelectedProductProps } from '../KopiiShopProps';

const initialState: ShopSelectedProductInitState = {
  info: [],
  error: ''
}

export const fetchShopSelectedProduct = createAsyncThunk('shopSelectedProduct/fetchShopSelectedProduct', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const response = await axios.get('/shop');
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching: ${error}`);
  } finally {
    dispatch(setLoadingShop(false));
  }
})


const shopSelectedProductSlice = createSlice({
  name: 'shopSelectedProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopSelectedProduct.fulfilled, (state, action: PayloadAction<ShopSelectedProductProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopSelectedProduct.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
});

export default shopSelectedProductSlice.reducer;
