import React from "react";
import { useSelector } from "react-redux";

import CarCard from "./CarCard";

import "./Home.css";

function HomeContainer() {
  const { cars } = useSelector((state) => state.cars);

  const allCarsArr = Object.values(cars);

  return (
    <div className="home-container">
      {allCarsArr.map(
        (ele, i) =>
          ele.city && (
            <CarCard
              key={i}
              carid={ele.id}
              city={ele.city}
              state={ele.state}
              price={ele.price}
              image={ele.Images}
            />
          )
      )}
    </div>
  );
}

export default HomeContainer;
