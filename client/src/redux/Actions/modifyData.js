import { USER_CHANGE } from "../actionTypes";
import axios from "axios";

export const modifyData = (userData) => {
  try {
    return async (dispatch) => {
      const response = await axios.patch(
        `http://localhost:3001/users/${userData.id}`,
        userData
      );
      dispatch({
        type: USER_CHANGE,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};