import { postSignUp, postCellar, postLogIn } from "../api";
import { store } from "../_helpers/store";

function userLogin(user) {
  postLogIn(user)
    .then(user => {
      let userLogged = user.data;
      store.dispatch({
        type: "LOGIN",
        userLogged
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function userSignUp(user) {
  postSignUp(user)
    .then(user => {
      let userLogged = user.data;
      store.dispatch({
        type: "LOGIN",
        userLogged
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
