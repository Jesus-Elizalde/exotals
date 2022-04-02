import React from "react";

import { ReactComponent as ProflieIconYes } from "../../svg/loginedin.svg";
import { ReactComponent as ProflieIconNo } from "../../svg/loggedOff.svg";
import { ReactComponent as ProflieIcon } from "../../svg/prfile.svg";
import { ReactComponent as Logo } from "../../svg/logo.svg";

import NavItem from "./NavItem";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {
          <>
            <li className="nav-item">
              <a href="#" className="icon-button">
                {<Logo />}
              </a>
            </li>
            <NavItem icon={<ProflieIcon />} />
          </>
        }
      </ul>
    </nav>
  );
}
