import { SEND, ERROR, REQUEST } from "./actionTypes";
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

export const verifyOtp = (payload) => async (dispatch) => {
  dispatch(request());
  try {
    const { data } = await axios.get(`http://localhost:8000/login/${payload}`);
    dispatch(send(data));
} catch (err) {
    dispatch(foundError(err.response.data));
  }
};
