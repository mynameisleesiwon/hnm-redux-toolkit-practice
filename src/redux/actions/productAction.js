import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mynameisleesiwon/hnm-react-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    // 매개변수로 전달된 값은 알아서 payload라는 필드 아래로 들어감
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mynameisleesiwon/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    dispatch(productActions.getProductDetail({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
