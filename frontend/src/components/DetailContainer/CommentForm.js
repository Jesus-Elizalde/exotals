import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import RatingStar from "./RatingStar";

import { createReview } from "../../store/reviews";

const CommentForm = ({ addreview }) => {
  const { pathname } = useLocation();
  const carId = pathname.split("/").at(-1);

  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.session.user);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [errValidator, setErrValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    if (rating < 1) errors.push("Rating required");
    if (!review.length) errors.push("Review box cannot be empty");

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

    addreview(false);
    setRating(0);
    setReview("");
  };

  return (
    <div>
      <form className="comment_form">
        <label>Make a Review</label>
        <RatingStar rating={rating} setrating={setRating} />
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{
            maxHeight: "100px",
            height: "100px",
            maxWidth: "250px",
            width: "250px",
          }}
        />
        <button disabled={errValidator.length} onClick={onSubmit}>
          Post Review
        </button>
        <ul>
          {errValidator.map((ele, i) => (
            <li key={i} style={{ color: "red" }}>
              {ele}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default CommentForm;
