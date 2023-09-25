import { USER_PROFILE } from "../actionTypes"


const logOutUser = () => {
    return (dispatch) => {
      const response = {
        success: null,
        userData: {}
      };
      dispatch({
        type: USER_PROFILE,
        payload: response
      });
    };
  };
  
  export default logOutUser;