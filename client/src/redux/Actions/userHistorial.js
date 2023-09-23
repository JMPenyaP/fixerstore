import { HISTORIAL } from "../actionTypes";
import axios from "axios";

export const userHistorial = (id) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/`);
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
