import { USER_PROFILE } from "../actionTypes";
import axios from "axios";

export const loginUser = (userData) => {
  try {
    return async (dispatch) => {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        userData
      );
      dispatch({
        type: USER_PROFILE,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
