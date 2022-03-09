import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as productsService from "../services/userServices"

const userInitialState = {
  loading: false,
  data: {},
  error: "",
}

export const sendLoginRequest = createAsyncThunk("LOGIN", productsService.userLoginService)

export const sendLogoutRequest = createAsyncThunk("LOGOUT", productsService.userLogoutService)

// export const persistUser = createAsyncThunk("PERSIST", productsService.persistUserService)

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [sendLoginRequest.pending]: state => {
      state.loading = true
    },
    [sendLoginRequest.fulfilled]: (state, action) => {
      state.data = action.payload
    },
    [sendLoginRequest.rejected]: (state, action) => {
      state.error = action.error.message
    },
    [sendLogoutRequest.pending]: state => {
      state.loading = true
    },
    [sendLogoutRequest.fulfilled]: (state, action) => {
      state.data = action.payload
    },
    [sendLogoutRequest.rejected]: (state, action) => {
      state.error = action.error.message
    },
  },
})

export default userSlice.reducer
