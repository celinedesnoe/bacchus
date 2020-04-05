import { postNewBottle, getAllBottles } from "../_services/api";
import { store } from "../_helpers/store";

function addBottle(bottle) {
  let userId = store.getState().authReducer._id;
  bottle.userId = userId;
  postNewBottle(bottle)
    .then(bottle => {
      let newBottle = bottle.data;
      store.dispatch({
        type: "ADD",
        newBottle
      });
    })
    .catch(err => {
      console.log(err);
    });
}

function addAllBottles() {
  // let user = {};
  // let userId = store.getState().authReducer._id;
  // user.userId = userId;
  // }
  // user.color = "rosé";
  // console.log("UUUUUUSSSSER", user);
  let userId = store.getState().authReducer._id;
  getAllBottles(userId)
    .then(bottle => {
      let allBottles = bottle.data;
      store.dispatch({
        type: "GETALL",
        allBottles
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const bottleActions = {
  addBottle,
  addAllBottles
};
