import React, { useRef, useState, useEffect } from "react";
import CommentCard from "./CommentCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentsEmptyState from "./CommentsEmptyState.jsx";

const BottleComments = ({ comments, openAddComment }) => {
  const [buttonClass, setButtonClass] = useState("");
  const emptyStateComments = comments.length === 0;

  const refList = useRef();
  const refAllComments = useRef();

  const addShadowButton = () => {
    const allCommentsWidth = refAllComments.current?.offsetWidth;
    const listWidth = refList.current?.offsetWidth;
    if (allCommentsWidth > listWidth) {
      setButtonClass("shadow");
    } else {
      setButtonClass("");
    }
  };

  useEffect(() => {
    addShadowButton();

    if (refList.current) {
      window.addEventListener("resize", addShadowButton);
    }

    return () => {
      window.removeEventListener("resize", addShadowButton);
    };
  }, [refAllComments]);

  return (
    <div className="mt-3 bg-white p-3">
      <div className="card-label pb-1 mr-4 mb-2">Comments</div>

      <div className="d-flex align-items-center w-100">
        {emptyStateComments ? (
          <CommentsEmptyState />
        ) : (
          <div className="list-comments d-flex" ref={refList}>
            <div className="d-flex" ref={refAllComments}>
              {comments.map((comment) => (
                <CommentCard comment={comment} key={comment._id} />
              ))}
            </div>
          </div>
        )}
        <div
          className={`${buttonClass} button-add-comment d-flex justify-content-center align-items-center position-relative ml-3 py-2`}
          onClick={openAddComment}
        >
          <FontAwesomeIcon icon={["fa", "plus"]} />
        </div>
      </div>
    </div>
  );
};

export default BottleComments;
