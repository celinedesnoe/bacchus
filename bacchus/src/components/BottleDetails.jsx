import React from "react";
import { connect } from "react-redux";

import BottleHeader from "./BottleHeader.jsx";
import BottleComments from "./BottleComments.jsx";
import BottleSelectorNumber from "./BottleSelectorNumber.jsx";
import { bottleActions } from "../_actions";

const BottleDetails = ({ bottle }) => {
  const updateNumber = nb => {
    bottle.nb = nb;
    bottleActions.updateBottle(bottle);
  };

  return (
    <div>
      <div className="position-absolute layer"></div>
      <div className="position-absolute bg-primary-light bottle-details px-3 py-1">
        <BottleHeader bottle={bottle} className={"bottle-card-details p-3"} />
        <BottleComments />
        <BottleSelectorNumber number={bottle.nb} updateNumber={updateNumber} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { bottlesReducer } = state;
  return { bottles: bottlesReducer };
};

export default connect(mapStateToProps)(BottleDetails);
