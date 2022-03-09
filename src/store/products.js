import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as productsService from "../services/productsService"

const productsInitialState = {
  loading: false,
  data: [],
  error: "",
  singleProduct: {},
}

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  productsService.allProductsService
)

export const getSingleProduct = createAsyncThunk(
  "GET_SINGLE_PRODUCT",
  productsService.singleProductService
)

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  extraReducers: {
    [getProducts.pending]: state => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.data = action.payload
    },
    [getProducts.rejected]: (state, action) => {
      state.error = action.error.message
    },
    [getSingleProduct.pending]: state => {
      state.loading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.error = action.error.message
    },
  },
})

export default productsSlice.reducer
