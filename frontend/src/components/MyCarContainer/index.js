import React, { useState } from "react";
import { useSelector } from "react-redux";

import MyCarItem from "./MyCarItem";
import NewMyCarItem from "./NewMyCaritem";

import "./MyCars.css";

function MyCarContainer() {
  const { cars } = useSelector((state) => state.cars);

  const [addNewCar, setAddNewCar] = useState(false);

  const allCarsArr = Object.values(cars);

  let addBoxContent;
  if (addNewCar) {
    addBoxContent = <NewMyCarItem add={setAddNewCar} />;
  } else {
    addBoxContent = <></>;
  }

  return (
    <div className="mycar-container">
      {addBoxContent}
      {allCarsArr
        .reverse()
        .map((ele, i) => ele.userId === 1 && <MyCarItem key={i} data={ele} />)}
      <div className="mycar-add">
        <p onClick={() => setAddNewCar(!addNewCar)}>+</p>
      </div>
    </div>
  );
}

export default MyCarContainer;
