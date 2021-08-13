import React from "react";
import { withRouter, Link } from "react-router-dom";

import { signout, isAuthenticated } from "../../auth";
import {
  NavOpenMenu,
  NavList,
  NavLink,
  NavItem,
  NavClose,
  SignOutLinkMobile,
} from "./NavMenuMobile.styles";

const NavMenuMobile = ({ isOpen, toggle, history }) => {
  return (
    <NavOpenMenu isOpen={isOpen} onClick={toggle}>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>

        {!isAuthenticated() && (
          <>
            <NavItem>
              <NavLink to="signin">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup">Sign up</NavLink>
            </NavItem>
          </>
        )}
        {isAuthenticated() && (
          <>
            <NavItem>
              <NavLink to="/user/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <SignOutLinkMobile
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Sign out
              </SignOutLinkMobile>
            </NavItem>
          </>
        )}
      </NavList>
      <NavClose onClick={toggle} />
    </NavOpenMenu>
  );
};

export default withRouter(NavMenuMobile);
