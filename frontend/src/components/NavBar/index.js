import React from "react";

import { ReactComponent as ProflieIcon } from "../../svg/prfile.svg";
import { ReactComponent as Logo } from "../../svg/logo.svg";

import NavItem from "./NavItem";
import SearchBar from "../SearchBar.js";

import "./NavBar.css";
import { useSelector } from "react-redux";
import FavItems from "./FavItems";

export default function NavBar({ isLoaded }) {
  const data = useSelector((state) => state.cars.cars);
  const dataArr = Object.values(data);
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

            <div className="rightnavbartext">
              <SearchBar placeholder="Enter a Car...." data={dataArr} />
              <a href="/home">Home</a>
              <FavItems />
              <NavItem icon={<ProflieIcon />} isLoaded={isLoaded} />
            </div>
          </>
        }
      </ul>
    </nav>
  );
}
