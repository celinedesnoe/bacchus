import API from "../_helpers/api";
import { store, socket } from "../_helpers";
import Jimp from "jimp";
import { userConstants } from "../_constants";

export const userService = {
  login,
  getAll,
  logout,
  refreshToken,
  updateNotificationsPreferences,
  modifyUser,
  tokenAuth,
  me
};

function tokenAuth(refreshToken, email) {
  return new Promise((resolve, reject) => {
    localStorage.removeItem("user");
    API.post("/refreshtokens", {
      refresh_token: refreshToken,
      email: email
    })
      .then(response => {
        let tokens = response.data.tokens;
        localStorage.setItem(
          "user",
          JSON.stringify({ tokens: tokens, Email: email })
        );
        API.defaults.headers.common["access_token"] = tokens.access_token;
        store.dispatch({
          type: "UPDATE_USER",
          user: { tokens: tokens, Email: email }
        });
        resolve(tokens);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function me() {
  return new Promise((resolve, reject) => {
    API.get("/me")
      .then(response => {
        let user = store.getState().authentication.user;
        let refreshed = response.data.user;
        refreshed.tokens = user.tokens;
        refreshed.Badges = response.data.userDetails.Badges;
        refreshed.NotificationFollow =
          response.data.userDetails.NotificationFollow;
        store.dispatch({
          type: "UPDATE_USER",
          user: refreshed
        });
        resolve(refreshed);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function updateNotificationsPreferences(payload) {
  let user = store.getState().authentication.user;

  user.NotificationFollow[payload] = !user.NotificationFollow[payload];

  let body = {};
  body[payload] = user.NotificationFollow[payload];

  API.put("/me/notifications", body);

  return { type: "UPDATE_USER", user };
}

function refreshToken(refreshToken, email, callback) {
  let fullUser = store.getState().authentication.user;
  return new Promise(() => {
    API.post("/refreshtokens", {
      refresh_token: refreshToken,
      email: email
    })
      .then(response => {
        let localUser = null;
        try {
          localUser = localStorage.getItem("user");
        } catch (e) {
          console.log("no localStorage");
        }
        if (localUser) {
          let user = JSON.parse(localUser);
          user.tokens = response.data.tokens;
          fullUser.tokens = response.data.tokens;
          store.dispatch({ type: "UPDATE_USER", user: fullUser });
          localStorage.setItem(
            "user",
            JSON.stringify({ tokens: user.tokens, Email: user.Email })
          );
        }
        callback(response.data.tokens);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

function login(username, password, projectguid, callback) {
  return new Promise(() => {
    API.post("/widget/login", {
      email: username,
      password: password,
      appguid: projectguid
    })
      .then(response => {
        if (response.data.return_code === 6) {
          callback(null, "code");
        }
        response.data.user.tokens = response.data.tokens;
        response.data.user.Badges = response.data.userDetails.Badges;
        response.data.user.NotificationFollow =
          response.data.userDetails.NotificationFollow;
        callback(response.data.user, response.data.application);
        try {
          localStorage.setItem(
            "user",
            JSON.stringify({
              tokens: response.data.tokens,
              Email: response.data.user.Email
            })
          );
        } catch (e) {
          console.log("no localStorage");
        }
      })
      .catch(err => {
        if (!err) {
          return;
        }
        if (!err.response) {
          return;
        }
        let returnCode = err.response.data.return_code;
        callback(null, returnCode);
        // switch (returnCode) {
        //   case 1:
        //     callback(null, "Wrong email");
        //     break;
        //   case 2:
        //     callback(null, "Wrong password format");
        //     break;
        //   case 3:
        //     callback(null, "Wrong key");
        //     break;
        //   case 4:
        //     callback(null, "Account does not exist");
        //     break;
        //   case 5:
        //     callback(null, "Password does not match any account.");
        //     break;
        //   default:
        //     callback(null, "Error");
        //     break;
        // }
      });
  });
}

function getAll(token, project, callback) {
  if (!project || !token) {
    return Promise.reject("wrong argument");
  }
  return new Promise((resolve, reject) => {
    API.defaults.headers.common["access_token"] = token.access_token;
    API.get("/applications/" + project + "/users")
      .then(res => {
        socket.getLiveUsers(project);
        resolve(res.data.users);
        callback(res.data.users);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

function dataURItoBlob(dataURI) {
  if (is_url(dataURI)) {
    return dataURI;
  }
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  //New Code
  return new Blob([ab], { type: mimeString });
}

function scaleProfile(Avatar) {
  return new Promise((resolve, reject) => {
    if (is_url(Avatar)) {
      Jimp.read(Avatar)
        .then(image => {
          image.resize(500, Jimp.AUTO);
          image
            .getBase64Async(Jimp.MIME_JPEG)
            .then(val => {
              resolve(val);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(() => {
          resolve(Avatar);
        });
    } else {
      resolve(Avatar);
    }
  });
}

function modifyUser(user) {
  let users = store.getState().users;
  let me = store.getState().authentication.user;
  return new Promise((resolve, reject) => {
    if (!users) {
      console.error("need 'users' in store");
      return reject("need 'users' in store");
    }
    let target = users.find(elem => elem.id === user.id);
    if (!target) {
      console.error("can't find user in your app");
      return reject("can't find user in your app");
    }

    let formData = new FormData();
    let payload = {
      FirstName: user.FirstName ? user.FirstName : target.FirstName,
      LastName: user.LastName ? user.LastName : target.LastName,
      JobTitle: user.JobTitle !== undefined ? user.JobTitle : target.JobTitle,
      Description:
        user.Description !== undefined ? user.Description : target.Description,
      Avatar: user.Avatar ? user.Avatar : target.Avatar
    };

    formData.append("firstName", payload.FirstName);
    formData.append("lastName", payload.LastName);
    formData.append("jobTitle", payload.JobTitle);
    formData.append("description", payload.Description);

    scaleProfile(payload.Avatar)
      .then(photo => {
        formData.append(
          "avatar",
          photo.includes("#") ? photo : dataURItoBlob(photo)
        );
        API.put(`/users`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(res => {
            let notif = {
              _id:
                "5dc023d168c2990011bb74b0" + Math.round(Math.random() * 1000),
              CreatorId: me.id,
              CreatorFirstName: me.FirstName,
              CreatorLastName: me.LastName,
              Type: "U8",
              ApplicationId: store.getState().applicationReducer.id,
              Views: [],
              Object: null,
              CreationDate: Date.now(),
              Read: true
            };
            payload.Avatar = res.data.user.Avatar;
            if (me.id === user.id) {
              if (
                user.JobTitle &&
                user.JobTitle !== undefined &&
                user.JobTitle !== me.JobTitle
              ) {
                me.Badges[1].Advancement[1] = true;
              }
              if (
                user.Description &&
                user.Description !== undefined &&
                user.Description !== me.Description
              ) {
                me.Badges[1].Advancement[3] = true;
              }
              if (
                user.Avatar &&
                user.Avatar !== undefined &&
                user.Avatar !== me.Avatar
              ) {
                me.Badges[1].Advancement[2] = true;
              }
              me.FirstName = payload.FirstName;
              me.LastName = payload.LastName;
              me.JobTitle = payload.JobTitle;
              me.Description = payload.Description;
              me.Avatar = payload.Avatar;
              notif.Object = me;
              store.dispatch({ type: "UPDATE_USER", user: me });
            }
            target.FirstName = payload.FirstName;
            target.LastName = payload.LastName;
            target.JobTitle = payload.JobTitle;
            target.Description = payload.Description;
            target.Avatar = payload.Avatar;
            notif.Object = target;
            store.dispatch({ type: "UPDATE_OTHER_USER", user: target });
            store.dispatch({
              type: "ADD_NOTIFICATION",
              read: true,
              notification: notif
            });
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
}

function logout() {
  store.dispatch({
    type: "ADD_ALL_NOTIFICATIONS",
    unreadCount: 0,
    notifications: []
  });
  localStorage.clear();
  store.dispatch({ type: "REFRESH_LOOP", loops: [] });
  store.dispatch({ type: "SELECT_APP", app: null });
  store.dispatch({ type: "LOGOUT" });
  return { type: userConstants.LOGOUT };
}
