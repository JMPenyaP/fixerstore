import { DELETE_FAV } from "../actionTypes";
import axios from "axios";

export const borrarFavoritos = (id) => {
  try {
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:3001/favorites/delete`
      );
      dispatch({
        type: DELETE_FAV,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
