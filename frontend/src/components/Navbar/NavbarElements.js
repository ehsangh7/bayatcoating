import { Link } from "gatsby"

import styled from "styled-components"
import {Colors} from "../Color"


export const Nav = styled.nav`
  background: ${Colors['gray']};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px) {
    background: ${Colors['gray']};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-left: 20px;
  margin-right: 20px;

  
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  
`

export const Logo = styled.img`
  width: 150px;
  margin-top: 25px;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: ${Colors['gray']};
  }
`

export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'irfarnaz';
  font-size: 25px;
  padding: 0.5rem 1rem;
  height: 100%;
  color: #fff;
  &:hover{
    color: ${Colors['orange']};
    border-bottom: 5px solid ${Colors['orange']};
    
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color:  ${Colors['blue']};
      transition: all 0.3s ease;
    }
  }
`