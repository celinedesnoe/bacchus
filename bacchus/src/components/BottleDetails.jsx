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
      <div className="position-absolute bg-white bottle-details px-4">
        <BottleHeader bottle={bottle} />
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
