import { SAVE_FAV } from "../actionTypes";
import axios from "axios";

export const crearFavoritos = ({ userData, product}) => {
  try {
    const fav = {userId: userData.id, product}
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:3001/favorites/`,fav 
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
