import React from "react";
import { connect } from "react-redux";

import Search from "./Search.jsx";
import Button from "./Button.jsx";
const HeaderDashboard = props => {
  return (
    <div className="header-dashboard px-3 py-2">
      <div className="d-flex justify-content-between mt-3">
        <div className="">
          <h3 className="">Welcome {props.user.firstName},</h3>
          <h5>
            You have
            <span className="text-secondary nb-bottles">
              {` ${props.bottles.length} `}
            </span>
            bottles in stock
          </h5>
        </div>
        <div
          className={`profile-image mr-3`}
          style={{
            backgroundImage: `url(https://randomuser.me/api/portraits/women/90.jpg)`
          }}
        />
      </div>
      <Search
        placeholder="Name, Region, Appellation..."
        className=""
        onChange={e => props.search(e.target.value)}
      />
      <div className="d-flex my-3">
        <Button
          text="All"
          className="mr-2"
          selected={props.filterSelected === "all"}
          filter={true}
        />
        <Button
          text="In stock"
          className=""
          selected={props.filterSelected === "instock"}
          filter={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { authReducer, bottlesReducer } = state;
  return { user: authReducer, bottles: bottlesReducer };
};

export default connect(mapStateToProps)(HeaderDashboard);
