import { GET_ALL_USERS } from "../actionTypes";
import axios from "axios";

export const getAllUsers= () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/users/`);
      const usuarios = response.data;
      dispatch({ 
        type: GET_ALL_USERS, 
        payload: usuarios.data
    });
    } catch (error) {
      return "Hubo un error al traer las ordenes: " + error.message;
    }
  };
};
