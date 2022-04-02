import React from "react";

import { useSelector } from "react-redux";

import DropdownItem from "./DropdownItem";

function DropdownMenu() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="dropdown">
      {!sessionUser ? (
        <>
          <DropdownItem text="Login" />
          <DropdownItem text="Sign Up" />
          <DropdownItem text="Demo Login" />
        </>
      ) : (
        <>
          <DropdownItem text={sessionUser?.username} />
          <DropdownItem text={sessionUser?.email} />
          <DropdownItem text="Sign Out" />
          <DropdownItem text="Rent Your Car" />
        </>
      )}
    </div>
  );
}

export default DropdownMenu;
