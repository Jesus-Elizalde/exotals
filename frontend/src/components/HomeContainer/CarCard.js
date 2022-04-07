import React from "react";

import { ReactComponent as MissingImg } from "../../svg/missingimg.svg";

function CarCard({ carid, city, state, price, image }) {
  let randomImg;

  if (image.length) randomImg = image[Math.floor(Math.random() * image.length)];

  return (
    <div className="card-container">
      <a href={`/cars/${carid}`}>
        {image.length ? (
          <img className="img-holder" src={randomImg.url} />
        ) : (
          <MissingImg className="img-holder" />
        )}

        <div className="address-price-title">
          <p>{`${city}, ${state}`}</p>
          <p>{`$${price}/ Day`}</p>
        </div>
        {/* <div className="miles-title">
        <p>350 miles</p>
      </div> */}
      </a>
    </div>
  );
}

export default CarCard;
