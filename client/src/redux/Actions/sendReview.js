import { SEND_REVIEW } from "../actionTypes";
import axios from "axios";

export const sendReview = (review) => {
  try {
    return async (dispatch) => {
      const response = await axios.post(
        "http://localhost:3001/users/reviews",
        review
      );
      dispatch({
        type: SEND_REVIEW,
        payload: response.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
