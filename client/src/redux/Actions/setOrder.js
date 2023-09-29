import { SET_ORDER } from "../actionTypes";

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    payload: order
  };
};


