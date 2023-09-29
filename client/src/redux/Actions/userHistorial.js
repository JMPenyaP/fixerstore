import { HISTORIAL } from "../actionTypes";
import axios from "axios";

export const userHistorial = (userId) => {
  console.log(userId);
  try {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/order/${userId}`);
      dispatch({
        type: HISTORIAL,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
