import { REQUEST, ERROR, SEND } from "./actionTypes";

const initState = {
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case SEND:
        console.log(payload)
      return {
        ...state,
        token: payload.token,
        isAuth: true,
        isLoading: false,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default reducer;
