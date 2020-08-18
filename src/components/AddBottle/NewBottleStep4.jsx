import React from "react";
import BottleHeader from "../BottleHeader.jsx";

const NewBottleStep4 = ({ bottle }) => {
  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        The bottle you want to add is:
      </div>
      <div className="card card-new-bottle">
        <BottleHeader bottle={bottle} />

        <div className="d-flex justify-content-between mt-4">
          {bottle.nb && (
            <div className="badge badge-primary">
              {bottle.nb} bottle{bottle.nb > 1 && "s"}
            </div>
          )}
          {bottle.price && (
            <div className="badge badge-tertiary">
              {bottle.price ? bottle.price : "?"} $
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewBottleStep4;
