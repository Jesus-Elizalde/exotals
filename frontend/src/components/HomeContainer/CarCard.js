import React from "react";

function CarCard({ city, state, price }) {
  return (
    <div className="card-container">
      <img className="img-holder" />
      <div className="address-price-title">
        <p>{`${city}, ${state}`}</p>
        <p>{`$${price}/ Day`}</p>
      </div>
      <div className="miles-title">
        <p>350 miles</p>
      </div>
    </div>
  );
}

export default CarCard;
