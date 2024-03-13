import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../kopiishop/loadingSliceShop'
import { ShopCustomerCartInitState, ShopCustomerCartProps } from './KopiiShopCartProps'

const initialState: ShopCustomerCartInitState = {
  info: [],
  error: ''
}

export const fetchShopCustomerCart = createAsyncThunk('shopCustomerCart/fetchShopCustomerCart', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/shop/cart', {
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


const shopCustomerCartSlice = createSlice({
  name: 'shopCustomerCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopCustomerCart.fulfilled, (state, action: PayloadAction<ShopCustomerCartProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopCustomerCart.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default shopCustomerCartSlice.reducer
