import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

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

export const userLogin = createAsyncThunk('login/userLogin', async (data: {
  email: string;
  password: string;
}, { dispatch }) => {
  try {
    const res = await axios.post("https://kopii-mp2.onrender.com/kopii/login", {
      email: data.email,
      password: data.password
    });
    const { token, customer_id, expiresIn } = res.data;
    localStorage.setItem('token', token);
    console.log('User logged in : ', customer_id);
    console.log('Session expires in : ', expiresIn);
    dispatch(loggedInToggle(true));
    dispatch(emailInput(''));
    dispatch(passwordInput(''));
    return res.data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      dispatch(errorMessage("User not found"));
    } else if (error.response && error.response.status === 401) {
      dispatch(errorMessage("Invalid password"));
    } else {
      console.log('Login Failed : ', error.message);
      dispatch(errorMessage("An unexpected error occurred"));
    }
  }

});

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
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.message = action.payload;
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.message = ''
      state.error = action.error.message || 'Error'
    })
  }
})

export default loginSlice.reducer
export const {
  emailInput,
  passwordInput,
  passwordToggle,
  errorMessage,
  loggedInToggle
} = loginSlice.actions
