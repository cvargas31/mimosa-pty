import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  Header,
  Nav,
  NavLogo,
  NavMenu,
  NavList,
  NavItem,
  NavLink,
  NavClose,
  NavToggle,
  NavWishlist,
  IconContainer,
  NavMenuCart
} from "./Navbar.styles";


const Navbar = ({toggle}) => {


  return (
      <Header>
        <Nav>
          <NavLogo to="/">Mimosa</NavLogo>
          <NavMenu>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='signin'>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='signup'>Promo</NavLink>
              </NavItem>
            </NavList>
            {/* <NavClose/> */}
          </NavMenu>
          <IconContainer>
            <NavWishlist />
            <NavMenuCart/>
            <NavToggle onClick={toggle}/>
          </IconContainer>
        </Nav>
      </Header>
  );
};

export default withRouter(Navbar);
