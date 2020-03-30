import axios from "axios";
import { store, socket } from "../_helpers";
import { userConstants } from "../_constants";

export const userService = {
  postSignUp,
  postLogIn
};

export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogIn(loginCredentials) {
  console.log(loginCredentials);
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}