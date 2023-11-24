import { SET_NAME_SEARCH } from "../actionTypes";

export const setNameSearch = (name) => {
  return {
    type: SET_NAME_SEARCH,
    payload: name,
  };
};


