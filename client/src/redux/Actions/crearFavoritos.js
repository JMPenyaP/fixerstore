import { SAVE_FAV } from "../actionTypes";
import axios from "axios";

export const crearFavoritos = (id) => {
  try {
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:3001/favorites/${id}`
      );
      dispatch({
        type: SAVE_FAV,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
