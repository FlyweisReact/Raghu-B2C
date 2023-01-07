/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { navItems } from "./NavItems";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import img from '../../images/logo.png'

const Container = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  width: 100%;
  max-width: 1400px;

  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  color: #fff;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;
const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
const NavMenu = styled.ul`
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
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #36303b;
  }
`;

const NavItem = styled.div`
  height: 80px;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 2px solid green;
  }

  @media screen and (max-width: 991px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 0.5rem 3rem;
  height: 100%;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 991px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #00ab83;
      transition: all 0.3s ease;
    }
  }
`;
const NavButton = styled.div`
  button {
    padding: 0.4rem 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    margin: 5px;
    color: #fff;
    border: 1px solid #fff;
    background-color: transparent;
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #026a5e;
    }
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const NavButtons = styled.div`
  display: none;
  width: 100%;
  margin: 10px;
  padding: 0 50px;

  button {
    padding: 0.4rem 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    margin: 5px;
    color: #000;
    border: 1px solid #fff;
    width: 100%;
    background-color: green;
  }

  @media screen and (max-width: 1300px) {
    display: block;
  }
`;

const Topbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const [click, setclick] = useState(false);
  const handle = () => setclick(!click);

  return (
    <>
      <Container>
        <Nav>
          <NavLogo to="/">
            <img src={img} alt='' style={{width : '200px'}} />
          </NavLogo>
          <MobileIcon onClick={handle}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </MobileIcon>

          <NavMenu onClick={handle} click={click}>
            {navItems.map((item) => {
              if (item.title === "Programs") {
                return (
                  <NavItem
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <NavLinks to={item.path}>{item.title}</NavLinks>
                    {dropdown && <Dropdown />}
                  </NavItem>
                );
              }
              return (
                <NavItem key={item.id} className={item.cName}>
                  <NavLinks to={item.path}>{item.title}</NavLinks>
                </NavItem>
              );
            })}
           

            <NavButtons>
              <NavLink to="/">
                <button>Login</button>
              </NavLink>
            </NavButtons>

            <NavButtons>
              <NavLink to="/create-acount">
                <button>Login For Free</button>
              </NavLink>
            </NavButtons>
          </NavMenu>

          <NavButton>
            <NavLink to="/">
              <button>Login</button>
            </NavLink>

            <NavLink to="/create-acount">
              <button>Login For Free</button>
            </NavLink>
            {/* <button>Login For Free</button> */}
          </NavButton>
        </Nav>
      </Container>
    </>
  );
};

export default Topbar;
