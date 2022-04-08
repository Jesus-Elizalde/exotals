import React from "react";

import { ReactComponent as SeatIcon } from "../../svg/seatsicon.svg";
import { ReactComponent as TransmissonIcon } from "../../svg/transmissonicon.svg";
import { ReactComponent as CylinderIcon } from "../../svg/cylindericon.svg";
import { ReactComponent as AllWheelIcon } from "../../svg/allwheelicon.svg";
import { ReactComponent as ColorIcon } from "../../svg/paintcolor.svg";
import { ReactComponent as RearWheelIcon } from "../../svg/rearwheelicon.svg";
import { ReactComponent as FrontWheelIcon } from "../../svg/frontwheelicon.svg";

const CarDetailSpec = ({ singleCar }) => {
  return (
    <div className="detail_spec_box">
      <h3>Car Spec</h3>
      <div className="inner_detail_spec_box">
        <div className="left_detail_spec">
          <div>
            <CylinderIcon />
            <p>{singleCar?.Cylinder.name}</p>
          </div>
          <div>
            <TransmissonIcon />
            <p>{singleCar?.Transmisson.name}</p>
          </div>
          <div>
            <SeatIcon />
            <p>{singleCar?.Seat.name}</p>
          </div>
        </div>
        <div className="right_detail_spec">
          <div>
            <AllWheelIcon />
            <p>{singleCar?.Drivetrain.name}</p>
          </div>
          <div>
            <ColorIcon />
            <p>{singleCar?.color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailSpec;
