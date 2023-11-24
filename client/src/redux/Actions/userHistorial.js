import { HISTORIAL } from "../actionTypes";
import axios from "axios";

export const userHistorial = (userId) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/order/${userId}`);
      dispatch({
        type: HISTORIAL,
        payload: response.data.orders,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
