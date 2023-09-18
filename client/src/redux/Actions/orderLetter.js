import { ORDER_LETTER } from "../actionTypes";

export const orderLetter = (payload) => {
  return {
    type: ORDER_LETTER,
    payload: payload,
  };
};
