import { SEND, ERROR, REQUEST ,LOGOUT } from "./actionTypes";
import axios from "axios";

export const request = (payload) => ({
  type: REQUEST,
  payload,
});

export const send = (payload) => ({
  type: SEND,
  payload,
});

export const foundError = (payload) => ({
  type: ERROR,
  payload,
});

export const apiCall = (payload) => async (dispatch) => {
  
  dispatch(request());
  try {
    const { data } = await axios.post("http://localhost:8000/register", {
      firstname: payload.firstname,
      lastname: payload.lastname,
      mobile: payload.mobile,
      email: payload.email,
      password: payload.password,
    });
    dispatch(send(data));
  } catch (err) {
    dispatch(foundError(err.response.data));
  }
};

export const logoutFunction = () => ({
    type : LOGOUT
})