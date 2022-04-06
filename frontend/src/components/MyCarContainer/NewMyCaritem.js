import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";

import { AddOneCar } from "../../store/cars";

function NewMyCarItem({ add }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const makes = useSelector((state) => state.makes.makes);
  const models = useSelector((state) => state.models.models);
  const utilsdata = useSelector((state) => state.utildata.data.data);

  const [imgInputList, setImgInputList] = useState([{ url: "" }]);
  const [currentImg, setCurrentImg] = useState(0);

  const collectionSize = imgInputList.length;

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
  const [makeField, setMakeField] = useState(1);
  const [modelField, setModelField] = useState(
    Object.values(models).filter((e) => e.makeId === makeField)[0].id
  );

  useEffect(() => {
    setModelField(
      Object.values(models).filter((e) => e.makeId === makeField)[0].id
    );
  }, [makeField]);
  const [transmissonField, setTransmissonField] = useState(1);
  const [seatField, setSeatField] = useState(1);
  const [drivetrainField, setDrivetrainField] = useState(1);
  const [cylinderField, setCylinderField] = useState(1);

  const [addressValidator, setAddressValidator] = useState(true);
  const [cityValidator, setCityValidator] = useState(true);
  const [stateValidator, setStateValidator] = useState(true);
  const [countryValidator, setCountryValidator] = useState(true);
  const [priceValidator, setPriceValidator] = useState(true);

  const [colorValidator, setColorValidator] = useState(true);
  const [descriptionValidator, setDescriptionValidator] = useState(true);

  useEffect(() => {
    setAddressValidator(true);
    setCityValidator(true);
    setStateValidator(true);
    setCountryValidator(true);
    setPriceValidator(true);
    setColorValidator(true);
    setDescriptionValidator(true);
    if (!addressField.length) setAddressValidator(false);
    if (!cityField.length) setCityValidator(false);
    if (!stateField.length) setStateValidator(false);
    if (!countryField.length) setCountryValidator(false);
    if (priceField < 250) setPriceValidator(false);
    if (!colorField.length) setColorValidator(false);
    if (!descriptionField.length) setDescriptionValidator(false);
  }, [
    addressField,
    cityField,
    stateField,
    countryField,
    priceField,
    colorField,
    descriptionField,
  ]);

  const onSubmit = async () => {
    if (
      !addressValidator ||
      !cityValidator ||
      !stateValidator ||
      !countryValidator ||
      !priceValidator ||
      !colorValidator ||
      !descriptionValidator
    ) {
      console.log("validator false");
      return;
    }
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
                <h2 className="make-h2">Make</h2>
                <select
                  value={makeField}
                  onChange={(e) => setMakeField(+e.target.value)}
                >
                  {Object.values(makes).map(
                    (ele, i) =>
                      ele.id !== undefined && (
                        <option key={i} value={ele.id}>
                          {ele.name}
                        </option>
                      )
                  )}
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
                <h2>
                  Address{" "}
                  {!addressValidator && (
                    <span className="validator-star">*</span>
                  )}
                </h2>
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
                <h2>
                  City{" "}
                  {!cityValidator && <span className="validator-star">*</span>}
                </h2>

                {/* <p>{city}</p> */}
                <input
                  placeholder="add city"
                  value={cityField}
                  onChange={(e) => setCityField(e.target.value)}
                ></input>
              </div>
              <div>
                <h2>
                  State{" "}
                  {!stateValidator && <span className="validator-star">*</span>}
                </h2>
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
                <h2>
                  Country{" "}
                  {!countryValidator && (
                    <span className="validator-star">*</span>
                  )}
                </h2>
                <input
                  placeholder="add country"
                  value={countryField}
                  onChange={(e) => setCountryField(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <h2>
                Description{" "}
                {!descriptionValidator && (
                  <span className="validator-star">*</span>
                )}
              </h2>
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
            <h2>
              Price{" "}
              {!priceValidator && <span className="validator-star">*</span>}
            </h2>
            {/* <p>${price} / day</p> */}
            <input
              placeholder="add price"
              type={"number"}
              value={priceField}
              onChange={(e) => setPriceField(+e.target.value)}
            ></input>
          </div>
          <div>
            <h2>
              Color{" "}
              {!colorValidator && <span className="validator-star">*</span>}
            </h2>
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
