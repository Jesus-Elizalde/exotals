import React from "react";

function NotEditMyCarItem({ data, edit }) {
  const {
    address,
    city,
    state,
    country,
    price,
    color,
    description,
    Model,
    Transmisson,
    Seat,
    Drivetrain,
    Cylinder,
  } = data;

  console.log(data);

  return (
    <div className="mycar-item">
      <div>
        <button onClick={() => edit(true)}>edit</button>
      </div>
      <div className="mycar-item-container">
        <div>
          <img className="mcic-img" />
          <div>
            <a>left</a>
            <a>right</a>
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
              <div>
                <h2>Country</h2>
                <p>{country}</p>
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
            <p>{Cylinder ? Cylinder.name : "NA"}</p>
          </div>
          <div>
            <h2>Transmisson</h2>
            <p>{Transmisson ? Transmisson.name : "NA"}</p>
          </div>
          <div>
            <h2>Seats</h2>
            <p>{Seat ? Seat.name : "NA"}</p>
          </div>
          <div>
            <h2>Drivetrain</h2>
            <p>{Drivetrain ? Drivetrain.name : "NA"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotEditMyCarItem;
