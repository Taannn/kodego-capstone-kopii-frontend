import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { setLoadingShop } from '../../preloader/loadingSliceShop';
import { CheckoutInitialStateProps } from '../KopiiShopProps';

const initialState: CheckoutInitialStateProps = {
  address: "",
  city: "",
  zipCode: "",
  error: "",
  finalQuantity: 0,
  finalPrice: '',
  productId: 0,
  productImg: '',
  productName: '',
  productDesc: '',
  shippingFee: 0,
  paymentMethod: '',
  orderStatus: '',
  totalAmount: ''
}

export const addShopOrder = createAsyncThunk('shopCheckout/addShopOrder', async (data: {
  productId: number;
  finalQuantity: number;
  finalPrice: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: string;
  shippingFee: number;
}, { dispatch }) => {
  dispatch(setLoadingShop(true))
  try {
    const price = parseFloat(data.finalPrice);
    const priceWithShipping =  (price + data.shippingFee).toFixed(2);
    const token = localStorage.getItem('token');
    const res = await axios.post("https://kopii-mp2.onrender.com/kopii/shop/addorder", {
      product_id: data.productId,
      quantity: data.finalQuantity,
      price: priceWithShipping,
      address: data.address,
      city: data.city,
      zip_code: data.zipCode,
      payment_method: data.paymentMethod
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const response = await axios.delete(`https://kopii-mp2.onrender.com/kopii/shop/cart/${data.productId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response.data.data);
    console.log('User data', res.data);
    dispatch(addressInput(''));
    dispatch(cityInput(''));
    dispatch(zipCodeInput(''));
    dispatch(quantitySetter(null));
    dispatch(priceSetter(null));
    dispatch(selectedProductId(null));
    dispatch(paymentMethodSetter(''));
    dispatch(totalAmountSetter(''));
    return response.data.data;
  } catch (error: any) {
    console.error(error);
  } finally {
    dispatch(setLoadingShop(false));
  }
});


const shopCheckoutSlice = createSlice({
  name: 'shopCheckout',
  initialState,
  reducers: {
    addressInput: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    cityInput: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    zipCodeInput: (state, action: PayloadAction<string>) => {
      state.zipCode = action.payload;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    },
    quantitySetter: (state, action) => {
      state.finalQuantity = action.payload;
    },
    priceSetter: (state, action) => {
      state.finalPrice = action.payload;
    },
    selectedProductId: (state, action) => {
      state.productId = action.payload;
    },
    selectedProductImg: (state, action) => {
      state.productImg = action.payload;
    },
    selectedProductName: (state, action) => {
      state.productName = action.payload;
    },
    selectedProductDesc: (state, action) => {
      state.productDesc = action.payload;
    },
    shippingFeeSetter: (state, action) => {
      state.shippingFee = action.payload;
    },
    paymentMethodSetter: (state, action) => {
      state.paymentMethod = action.payload;
    },
    totalAmountSetter: (state, action) => {
      state.totalAmount = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addShopOrder.fulfilled, (state, action) => {
      state.orderStatus = action.payload
    })
    builder.addCase(addShopOrder.rejected, (state, action) => {
      state.orderStatus = ''
      state.error = action.error.message || 'Error'
    })
  }
})

// default export
export default shopCheckoutSlice.reducer
// named export
export const {
  addressInput,
  cityInput,
  zipCodeInput,
  errorMessage,
  quantitySetter,
  priceSetter,
  selectedProductId,
  selectedProductImg,
  selectedProductName,
  selectedProductDesc,
  shippingFeeSetter,
  paymentMethodSetter,
  totalAmountSetter
} = shopCheckoutSlice.actions
