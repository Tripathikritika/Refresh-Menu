import { REQUEST, ERROR, SEND } from "./actionTypes";

const initState = {
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
  errorMsg: ""
};

const reducer = (state = initState, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        errorMsg: "",
        isError: false,
      };
      case SEND:
        return {
          ...state,
          token: payload.token,
          isAuth: true,
          errorMsg: "",
          isLoading: false,
        };
      case ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
        isError: true,
      };
    default:
      return state;
  }
};
export default reducer;
