import React from "react";

import { ReactComponent as MissingImg } from "../../svg/missingimg.svg";

function CarCard({ city, state, price }) {
  return (
    <div className="card-container">
      <img
        className="img-holder"
        src="https://images.unsplash.com/photo-1642201855395-1c8b44e6e42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
      />

      {/* <MissingImg className="img-holder" /> */}

      <div className="address-price-title">
        <p>{`${city}, ${state}`}</p>
        <p>{`$${price}/ Day`}</p>
      </div>
      {/* <div className="miles-title">
        <p>350 miles</p>
      </div> */}
    </div>
  );
}

export default CarCard;
