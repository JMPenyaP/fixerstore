import { SET_USER_MENU } from "../actionTypes";

export const setUserMenu = (boolean) => ({
  type: SET_USER_MENU,
  payload: boolean,
});
