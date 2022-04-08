import React, { useState } from "react";

import DropdownMenu from "./DropdownMenu";

function NavItem({ icon, isLoaded }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && <DropdownMenu isLoaded={isLoaded} />}
    </li>
  );
}

export default NavItem;
