import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import RatingStar from "./RatingStar";

import { createReview } from "../../store/reviews";

const CommentForm = () => {
  const { pathname } = useLocation();
  const carId = pathname.split("/").at(-1);

  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.session.user);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [errValidator, setErrValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    if (rating < 1) errors.push("Rating from 1 to 5");
    if (!review.length) errors.push("Review textbox cannot be empty");

    setErrValidator(errors);
  }, [rating, review]);

  const onSubmit = (e) => {
    e.preventDefault();

    const results = {
      review,
      rating,
      userId: id,
      carId,
    };

    dispatch(createReview(results));

    setRating(0);
    setReview("");
  };
  return (
    <div>
      <form className="comment_form">
        <label>Review</label>
        <RatingStar rating={rating} setrating={setRating} />
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        <button disabled={errValidator.length} onClick={onSubmit}>
          Post Review
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
