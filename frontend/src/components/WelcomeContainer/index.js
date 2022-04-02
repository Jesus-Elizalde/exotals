import React from "react";

import DreamBox from "./DreamBox";
import ImgBox from "./ImgBox";
import TripBox from "./TripBox";

import "./Welcome.css";

function WelcomeContainer() {
  return (
    <div className="welcome-container">
      <div className="welomeboxes">
        <DreamBox />
        <ImgBox />
        <TripBox />
      </div>
      <div className="welcomebackground"></div>
    </div>
  );
}

export default WelcomeContainer;
