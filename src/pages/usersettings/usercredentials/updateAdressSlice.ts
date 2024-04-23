import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialStateProps = {
  address: string;
  city: string;
  zip_code: string;
  phone_number: string;
  error: string | null;
}
export type UpdateAddressProps = {
  userInfoUpdate: InitialStateProps;
}

const initialState: InitialStateProps = {
  address: "",
  city: "",
  zip_code: "",
  phone_number: "",
  error: ""
}

const updateAddressSlice = createSlice({
  name: 'updateAddress',
  initialState,
  reducers: {
    addressInput: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    cityInput: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    zipCodeInput: (state, action: PayloadAction<string>) => {
      state.zip_code = action.payload;
    },
    phoneNumberInput: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload;
    },
    inputReset: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
      state.city = action.payload;
      state.zip_code = action.payload;
      state.phone_number = action.payload;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    }
  },
})


export default updateAddressSlice.reducer
// named export
export const {
  addressInput,
  cityInput,
  zipCodeInput,
  phoneNumberInput,
  errorMessage,
  inputReset
} = updateAddressSlice.actions
