import { SEND, ERROR, REQUEST } from "./actionTypes";
import axios from "axios";

export const request = () => ({
  type: REQUEST
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
    const { data } = await axios.get(
      `http://localhost:8000/login/${payload.inp}`
    );
    dispatch(send(data));
    data.mobile &&
      (await axios.get(
        `https://api.msg91.com/api/sendhttp.php?authkey=346433Aq8fEsct5Qqo5fa4ca5aP1&mobiles=${data.mobile}&country=91&message=Hello! This is a test message ${payload.generatedOtp}&sender=PROFERS&route=4`
      ));
  } catch (err) {
    if (err.response) {
      dispatch(foundError(err.response.data));
    }
  }
};
