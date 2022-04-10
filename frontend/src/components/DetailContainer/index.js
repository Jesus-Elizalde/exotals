import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Modal } from "../../context/Modal";

import ImagesPreview from "./ImagesPreview";
import CarDetailBook from "./CarDetailBook";
import CommentContainer from "./CommentContainer.js";
import ReviewMainPreview from "./ReviewMainPreview";
import FavoriteHeart from "../FavoriteHeart";
import GoogleMaps from "../GoogleMaps";

import { addOneFav } from "../../store/favorites";

import "./DetailContainer.css";
function DetailContainer() {
  const { pathname } = useLocation();
  const cars = useSelector((state) => state.cars.cars);
  const makes = useSelector((state) => state.makes.makes);
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews);
  const carId = pathname.split("/").at(-1);
  const singleCar = cars[carId];

  const currreviews = Object.values(reviews)?.filter(
    (ele) => ele?.carId === +carId
  );

  let avgRating = 0;

  currreviews.forEach((ele) => (avgRating += ele.rating));
  avgRating = parseFloat(avgRating / currreviews.length).toFixed(2);

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
              <p>
                {avgRating === "NaN" ? 0 : avgRating} Stars Average |{" "}
                {currreviews.length} Reviews
              </p>
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
                  <CommentContainer
                    avgrating={avgRating}
                    currreview={currreviews.length}
                  />
                </Modal>
              )}
              {user?.id && <FavoriteHeart />}
            </div>
          </div>
          <ImagesPreview images={singleCar?.Images} />
          <CarDetailBook singleCar={singleCar} />
          <div>
            <h3>Reviews</h3>
            <ReviewMainPreview />
            <GoogleMaps
              coords={{ lat: +singleCar?.lat, lng: +singleCar?.lng }}
              size={{ width: "1100px", height: "400px" }}
              zoom={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContainer;
