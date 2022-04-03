import React from "react";

import { ReactComponent as ProflieIcon } from "../../svg/prfile.svg";
import { ReactComponent as Logo } from "../../svg/logo.svg";

import NavItem from "./NavItem";

import "./NavBar.css";

export default function NavBar({ isLoaded }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {
          <>
            <li className="nav-item">
              <a href="/" className="icon-button">
                {<Logo />}
              </a>
            </li>
            <NavItem icon={<ProflieIcon />} isLoaded={isLoaded} />
          </>
        }
      </ul>
    </nav>
  );
}
