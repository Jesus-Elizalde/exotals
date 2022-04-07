import React, { useState } from "react";
import CommentForm from "./CommentForm";

import "./Comments.css";
import ReviewHolder from "./ReviewHolder";
import ReviewEditForm from "./ReviewEditForm";

const CommentContainer = () => {
  const [reviewMode, setReviewMode] = useState(true);
  const [reviewId, setReviewId] = useState(null);
  return (
    <div className="comment_form_container">
      <div>
        <h1>* 4.2 # reviews</h1>
        {reviewMode ? (
          <CommentForm />
        ) : (
          <ReviewEditForm reviewid={reviewId} setreviewmode={setReviewMode} />
        )}
      </div>
      <div>
        <ReviewHolder
          setreviewmode={setReviewMode}
          reviewmode={reviewMode}
          setreviewid={setReviewId}
        />
      </div>
    </div>
  );
};

export default CommentContainer;
