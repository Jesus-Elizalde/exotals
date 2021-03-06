import React, { useState } from "react";
import GoogleMaps from "../GoogleMaps";

function NotEditMyCarItem({ data, edit }) {
  const [currentImg, setCurrentImg] = useState(0);

  const {
    address,
    city,
    state,
    country,
    price,
    color,
    lat,
    lng,
    description,
    Model,
    Transmisson,
    Seat,
    Drivetrain,
    Cylinder,
    Images,
  } = data;

  const collectionSize = Images.length;

  return (
    <div className="mycar-item">
      <div className="editbuttonmycar">
        <button onClick={() => edit(true)}>edit</button>
      </div>
      <div className="mycar-item-container">
        <div>
          <h2>Images</h2>
          <img src={Images[currentImg]?.url} className="mcic-img" />
          <div className="imgButtons">
            <button
              className="imgleft"
              disabled={currentImg === 0}
              onClick={() =>
                setCurrentImg((prevActiveStep) => prevActiveStep - 1)
              }
            >
              left
            </button>
            <p>
              {currentImg + 1}/{collectionSize}
            </p>
            <button
              className="imgright"
              disabled={currentImg === collectionSize - 1}
              onClick={() =>
                setCurrentImg((prevActiveStep) => prevActiveStep + 1)
              }
            >
              right
            </button>
          </div>
        </div>
        <div className="mcic-one">
          <div>
            <div className="mcic-inner-one">
              <div>
                <h2>Make</h2>
                <p>{Model.Make.name}</p>
              </div>
              <div>
                <h2>Model</h2>
                <p>{Model.name}</p>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div>
                <h2>Address</h2>
                <p>{address}</p>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div>
                <h2>City</h2>
                <p>{city}</p>
              </div>
              <div>
                <h2>State</h2>
                <p>{state}</p>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div className="countryinfo">
                <h2>Country</h2>
                <p>{country}</p>
              </div>
              <div className="mapbordercontainer">
                <GoogleMaps
                  coords={{ lat: +lat, lng: +lng }}
                  size={{ width: "250px", height: "170px" }}
                  zoom={false}
                />
              </div>
            </div>
            <div>
              <h2>Description</h2>
              <p className="mcic-decription-box">{description}</p>
            </div>
          </div>
        </div>
        <div className="mcic-two">
          <div>
            <h2>Price</h2>
            <p>${price} / day</p>
          </div>
          <div>
            <h2>Color</h2>
            <p>{color}</p>
          </div>
          <div>
            <h2>Cylinder</h2>
            <p>{Cylinder?.name}</p>
          </div>
          <div>
            <h2>Transmisson</h2>
            <p>{Transmisson?.name}</p>
          </div>
          <div>
            <h2>Seats</h2>
            <p>{Seat?.name}</p>
          </div>
          <div>
            <h2>Drivetrain</h2>
            <p>{Drivetrain?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotEditMyCarItem;
