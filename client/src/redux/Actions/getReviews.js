import {REVIEWS} from "../actionTypes"
import axios from "axios"
// Mejor en estado local

export const getReviews = () => {
    return async function (dispatch) {
      try {
        const apiData = await axios.get(`http://localhost:3001/users/reviews`);
        const reviews = apiData.data;
        dispatch({ type:REVIEWS , payload: reviews });
      } catch (error) {
        return error.message;
      }
    };
  };
