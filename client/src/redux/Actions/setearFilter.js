import { SET_FILTER } from "../actionTypes";

export const setFilter = (set) => {
  return async function (dispatch) {
    try {
      dispatch({ type: SET_FILTER, payload: set });
    } catch (error) {
      alert(error);
    }
  };
};
