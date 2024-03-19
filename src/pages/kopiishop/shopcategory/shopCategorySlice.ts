import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { setLoadingShop } from '../../preloader/loadingSliceShop'
import { ShopCategoryProps, ShopCategoryInitState } from '../KopiiShopProps'

const initialState: ShopCategoryInitState = {
  info: [],
  error: ''
}

export const fetchShopCategory = createAsyncThunk('shopCategory/fetchShopCategory', async (_, { dispatch }) => {
  dispatch(setLoadingShop(true));
  try {
    const response = await axios.get('https://kopii-mp2.onrender.com/kopii/categories');
    return response.data.data;
  } catch (error) {
    throw error;
  } finally {
    dispatch(setLoadingShop(false));
  }
})


const shopCategorySlice = createSlice({
  name: 'shopCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShopCategory.fulfilled, (state, action: PayloadAction<ShopCategoryProps[]>) => {
      state.info = action.payload
      state.error = ''
    })
    builder.addCase(fetchShopCategory.rejected, (state, action) => {
      state.info = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default shopCategorySlice.reducer
