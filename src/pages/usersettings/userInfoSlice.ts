import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../preloader/loadingSliceShop'
import { ShopUserInfoInitState, ShopUserInfoProps } from './UserInfoProps'

const initialState: ShopUserInfoInitState = {
  info: [],
  error: ''
}

export const fetchShopUserInfo = createAsyncThunk('shopUserInfo/fetchShopUserInfo', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/settings/userinfo', {
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


const userInfoSlice = createSlice({
  name: 'shopUserInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopUserInfo.fulfilled, (state, action: PayloadAction<ShopUserInfoProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopUserInfo.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default userInfoSlice.reducer
