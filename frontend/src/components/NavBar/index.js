import React from "react";

import { ReactComponent as ProflieIconYes } from "../../svg/loginedin.svg";
import { ReactComponent as ProflieIconNo } from "../../svg/loggedOff.svg";
import { ReactComponent as ProflieIcon } from "../../svg/prfile.svg";

import NavItem from "./NavItem";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{<NavItem icon={<ProflieIcon />} />}</ul>
    </nav>
  );
}
