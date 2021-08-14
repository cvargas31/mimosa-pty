import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
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
  NavMenuCart,
  SignOutLink,
} from "./Navbar.styles";
import { signout, isAuthenticated } from "../../auth";

const Navbar = ({ toggle, history }) => {
  return (
    <Header>
      <Nav>
        <NavLogo to="/">Mimosa</NavLogo>
        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            {!isAuthenticated() && (
              <>
                <NavItem>
                  <NavLink to="signin">Sign in</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="signup">Sign up</NavLink>
                </NavItem>
              </>
            )}
            {isAuthenticated() && (
              <>
                <NavItem>
                  <SignOutLink
                    onClick={() =>
                      signout(() => {
                        history.push("/");
                      })
                    }
                  >
                    Sign out
                  </SignOutLink>
                </NavItem>
              </>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <NavItem>
                <NavLink to="/user/dashboard">Dashboard</NavLink>
              </NavItem>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <NavItem>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
              </NavItem>
            )}
          </NavList>
          {/* <NavClose/> */}
        </NavMenu>
        <IconContainer>
          <NavWishlist />
          <NavMenuCart />
          <NavToggle onClick={toggle} />
        </IconContainer>
      </Nav>
    </Header>
  );
};

export default withRouter(Navbar);
