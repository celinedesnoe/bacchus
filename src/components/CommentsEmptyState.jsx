import React from "react";

const CommentsEmptyState = () => {
  return (
    <div className="comment-empty-state w-100 p-2 m-2 text-center d-flex align-items-center">
      <img src="/comment-empty-state.svg" alt="comment-empty-state" />
      <div className="w-100">
        <div>No comment?</div>
        <div className="mt-2"> Add one!</div>
      </div>
    </div>
  );
};

export default CommentsEmptyState;
