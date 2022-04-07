import React from "react";

import CarDetailSpec from "./CarDetailSpec";

const CarDetailBook = ({ singleCar }) => {
  return (
    <div className="detail_box">
      <div className="detail_description_box">
        <h3>Hosted by {singleCar?.User.username}</h3>
        <p>{singleCar?.description}</p>
        <CarDetailSpec singleCar={singleCar} />
      </div>
      <div className="booking_box"></div>
    </div>
  );
};

export default CarDetailBook;
