import { FAVORITOS } from "../actionTypes";
import axios from "axios";

export const userFavoritos = (id) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(
        `http://localhost:3001/favoritos/${id}`
      );
      dispatch({
        type: FAVORITOS,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
