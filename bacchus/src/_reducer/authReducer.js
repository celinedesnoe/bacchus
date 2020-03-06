import { userConstants } from "../_actions/ActionType";

export const authReducer = (state = 0, action) => {
  console.log("state + action.payload", state + action.payload);
  let newState;

  switch (action.type) {
    case userConstants.LOGIN:
      console.log("state + action.payload", state + action.payload);
      return (newState = state + action.payload);

    default:
      return state;
  }
};
