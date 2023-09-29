import { SET_CAT } from "../actionTypes";

export const setCategoryId = (categoryId) => {
  return {
    type: SET_CAT,
    payload: categoryId
  };
};


