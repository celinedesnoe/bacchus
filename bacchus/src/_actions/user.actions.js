import { userConstants } from "../_constants";
import { userService } from "../_services";
import API from "../_helpers/api";
import { store } from "../_helpers";

export const userActions = {
  login,
  me
};

function me() {
  return new Promise((resolve, reject) => {
    userService
      .me()
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function login(username, password, projectguid, callback) {
  return dispatch => {
    request({ username });

    userService
      .login(username, password, projectguid, callback)
      .then(user => {
        dispatch(success(user));
      })
      .catch(err => {
        dispatch(failure(err));
      });
  };
}
