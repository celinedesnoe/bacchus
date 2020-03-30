import { postSignUp, postCellar, postLogIn } from "../api";
import { store } from "../_helpers/store";

function userLogin(user) {
  postLogIn(user)
    .then(user => {
      store.dispatch({
        type: "LOGIN",
        user
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function userSignUp(user) {
  postSignUp(user)
    .then(user => {
      store.dispatch({
        type: "LOGIN",
        user
      });
    })
    .catch(err => {
      console.log("err", err);
    });
}

export const userActions = {
  userLogin,
  userSignUp
};
