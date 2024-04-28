import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  error: string | null;
}
const initialState: InitialStateProps = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
  error: ""
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    nameInput: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload;
    },
    surnameInput: (state, action: PayloadAction<string>) => {
      state.last_name = action.payload;
    },
    emailInput: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    passwordInput: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    confirmPasswordInput: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    passwordToggle: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload
    },
    inputReset: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload;
      state.last_name = action.payload;
      state.email = action.payload;
      state.password = action.payload;
      state.confirmPassword = action.payload;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    }
  },
})

export default signupSlice.reducer
export const {
  nameInput,
  surnameInput,
  emailInput,
  passwordInput,
  passwordToggle,
  confirmPasswordInput,
  errorMessage,
  inputReset
} = signupSlice.actions
