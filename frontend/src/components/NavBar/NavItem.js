import React, { useState } from "react";

import DropdownMenu from "./DropdownMenu";

function NavItem({ icon }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && <DropdownMenu />}
    </li>
  );
}

export default NavItem;
