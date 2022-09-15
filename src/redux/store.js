import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authentiateReducer from "./reducers/authentiateReducer";

// configureStore에는 자동으로
// composeWithDevTools
// applyMiddleware(thunk)
// combinereducer
// 셋업되어있음

let store = configureStore({
  reducer: {
    auth: authentiateReducer,
    product: productReducer,
  },
});

export default store;
