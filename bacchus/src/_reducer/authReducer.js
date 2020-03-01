import * as actionType from "../_actions/ActionType";

const authReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.LOGIN:
      console.log("HELLO LOGIN");
      return (newState = state + action.payload);

    default:
      return state;
  }
};

export default authReducer;
