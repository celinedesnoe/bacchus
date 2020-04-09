import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const comments = [
  { comment: "Great wine", date: "23/04/2020", note: "90/100" },
  {
    comment: "Need to open it 2 hours before",
    date: "02/02/2020",
    note: "65/100"
  },
  { comment: "Great wine", date: "23/04/2020", note: "90/100" },
  {
    comment: "Need to open it 2 hours before",
    date: "02/02/2020",
    note: "65/100"
  }
];

const BottleComments = () => {
  return (
    <div>
      <div class="label-input pb-1 mr-4 mb-2">Comments</div>

      <div className="d-flex">
        <div className="list-comments d-flex">
          {comments.map(comment => (
            <CommentCard comment={comment} key={comment.comment} />
          ))}
        </div>
        <div className="button-add-comment d-flex justify-content-center align-items-center position-relative ml-3 mb-3">
          <FontAwesomeIcon icon={["fa", "plus"]} />
        </div>
      </div>
    </div>
  );
};

export default BottleComments;
