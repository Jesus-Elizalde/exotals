import React, { useState } from "react";
import CommentForm from "./CommentForm";

import "./Comments.css";
import ReviewHolder from "./ReviewHolder";
import ReviewEditForm from "./ReviewEditForm";

const CommentContainer = ({ avgrating, currreview, setmodal }) => {
  const [makeReview, setMakeReview] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewId, setReviewId] = useState(null);
  return (
    <div className="comment_form_container">
      <div>
        <h1>
          {avgrating === "NaN" ? 0 : avgrating} Stars Average | {currreview}{" "}
          Reviews
        </h1>
        <button
          onClick={() => {
            setMakeReview(!makeReview);
          }}
        >
          Make a Review
        </button>
        {makeReview && <CommentForm addreview={setMakeReview} />}
        {reviewMode && (
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
      <p className="xbuttonforcommentmodal" onClick={() => setmodal(false)}>
        x
      </p>
    </div>
  );
};

export default CommentContainer;
