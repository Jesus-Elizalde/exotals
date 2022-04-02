import React from "react";

import { useSelector } from "react-redux";

import DropdownItem from "./DropdownItem";

function DropdownMenu({ isloaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="dropdown">
      {!sessionUser ? (
        <>
          <DropdownItem text="Login" />
          <DropdownItem text="Sign Up" />
          <DropdownItem text="Demo User" />
        </>
      ) : (
        <>
          <DropdownItem text={sessionUser?.username} />
          <DropdownItem text={sessionUser?.email} />
          <DropdownItem text="Sign Out" />
        </>
      )}
    </div>
  );
}

export default DropdownMenu;
