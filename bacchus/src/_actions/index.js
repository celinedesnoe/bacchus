import { userConstants } from "./ActionType";
import { postSignUp, postCellar, postLogIn } from "../api";

// export const userLogIn = () => ({
//   type: actionType.LOGIN,
//   payload: 1
// });

function success(user) {
  console.log("HELLO");
  return { type: "LOGIN", user };
}

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
  return function(dispatch) {
    dispatch({ type: "LOGIN", user });
    return new Promise((resolve, reject) => {
      postSignUp(user)
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}

export const userActions = {
  userLogin,
  userSignUp,
  success
};
