import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCar, deleteOneCar } from "../../store/cars";

function EditMyCarItem({ data, edit }) {
  const dispatch = useDispatch();
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
    Images,
  } = data;

  const [imgInputList, setImgInputList] = useState([...Images, { url: "" }]);
  const [deletedImgList, setDeletedImgList] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...imgInputList];
    list[index][name] = value;
    setImgInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...imgInputList];
    const delList = [...deletedImgList];

    delList.push(list[index]);
    setDeletedImgList(delList);
    list.splice(index, 1);
    setImgInputList(list);
  };

  const handleAddClick = () => {
    setImgInputList([...imgInputList, { url: "" }]);
  };

  const collectionSize = imgInputList.length;

  const [deleteButton, setDeleteButton] = useState(false);

  const [addressField, setAddressField] = useState(address);
  const [cityField, setCityField] = useState(city);
  const [stateField, setStateField] = useState(state);
  const [countryField, setCountryField] = useState(country);
  const [priceField, setPriceField] = useState(price);
  const [colorField, setColorField] = useState(color);
  const [descriptionField, setDescriptionField] = useState(description);
  const [modelField, setModelField] = useState(+Model.id);
  const [makeField, setMakeField] = useState(+Model.Make.id);
  const [transmissonField, setTransmissonField] = useState(+Transmisson?.id);
  const [seatField, setSeatField] = useState(+Seat?.id || "Na");
  const [drivetrainField, setDrivetrainField] = useState(+Drivetrain?.id);
  const [cylinderField, setCylinderField] = useState(+Cylinder?.id || "Na");

  const onSubmit = async () => {
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
      imageArr: imgInputList,
      deletedImageArr: deletedImgList,
    };

    const data123 = await dispatch(updateCar(results));
    if (data123) {
      edit(false);
    }
  };

  let delConfirm;

  if (deleteButton) {
    delConfirm = (
      <>
        <p>Are you sure you want to delete?</p>
        <button onClick={() => setDeleteButton(false)}>Cancel</button>
        <button onClick={() => dispatch(deleteOneCar(data))}>DELETE</button>
      </>
    );
  } else {
    delConfirm = (
      <>
        <button onClick={() => edit(false)}>cancel</button>
        <button onClick={() => setDeleteButton(true)}>delete</button>
        <button onClick={() => onSubmit()}>update</button>
      </>
    );
  }

  return (
    <div className="mycar-item">
      <div>{delConfirm}</div>
      <div className="mycar-item-container">
        <div>
          <div>
            <img src={imgInputList[currentImg]?.url} className="mcic-img" />
            <div>
              <button
                disabled={currentImg === 0}
                onClick={() =>
                  setCurrentImg((prevActiveStep) => prevActiveStep - 1)
                }
              >
                left
              </button>
              <button
                disabled={currentImg === collectionSize - 1}
                onClick={() =>
                  setCurrentImg((prevActiveStep) => prevActiveStep + 1)
                }
              >
                right
              </button>
            </div>
          </div>
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
                <input
                  value={addressField}
                  onChange={(e) => setAddressField(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="mcic-inner-one">
              <div>
                <h2>City</h2>
                <input
                  value={cityField}
                  onChange={(e) => setCityField(e.target.value)}
                ></input>
              </div>
              <div>
                <h2>State</h2>
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
            <input
              value={priceField}
              onChange={(e) => setPriceField(+e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Color</h2>
            <input
              type={"text"}
              value={colorField}
              onChange={(e) => setColorField(e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Cylinder</h2>
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
