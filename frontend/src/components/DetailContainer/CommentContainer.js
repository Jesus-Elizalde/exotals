import React from "react";
import CommentForm from "./CommentForm";

import "./Comments.css";
import ReviewHolder from "./ReviewHolder";

const CommentContainer = () => {
  return (
    <div className="comment_form_container">
      <div>
        <h1>* 4.2 # reviews</h1>
        <CommentForm />
      </div>
      <div>
        <ReviewHolder />
      </div>
    </div>
  );
};

export default CommentContainer;
