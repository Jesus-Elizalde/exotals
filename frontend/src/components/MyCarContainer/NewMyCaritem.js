import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddOneCar } from "../../store/cars";

function NewMyCarItem({ add }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const makes = useSelector((state) => state.makes.makes);
  const models = useSelector((state) => state.models.models);
  const utilsdata = useSelector((state) => state.utildata.data.data);

  const [imgInputList, setImgInputList] = useState([{ url: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...imgInputList];
    list[index][name] = value;
    setImgInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...imgInputList];
    list.splice(index, 1);
    setImgInputList(list);
  };

  const handleAddClick = () => {
    setImgInputList([...imgInputList, { url: "" }]);
  };

  const { cylinders, transmissons, seats, drivetrains } = utilsdata;

  const [addressField, setAddressField] = useState("");
  const [cityField, setCityField] = useState("");
  const [stateField, setStateField] = useState("");
  const [countryField, setCountryField] = useState("");
  const [priceField, setPriceField] = useState("");
  const [colorField, setColorField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  // const [modelField, setModelField] = useState(Model?.name);
  const [modelField, setModelField] = useState(models[1]);
  const [makeField, setMakeField] = useState("Na");
  const [transmissonField, setTransmissonField] = useState(1);
  const [seatField, setSeatField] = useState(1);
  const [drivetrainField, setDrivetrainField] = useState(1);
  const [cylinderField, setCylinderField] = useState(1);

  const onSubmit = async () => {
    const results = {
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
      imageArr: imgInputList,
    };

    const data123 = await dispatch(AddOneCar(results));

    if (data123) {
      add(false);
    }
  };

  return (
    <div className="mycar-item">
      <div>
        <button onClick={() => add(false)}>Cancel</button>
        <button onClick={() => onSubmit()}>Add</button>
      </div>
      <div className="mycar-item-container">
        <div>
          {imgInputList.map((x, i) => {
            return (
              <div className="box" key={i}>
                <input
                  name="url"
                  placeholder="Enter Img Url"
                  value={x.url}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="btn-box">
                  {imgInputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {imgInputList.length - 1 === i && (
                    <button onClick={handleAddClick}>Add</button>
                  )}
                </div>
              </div>
            );
          })}
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
                  placeholder="add address"
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
                  placeholder="add city"
                  value={cityField}
                  onChange={(e) => setCityField(e.target.value)}
                ></input>
              </div>
              <div>
                <h2>State</h2>
                {/* <p>{state}</p> */}
                <input
                  placeholder="add state"
                  value={stateField}
                  onChange={(e) => setStateField(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div>
                <h2>Country</h2>
                <input
                  placeholder="add country"
                  value={countryField}
                  onChange={(e) => setCountryField(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <h2>Description</h2>
              {/* <p className="mcic-decription-box">{description}</p> */}
              <textarea
                placeholder="add description"
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
              placeholder="add price"
              type={"number"}
              value={priceField}
              onChange={(e) => setPriceField(+e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Color</h2>
            <input
              placeholder="add Color"
              type="text"
              value={colorField}
              onChange={(e) => setColorField(e.target.value)}
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

export default NewMyCarItem;
