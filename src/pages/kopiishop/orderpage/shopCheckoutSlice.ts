import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  address: string;
  city: string;
  zipCode: string;
  error: string | null;
  finalQuantity: number | null;
  finalPrice: string | null;
  productId: number | null;
  productImg: string;
  productName: string;
  productDesc: string;
}
const initialState: InitialStateProps = {
  address: "",
  city: "",
  zipCode: "",
  error: "",
  finalQuantity: null,
  finalPrice: null,
  productId: null,
  productImg: '',
  productName: '',
  productDesc: ''
}

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
    }
  },
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
  selectedProductDesc
} = shopCheckoutSlice.actions
