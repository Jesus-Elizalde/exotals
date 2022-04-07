import React from "react";
import CommentForm from "./CommentForm";

import "./Comments.css";

const CommentContainer = () => {
  return (
    <div className="comment_form_container">
      <div>
        <h1>* 4.2 # reviews</h1>
        <CommentForm />
      </div>
      <div></div>
    </div>
  );
};

export default CommentContainer;
