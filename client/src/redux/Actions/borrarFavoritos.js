import { DELETE_FAV } from "../actionTypes";
import axios from "axios";

export const borrarFavoritos = ({userData, product}) => {

  console.log(userData);
  try {
    const fav = {userId: userData.id, favoriteId: product.id }
    return async (dispatch) => {
      const response = await axios.post(
        `http://localhost:3001/favorites/delete`, fav
      );
      dispatch({
        type: DELETE_FAV,
        payload: {data: response.data, favId: fav.favoriteId}, 
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
