import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Textarea from "./Textarea.jsx";

const AddComment = ({ bottle, addComment }) => {
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [date, setDate] = useState(moment().format("L"));

  const save = () => {
    let id = Math.random()
      .toString(36)
      .substr(2, 9);
    let newComment = { comment: comment, score: score, date: date, _id: id };
    addComment(newComment);
  };

  return (
    <div className="position-fixed bg-white bottle-details add-comment px-3 pt-1 pb-3">
      <h4 className="text-center my-3">Add a comment</h4>
      <Textarea
        title="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Love this one when paired with..."
        className="mb-3"
      />
      <Input
        title="Score"
        value={score}
        type="number"
        onChange={(e) => setScore(e.target.value)}
        placeholder="98"
        className="mb-3"
      />
      <Input
        title="Date"
        value={date}
        type="date"
        onChange={(e) => setDate(e.target.value)}
        placeholder={date}
        className="mb-3"
      />
      <Button text="Save" onClick={save} className="my-4" />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { bottlesReducer } = state;
  return { bottles: bottlesReducer };
};

export default connect(mapStateToProps)(AddComment);
