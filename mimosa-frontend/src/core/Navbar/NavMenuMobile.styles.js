import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const NavOpenMenu = styled.div`
  position: fixed;
  background-color: white;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  padding: 4rem 0 3rem;
  transition: all.4s;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: black;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: #e7c8b2;
  }
`;

export const NavClose = styled(AiOutlineClose)`
  position: absolute;
  font-size: 1.5rem;
  top: 1rem;
  right: 1rem;
  color: black;
  color: pointer;

  &:hover {
    color: #e7c8b2;
  }
`;
