import { FILTER_CATEGORIES } from "../actionTypes";

export const filterCategories = (payload) => {
  return {
    type: FILTER_CATEGORIES,
    payload: payload,
  };
};
