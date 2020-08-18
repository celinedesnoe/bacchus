import { userConstants } from "../_actions/ActionType";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      return action.userLogged;

    default:
      return state;
  }
};
