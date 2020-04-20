import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Textarea from "./Textarea.jsx";

const AddComment = ({ bottle }) => {
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [date, setDate] = useState(0);

  return (
    <div
      className="position-fixed bg-white bottle-details px-3 pt-1 pb-3"
      style={{ top: 0 }}
    >
      <div>Add a comment</div>
      <Textarea
        title="Comment"
        onChange={(e) => setComment(e.target.value)}
        placeholder="Love this one when paired with..."
      />
      <Input
        title="Score"
        type="number"
        onChange={(e) => setScore(e.target.value)}
        placeholder="98"
      />
      <Input
        title="Date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        placeholder="98"
      />
      <Button text="Save" onClick={() => console.log(comment)} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { bottlesReducer } = state;
  return { bottles: bottlesReducer };
};

export default connect(mapStateToProps)(AddComment);
