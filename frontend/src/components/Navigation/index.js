import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupModal from "../SignupFormModal";

import "./Navigation.css";

// import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupModal />
      </>
    );
  }

  return (
    <div className="nav_container">
      <NavLink exact to="/">
        Exotals
      </NavLink>
      <div className="profile_button">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
