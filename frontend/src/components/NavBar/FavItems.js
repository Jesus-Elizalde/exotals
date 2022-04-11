import React, { useState, useEffect } from "react";
import Favlist from "./Favlist";

const FavItems = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;

    const closeMenu = () => {
      setOpen(false);
    };

    const timer = setTimeout(
      () => document.addEventListener("click", closeMenu),
      5000
    );

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", closeMenu);
    };
  }, [open]);

  return (
    <li>
      <a onClick={() => setOpen(!open)}>Favorites</a>
      {open && <Favlist />}
    </li>
  );
};

export default FavItems;
