import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import userSlice from "./user"
import productsSlice from "./products"
import Reducer from "./Reducer"

const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    reducer: {
      user: userSlice,
      products: productsSlice,
      //cart: Reducer
    },
  })
  
  export default store