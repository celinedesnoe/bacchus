import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className={`comment-card p-2 m-2`}>
      <div className="note text-center">{comment.note}</div>
      <div className="date text-center">{comment.date}</div>
      <div className="comment mt-2">{comment.comment}</div>
    </div>
  );
};

export default CommentCard;
