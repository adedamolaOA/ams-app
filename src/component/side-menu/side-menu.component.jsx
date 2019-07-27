import React from "react";
import TitleAndProfile from '../../component/side-menu/title-and-profile/title-and-profile.component';
import MenuItems from '../../component/side-menu/menu-items/menu-item.component';
import SignOutItem from '../../component/side-menu/menu-items/sign-out-item.component';

const SideMenu = () => (
  <div className="side-menu">
    <TitleAndProfile />
    <MenuItems />
    <SignOutItem />
  </div>
);

export default SideMenu;
