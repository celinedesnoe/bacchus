import {
  postNewBottle,
  getAllBottles,
  updateOneBottle,
} from "../_services/api";
import { store } from "../_helpers/store";

function addBottle(bottle) {
  let userId = store.getState().authReducer._id;
  bottle.userId = userId;
  postNewBottle(bottle)
    .then((bottle) => {
      let newBottle = bottle.data;
      store.dispatch({
        type: "ADD",
        newBottle,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function addAllBottles() {
  return new Promise((resolve, reject) => {
    let userId = store.getState().authReducer._id;
    getAllBottles(userId)
      .then((bottle) => {
        let allBottles = bottle.data;
        store.dispatch({
          type: "GETALL",
          allBottles,
        });
        resolve(allBottles);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

function updateBottle(bottle) {
  return new Promise((resolve, reject) => {
    let payload = { bottle: bottle };
    updateOneBottle(bottle._id, payload)
      .then((bottle) => {
        let bottleUpdated = bottle.data;
        store.dispatch({
          type: "UPDATE",
          bottleUpdated,
        });
        resolve(bottleUpdated);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const bottleActions = {
  addBottle,
  addAllBottles,
  updateBottle,
};
