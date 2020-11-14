import { REQUEST, ERROR, SEND } from "./actionTypes";

const initState = {
  token: "",
  mobile: "",
  email: "",
  isAuth: false,
  isLoading: false,
  isError: false,
  message: "",
};

const otpVerifyReducer = (state = initState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        message: "",
        isError: false,
      };
    case SEND:
      return {
        ...state,
        isToken: true,
        token: payload.accessToken,
        mobile: payload.mobile,
        email: payload.email,
        message: "",
        isLoading: false,
      };
    case ERROR:
      return {
        ...state,
        isToken: false,
        isLoading: false,
        message: payload.message,
        isError: true,
      };
    default:
      return state;
  }
};
export default otpVerifyReducer;
