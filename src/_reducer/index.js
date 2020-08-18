import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bottlesReducer } from "./bottlesReducer";

const rootReducer = combineReducers({
  authReducer,
  bottlesReducer
});

export default rootReducer;
