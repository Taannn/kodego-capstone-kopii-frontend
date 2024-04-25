import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateProps = {
  reason: string;
  cancelToggle: boolean;
}
const initialState: InitialStateProps = {
  reason: "",
  cancelToggle: false
}

const cancelReasonSlice = createSlice({
  name: 'cancelReason',
  initialState,
  reducers: {
    reasonInput: (state, action: PayloadAction<string>) => {
      state.reason = action.payload;
    },
    setCancelToggle: (state, action: PayloadAction<boolean>) => {
      state.cancelToggle = action.payload
    }
  },
})

// default export
export default cancelReasonSlice.reducer
// named export
export const {
  reasonInput,
  setCancelToggle
} = cancelReasonSlice.actions
