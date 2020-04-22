import React from "react";
import { connect } from "react-redux";

import Search from "./Search.jsx";
const HeaderDashboard = (props) => {
  return (
    <div className="header-dashboard px-3 py-2">
      <div className="d-flex justify-content-between mt-3">
        <div className="">
          <h5>
            <span className="text-secondary nb-bottles">
              {` ${props.bottles.length} `}
            </span>
            wines
          </h5>
        </div>
        <div
          className={`profile-image mr-3`}
          style={{
            backgroundImage: `url(https://randomuser.me/api/portraits/women/90.jpg)`,
          }}
        />
      </div>
      <Search
        placeholder="What are you looking for?"
        className=""
        onChange={(e) => props.search(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default connect(mapStateToProps)(HeaderDashboard);
