import actionConstant from "./actionTypes";

export const cartListItem = (payload) => {
  return {
    type: actionConstant.CART_ITEM,
    payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: actionConstant.DELETE_ITEM,
    payload,
  };
};
