import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../../preloader/loadingSliceShop'
import { ShopCustomerOrdersInitState, ShopCustomerOrdersProps } from './ShopOrdersProps';


const initialState: ShopCustomerOrdersInitState = {
  info: [],
  error: ''
}

export const fetchShopOrders = createAsyncThunk('kopiiShopOrders/fetchShopOrders', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('/shop/orders', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingShop(false));
  }
})


const kopiiShopOrdersSlice = createSlice({
  name: 'kopiiShopOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopOrders.fulfilled, (state, action: PayloadAction<ShopCustomerOrdersProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopOrders.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default kopiiShopOrdersSlice.reducer
