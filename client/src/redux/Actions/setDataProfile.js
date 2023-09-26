import { SET_DATA_PROFILE } from "../actionTypes";

export const setDataProfile = (userData) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATA_PROFILE,
      payload: userData,
    });
  };
};
