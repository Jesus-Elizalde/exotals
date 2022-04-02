import React from "react";

import TripItem from "./TripItem";

function TripBox() {
  return (
    <div className="tripbox">
      <h2>Inspiration for your next trip</h2>
      <div className="tripboxsingle">
        <TripItem />
        <TripItem />
        <TripItem />
        <TripItem />
      </div>
    </div>
  );
}

export default TripBox;
