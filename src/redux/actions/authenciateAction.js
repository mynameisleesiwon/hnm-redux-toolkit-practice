import { authActions } from "../reducers/authentiateReducer";

function login(id, password) {
  return (dispatch, getState) => {
    console.log("login success reducer");
    dispatch(authActions.login({ id, password }));
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch(authActions.logout());
  };
}

export const authenticateAction = { login, logout };
