import { bottleConstants } from "../_actions/ActionType";

export const bottlesReducer = (state = [], action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case bottleConstants.ADD:
      return state.push(action.newBottle);
    case bottleConstants.GETALL:
      return state.concat(action.allBottles);
    default:
      return state;
  }
};
