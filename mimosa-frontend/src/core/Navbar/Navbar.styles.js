import styled from "styled-components";
import { Link } from "react-router-dom";
import {AiOutlineClose,AiOutlineHeart} from 'react-icons/ai'
import {BiMenuAltRight} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi'
export const Header = styled.header`

  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: transparent;
  padding: 0 10px;
`

export const Nav = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 1.6px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

  &:hover{

    color: #e7c8b2;
  }
`

export const NavMenu = styled.div`
  display: none;
  @media (min-width:767px){
    background-color: white;
    width: 350px;
    padding: 4rem 0 3rem;
    transition: all.4s;
    display: unset;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  row-gap: 2rem;
`

export const NavItem = styled.li`

`

export const NavLink = styled(Link)`
color: ${({isActive}) => (isActive ? 'e7c8b2' : '#000')};
font-size: 1.2rem;
text-transform: uppercase;
font-weight: 400;
text-decoration: none;

&:hover {
    color: #e7c8b2;
  }
`

export const NavMenuCart = styled(FiShoppingCart)`
  font-size: 1.5rem;

  &:hover{
    color: #e7c8b2;
  }
`

export const NavWishlist = styled(AiOutlineHeart)`
  font-size: 1.5rem;

  &:hover{
    color: #e7c8b2;
  }
`

export const NavClose = styled(AiOutlineClose)`
  position: absolute;
  font-size: 1.5rem;
  top: 1rem;
  right: 1rem;
  color: black;
  color: pointer;

  &:hover{
    color: #e7c8b2;
  }
`

export const NavToggle = styled(BiMenuAltRight)`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  cursor: pointer;

  &:hover{
    color: #e7c8b2;
  }

  @media (min-width:767px){
    display: none;
  }
`

export const IconContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`