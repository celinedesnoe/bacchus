import * as actionType from "./ActionType";
import { postSignUp, postCellar, postLogIn } from "../api";

// export const userLogIn = () => ({
//   type: actionType.LOGIN,
//   payload: 1
// });

export const userActions = {
  userLogin
};

function userLogin(user) {
  // console.log("HELLO LOGIN");
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
