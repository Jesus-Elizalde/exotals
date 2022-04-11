import React, { useEffect, useState } from "react";

import DropdownMenu from "./DropdownMenu";

function NavItem({ icon, isLoaded }) {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if (!open) return;

  //   const closeMenu = () => {
  //     setOpen(false);
  //   };

  //   const timer = setTimeout(
  //     () => document.addEventListener("click", closeMenu),
  //     5000
  //   );

  //   return () => {
  //     clearTimeout(timer);
  //     document.removeEventListener("click", closeMenu);
  //   };
  // }, [open]);

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
