import { postSignUp, postLogIn } from "../_services/api";
import { store } from "../_helpers/store";

function userLogin(user) {
  postLogIn(user)
    .then(user => {
      let userLogged = user.data;
      localStorage.setItem("currentUser", JSON.stringify(userLogged));

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

export const authActions = {
  userLogin,
  userSignUp
};
