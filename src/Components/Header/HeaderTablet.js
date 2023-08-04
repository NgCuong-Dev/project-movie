import React, { useState } from "react";
import cgv_nes from "../../Assets/CGV-Cinemas.png";
import UserMenu from "./UserMenu";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";

export default function HeaderDesktop() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="p-3 w-30 h-30">
        <Button
          className="text-black bg-gray-200 h-20 p-3 w-15 text-2xl "
          onClick={showDrawer}
        >
          <i class="fa-solid fa-bars"></i>
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
          <Menu />
          <UserMenu />
        </Drawer>
      </div>
    </>
  );
}
