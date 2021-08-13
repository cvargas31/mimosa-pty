import React from "react";
import { NavOpenMenu, NavList, NavLink, NavItem,NavClose } from "./NavMenuMobile.styles";

const NavMenuMobile = ({isOpen, toggle}) => {
  return (
      <NavOpenMenu isOpen={isOpen} onClick={toggle}>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signin">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup">Promo</NavLink>
          </NavItem>
        </NavList>
        <NavClose onClick={toggle}/>
      </NavOpenMenu>
  );
};

export default NavMenuMobile;
