import React from "react";

import DropdownItem from "./DropdownItem";

function DropdownMenu() {
  return (
    <div className="dropdown">
      <DropdownItem text="Login" />
      <DropdownItem text="Sign Up" />
      <DropdownItem text="Demo User" />
    </div>
  );
}

export default DropdownMenu;
