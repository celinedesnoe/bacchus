import * as actionType from "./ActionType";
import { postSignUp, postCellar, postLogIn } from "../api";

// export const userLogIn = () => ({
//   type: actionType.LOGIN,
//   payload: 1
// });

export const userActions = {
  userLogin,
  userSignUp
};

function userLogin(user) {
  return new Promise((resolve, reject) => {
    postLogIn(user)
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function userSignUp(user) {
  return new Promise((resolve, reject) => {
    postSignUp(user)
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  });
}
