import React from "react";
import { connect } from "react-redux";

import Search from "./Search.jsx";
// import SideviewLeft from "./SideviewLeft.jsx";
const HeaderDashboard = (props) => {
  const wording = props.bottles.length > 1 ? "wines" : "wine";

  return (
    <div className="header-dashboard d-flex align-items-center flex-column px-3 py-4">
      {/* <SideviewLeft /> */}
      <div>
        <div className="text-center mb-3">
          <div>
            <span className="text-secondary nb-bottles">
              {` ${props.bottles.length} `}
            </span>
            {wording}
          </div>
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
