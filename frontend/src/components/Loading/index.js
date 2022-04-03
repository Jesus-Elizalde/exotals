import React from "react";

import BarLoader from "react-spinners/BarLoader";
import { ReactComponent as Logo } from "../../svg/logo.svg";

function Loading() {
  return (
    <div className="loading-screen">
      <Logo />
      <BarLoader height={4} width={100} color={"#4480A6"} />
    </div>
  );
}

export default Loading;
