import { SET_CHANGE} from "../actionTypes";

const setModify = () => {
    return (dispatch) => {
      dispatch({
        type: SET_CHANGE,
        payload: null
      });
    };
  };

  export default setModify