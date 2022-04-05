import React, { useState } from "react";
import { useSelector } from "react-redux";

function EditMyCarItem({ data, edit }) {
  const user = useSelector((state) => state.session.user);
  const makes = useSelector((state) => state.makes.makes);
  const models = useSelector((state) => state.models.models);
  const utilsdata = useSelector((state) => state.utildata.data.data);

  const { cylinders, transmissons, seats, drivetrains } = utilsdata;

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

  const [addressField, setAddressField] = useState(address);
  const [cityField, setCityField] = useState(city);
  const [stateField, setStateField] = useState(state);
  const [countryField, setCountryField] = useState(country);
  const [priceField, setPriceField] = useState(price);
  const [colorField, setColorField] = useState(color);
  const [descriptionField, setDescriptionField] = useState(description);
  // const [modelField, setModelField] = useState(Model?.name);
  const [modelField, setModelField] = useState(+Model?.id);
  const [makeField, setMakeField] = useState(+Model?.Make.id);
  const [transmissonField, setTransmissonField] = useState(
    Transmisson ? +Transmisson.id : "Na"
  );
  const [seatField, setSeatField] = useState(Seat ? +Seat.id : "NA");
  const [drivetrainField, setDrivetrainField] = useState(
    Drivetrain ? +Drivetrain.id : "NA"
  );
  const [cylinderField, setCylinderField] = useState(
    Cylinder ? +Cylinder.id : "NA"
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
      modelId: modelField,
      transmissonId: transmissonField,
      cylinderId: cylinderField,
      seatId: seatField,
      drivetrainId: drivetrainField,
    };
    console.log(results);
  };

  return (
    <div className="mycar-item">
      <div>
        <button onClick={() => edit(false)}>cancel</button>
        <button>delete</button>
        <button onClick={() => onSubmit()}>update</button>
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
                <select
                  value={makeField}
                  onChange={(e) => setMakeField(+e.target.value)}
                >
                  {Object.values(makes).map((ele, i) => (
                    <option key={i} value={ele.id}>
                      {ele.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h2>Model</h2>
                <select
                  value={modelField}
                  onChange={(e) => setModelField(+e.target.value)}
                >
                  {Object.values(models)
                    .filter((ele) => makeField === ele.makeId)
                    .map((ele, i) => (
                      <option key={i} value={ele.id}>
                        {ele.name}
                      </option>
                    ))}
                </select>
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
            <div className="mcic-inner-one">
              <div>
                <h2>Country</h2>
                <input
                  value={countryField}
                  onChange={(e) => setCountryField(e.target.value)}
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
              onChange={(e) => setPriceField(+e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Color</h2>
            <input
              value={colorField}
              onChange={(e) => setColorField(+e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Cylinder</h2>
            {/* <p>{Cylinder ? Cylinder.name : "NA"}</p> */}
            <select
              value={cylinderField}
              onChange={(e) => setCylinderField(+e.target.value)}
            >
              {cylinders.map((ele, i) => (
                <option key={i} value={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>Transmisson</h2>
            {/* <p>{Transmisson ? Transmisson.name : "NA"}</p> */}
            <select
              value={transmissonField}
              onChange={(e) => setTransmissonField(+e.target.value)}
            >
              {transmissons.map((ele, i) => (
                <option key={i} value={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>Seats</h2>
            {/* <p>{Seat ? Seat.name : "NA"}</p> */}
            <select
              value={seatField}
              onChange={(e) => setSeatField(+e.target.value)}
            >
              {seats.map((ele, i) => (
                <option key={i} value={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>Drivetrain</h2>
            {/* <p>{Seat ? Seat.name : "NA"}</p> */}
            <select
              value={drivetrainField}
              onChange={(e) => setDrivetrainField(+e.target.value)}
            >
              {drivetrains.map((ele, i) => (
                <option key={i} value={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMyCarItem;
