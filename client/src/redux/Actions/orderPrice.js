import { ORDER_PRICE } from "../actionTypes";

export const orderPrice = (payload) => {
  return {
    type: ORDER_PRICE,
    payload: payload,
  };
};
