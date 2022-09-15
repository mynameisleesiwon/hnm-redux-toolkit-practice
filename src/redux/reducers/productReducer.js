import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  product: null,
};

// createSlice안에는 반드시 3개의 매개변수가 있어야 한다.

// name : slice의 이름
// initialState : 초기값
// reducers는 객체(함수로 이루어진)를 받는다.
// 함수는 state와 action을 매개변수로 받는다.

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      // return과 ...state 할 필요없다.
      state.productList = action.payload.data;
    },
    getProductDetail(state, action) {
      state.product = action.payload.data;
    },
  },
});

console.log("productSlice", productSlice);

// productSlice안에 있는 reducer, actions를 전달
export default productSlice.reducer;
export const productActions = productSlice.actions;
