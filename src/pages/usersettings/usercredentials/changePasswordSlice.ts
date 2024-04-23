import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  current_password: string;
  password: string;
  confirm_password: string;
  error: string | null;
  message: string;
}
const initialState: InitialStateProps = {
  current_password: "",
  password: "",
  confirm_password: "",
  error: "",
  message: ''
}

const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {
    currentPasswordInput: (state, action: PayloadAction<string>) => {
      state.current_password = action.payload;
    },
    passwordInput: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    confirmPasswordInput: (state, action: PayloadAction<string>) => {
      state.confirm_password = action.payload;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    },
    inputReset: (state, action: PayloadAction<string>) => {
      state.current_password = action.payload;
      state.password = action.payload;
      state.confirm_password = action.payload;
    },
  },
})

export default changePasswordSlice.reducer
export const {
  currentPasswordInput,
  passwordInput,
  confirmPasswordInput,
  errorMessage,
  inputReset
} = changePasswordSlice.actions
