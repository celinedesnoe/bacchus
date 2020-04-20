import { userConstants } from "../_actions/ActionType";

export const authReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case userConstants.LOGIN:
      return (newState = action.userLogged);

    default:
      return state;
  }
};
