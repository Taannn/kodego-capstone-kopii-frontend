import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  showPassword: boolean;
  error: string | null;
}
const initialState: InitialStateProps = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
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
    passwordToggle: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    }
  },
})

// default export
export default signupSlice.reducer
// named export
export const {
  nameInput,
  surnameInput,
  emailInput,
  passwordInput,
  passwordToggle,
  errorMessage
} = signupSlice.actions
