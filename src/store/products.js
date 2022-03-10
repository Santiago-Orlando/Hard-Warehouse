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

export const getCategoryProducts = createAsyncThunk(
  "GET_CATEGORY_PRODUCTS",
  productsService.categoriesProductService
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
      state.loading = false
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [getSingleProduct.pending]: state => {
      state.loading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload
      state.loading = false
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [getCategoryProducts.pending]: state => {
      state.loading = true
    },
    [getCategoryProducts.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [getCategoryProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default productsSlice.reducer
