import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../../preloader/loadingSliceShop'
import { ShopCustomerOrdersProps, ShopCustomerOrdersInitState } from './KopiiShopOrdersProps'

const initialState: ShopCustomerOrdersInitState = {
  info: [],
  error: ''
}

export const fetchShopCustomerOrders = createAsyncThunk('shopCustomerOrders/fetchShopCustomerOrders', async (_, { dispatch }) => {
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


const shopCustomerOrdersSlice = createSlice({
  name: 'shopCustomerOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopCustomerOrders.fulfilled, (state, action: PayloadAction<ShopCustomerOrdersProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopCustomerOrders.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default shopCustomerOrdersSlice.reducer
