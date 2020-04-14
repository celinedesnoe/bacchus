import React, { useRef, useState, useEffect } from "react";
import CommentCard from "./CommentCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentsEmptyState from "./CommentsEmptyState.jsx";

// const comments = [
//   { comment: "Great wine", date: "23/04/2020", note: "90/100", id: 23 },
//   {
//     comment: "Need to open it 2 hours before",
//     date: "02/02/2020",
//     note: "65/100",
//     id: 24
//   },
//   { comment: "Great wine", date: "23/04/2020", note: "90/100", id: 25 },
//   {
//     comment: "Need to open it 2 hours before",
//     date: "02/02/2020",
//     note: "65/100",
//     id: 36
//   }
// ];

const comments = [];

const emptyStateComments = comments.length === 0;

const BottleComments = () => {
  const [buttonClass, setButtonClass] = useState("");
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
    <div className="mt-4">
      <div class="label-input pb-1 mr-4 mb-2">Comments</div>

      <div className="d-flex align-items-center w-100">
        {emptyStateComments ? (
          <CommentsEmptyState />
        ) : (
          <div className="list-comments d-flex" ref={refList}>
            <div className="d-flex" ref={refAllComments}>
              {comments.map(comment => (
                <CommentCard comment={comment} key={comment.id} />
              ))}
            </div>
          </div>
        )}
        <div
          className={`${buttonClass} button-add-comment d-flex justify-content-center align-items-center position-relative ml-3 py-2`}
        >
          <FontAwesomeIcon icon={["fa", "plus"]} />
        </div>
      </div>
    </div>
  );
};

export default BottleComments;
