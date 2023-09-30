import { FAVORITOS } from "../actionTypes";
import axios from "axios";

export const userFavoritos = (UserId) => {

  try {
    return async (dispatch) => {
      const response = await axios.get(
        `http://localhost:3001/favorites/${UserId}`
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
