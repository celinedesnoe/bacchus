import { userConstants } from "../_actions/ActionType";

export const authReducer = (state = 0, action) => {
  let newState;
  console.log("ACTION", action);
  switch (action.type) {
    case userConstants.LOGIN:
      return (newState = state + action.payload);

    default:
      return state;
  }
};
