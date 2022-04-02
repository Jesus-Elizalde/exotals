import React from "react";

import DreamBox from "./DreamBox";
import ImgBox from "./ImgBox";
import TripBox from "./TripBox";

import "./Welcome.css";

function WelcomeContainer() {
  return (
    <div className="welcome-container">
      <DreamBox />
      <ImgBox />
      <TripBox />
    </div>
  );
}

export default WelcomeContainer;
