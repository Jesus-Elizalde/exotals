import React, { useState } from "react";

import { useSelector } from "react-redux";

function MyCarItem({ data }) {
  const user = useSelector((state) => state.session.user);

  const {
    id,
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

  const [editMode, setEditMode] = useState(false);
  const [addressField, setAddressField] = useState(address);
  const [cityField, setCityField] = useState(city);
  const [stateField, setStateField] = useState(state);
  const [countryField, setCountryField] = useState(country);
  const [priceField, setPriceField] = useState(price);
  const [colorField, setColorField] = useState(color);
  const [descriptionField, setDescriptionField] = useState(description);
  const [modelField, setModelField] = useState(Model?.name);
  const [makeField, setMakeField] = useState(Model?.Make.name);
  const [transmissonField, setTransmissonField] = useState(Transmisson?.name);
  const [seatField, setSeatField] = useState(Seat ? Seat.name : "NA");
  const [drivetrainField, setDrivetrainField] = useState(
    Drivetrain ? Drivetrain.name : "NA"
  );
  const [cylinderField, setCylinderField] = useState(
    Cylinder ? Cylinder.name : "NA"
  );

  const onSubmit = () => {
    const results = {
      id,
      address: addressField,
      city: cityField,
      state: stateField,
      country: countryField,
      price: priceField,
      color: colorField,
      description: descriptionField,
      userId: user.id,
    };
  };

  console.log(editMode);
  let content;
  if (!editMode) {
    content = (
      <>
        <div className="mycar-item">
          <div>
            <button onClick={() => setEditMode(true)}>edit</button>
          </div>
          <div className="mycar-item-container">
            <div>
              <p className="mcic-img">Img holder</p>
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
      </>
    );
  }
  if (editMode) {
    content = (
      <>
        <div className="mycar-item">
          <div>
            <button onClick={() => setEditMode(false)}>cancel</button>
            <button>delete</button>
            <button>update</button>
          </div>
          <div className="mycar-item-container">
            <div>
              <p className="mcic-img">Img holder</p>
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
                    {/* <p>{Model.Make.name}</p> */}
                    <input
                      value={makeField}
                      onChange={(e) => setMakeField(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <h2>Model</h2>
                    {/* <p>{Model.name}</p> */}
                    <input
                      value={modelField}
                      onChange={(e) => setModelField(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="mcic-inner-one">
                  <div>
                    <h2>Address</h2>
                    {/* <p>{address}</p> */}
                    <input
                      value={addressField}
                      onChange={(e) => setAddressField(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="mcic-inner-one">
                  <div>
                    <h2>City</h2>
                    {/* <p>{city}</p> */}
                    <input
                      value={cityField}
                      onChange={(e) => setCityField(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <h2>State</h2>
                    {/* <p>{state}</p> */}
                    <input
                      value={stateField}
                      onChange={(e) => setStateField(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <h2>Description</h2>
                  {/* <p className="mcic-decription-box">{description}</p> */}
                  <textarea
                    value={descriptionField}
                    onChange={(e) => setDescriptionField(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mcic-two">
              <div>
                <h2>Price</h2>
                {/* <p>${price} / day</p> */}
                <input
                  value={priceField}
                  onChange={(e) => setPriceField(e.target.value)}
                ></input>
              </div>
              <div>
                <h2>Color</h2>
                <input
                  value={colorField}
                  onChange={(e) => setColorField(e.target.value)}
                ></input>
              </div>
              <div>
                <h2>Cylinder</h2>
                {/* <p>{Cylinder ? Cylinder.name : "NA"}</p> */}
                <select></select>
              </div>
              <div>
                <h2>Transmisson</h2>
                {/* <p>{Transmisson ? Transmisson.name : "NA"}</p> */}
                <select></select>
              </div>
              <div>
                <h2>Seats</h2>
                {/* <p>{Seat ? Seat.name : "NA"}</p> */}
                <select></select>
              </div>
              <div>
                <h2>Drivetrain</h2>
                {/* <p>{Seat ? Seat.name : "NA"}</p> */}
                <select></select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return content;
}

export default MyCarItem;
