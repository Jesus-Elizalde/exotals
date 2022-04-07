import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Modal } from "../../context/Modal";

import ImagesPreview from "./ImagesPreview";
import CarDetailBook from "./CarDetailBook";
import CommentContainer from "./CommentContainer.js";
import ReviewMainPreview from "./ReviewMainPreview";

import "./DetailContainer.css";
function DetailContainer() {
  const { pathname } = useLocation();
  const cars = useSelector((state) => state.cars.cars);
  const makes = useSelector((state) => state.makes.makes);
  const carId = pathname.split("/").at(-1);
  const singleCar = cars[carId];
  console.log("🚀 ", singleCar);

  const [showModel, setShowModal] = useState(false);

  return (
    <div className="detail_body">
      <div className="detail_container">
        <div className="detail_header">
          <h2>
            {makes[singleCar?.Model.makeId]?.name} | {singleCar?.Model.name}
          </h2>
          <div className="detail_subheader">
            <div className="detail_left_subheader">
              <p>stars and reviews</p>
              <p>
                {singleCar?.city}, {singleCar?.state}, {singleCar?.country}
              </p>
            </div>
            <div className="detail_right_subheader">
              <button
                onClick={() => {
                  setShowModal(true);
                }}
              >
                add Review
              </button>
              {showModel && (
                <Modal onClose={() => setShowModal(false)}>
                  <CommentContainer />
                </Modal>
              )}
              <p>save</p>
            </div>
          </div>
          <ImagesPreview images={singleCar?.Images} />
          <CarDetailBook singleCar={singleCar} />
          <div>
            <h3>Reviews</h3>
            <ReviewMainPreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContainer;
