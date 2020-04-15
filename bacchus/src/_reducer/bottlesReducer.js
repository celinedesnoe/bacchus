import { bottleConstants } from "../_actions/ActionType";

export const bottlesReducer = (state = [], action) => {
  switch (action.type) {
    case bottleConstants.ADD:
      return state.concat(action.newBottle);
    case bottleConstants.GETALL:
      return state.concat(action.allBottles);
    case bottleConstants.UPDATE:
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.bottleUpdated._id) {
          state[i] = action.bottleUpdated;
        }
      }
      return state;
    default:
      return state;
  }
};
