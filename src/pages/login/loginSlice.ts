import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type InitialStateProps = {
  email: string;
  password: string;
  showPassword: boolean;
  error: string | null;
  isLoggedIn: boolean;
  message: string;
}
const initialState: InitialStateProps = {
  email: "",
  password: "",
  showPassword: false,
  error: "",
  isLoggedIn: false,
  message: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    emailInput: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    passwordInput: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    passwordToggle: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    },
    loggedInToggle: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }
  },
})

export default loginSlice.reducer
export const {
  emailInput,
  passwordInput,
  passwordToggle,
  errorMessage,
  loggedInToggle
} = loginSlice.actions
