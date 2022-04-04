import React from "react";
import { useSelector } from "react-redux";

import MyCarItem from "./MyCarItem";

import "./MyCars.css";

function MyCarContainer() {
  const { cars } = useSelector((state) => state.cars);

  const allCarsArr = Object.values(cars);

  return (
    <div className="mycar-container">
      {allCarsArr.map(
        (ele, i) => ele.userId === 1 && <MyCarItem key={i} data={ele} />
      )}
      <div className="mycar-add">
        <p>+</p>
      </div>
    </div>
  );
}

export default MyCarContainer;
