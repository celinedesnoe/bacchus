import React from "react";
import { connect } from "react-redux";

import Search from "./Search.jsx";
import SideviewLeft from "./SideviewLeft.jsx";
const HeaderDashboard = (props) => {
  return (
    <div className="header-dashboard px-3 py-2">
      <SideviewLeft />
      <div>
        <div className="text-center mt-3">
          <h5>
            <span className="text-secondary nb-bottles">
              {` ${props.bottles.length} `}
            </span>
            wines
          </h5>
        </div>
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
