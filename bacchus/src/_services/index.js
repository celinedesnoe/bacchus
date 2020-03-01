import { postSignUp, postCellar, postLogIn } from "../api";

export const userService = {
  loginUser
};

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
