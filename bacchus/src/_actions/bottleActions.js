import { postNewBottle } from "../_services/api";
import { store } from "../_helpers/store";

function addBottle(bottle) {
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

export const bottleActions = {
  addBottle
};
