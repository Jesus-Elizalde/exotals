import React, { useState } from "react";

const RatingStar = ({ rating, setrating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star_rating">
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <button
            type="button"
            key={i}
            className={i <= (hover || rating) ? "on" : "off"}
            onClick={() => setrating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default RatingStar;
