import actionConstant from "./actionTypes";
import { loadData, saveData } from "./localStorage";

export const initState = {
  cartList: loadData("cartItem") || [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionConstant.CART_ITEM:
      saveData("cartItem", action.payload);
      return {
        ...state,
        cartList: action.payload,
      };

    case actionConstant.DELETE_ITEM:
      saveData("cartItem" , []);
      return {
        ...state,
        cartList: [],
      };

    default:
      return state;
  }
};
export default reducer;
