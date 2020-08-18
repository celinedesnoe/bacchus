import React, { useState } from "react";
import { connect } from "react-redux";

const SideViewLeft = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideView = () => {
    setIsOpen(true);
  };
  return (
    <div className={`sideview ${isOpen && "open"}`}>
      <div
        className={`btn-sideview btn-sideview-right `}
        onClick={() => openSideView()}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default connect(mapStateToProps)(SideViewLeft);
