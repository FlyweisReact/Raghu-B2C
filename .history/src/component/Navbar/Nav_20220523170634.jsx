/** @format */

import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.scss";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
// --------------------------------------------
// const Navbar = styled.div`
// width: 100%;
// height: 70px;

// padding: 0 100px;
// border: 1px solid ;

// `

// const NavItems = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;

// `
// const Logo = styled.div`

// `
// const MobileIcons = styled.div`
// cursor: pointer;

// `
// const MobileMenu = styled.div`

//   width: 100%;
//   height: 100vh;
//   background-color: black;

// `

// --------------------------------

const Nav = ({ user }) => {
  const [click, setclick] = useState(true);

  const handleclick = () => {};

  return (
    <>
      <div className="nav_item_wrapper">
        <div className="nav_logo">
          <h1>LOGO</h1>
        </div>

        <div className="nav_items">
          <Link to="/" className="links">
            <ul>Home</ul>
          </Link>
          <Link to="/cources" className="links">
            <ul>Courses</ul>
          </Link>

          {/* ------------------------------------------ */}
          <Link to="/programs" className="links">
            <ul>Programs</ul>
          </Link>

          {/* <NestedList/> */}

          {/* --------------------------------------- */}
        </div>

        <div className="nav_btn">
          {user ? (
            "login"
          ) : (
            <div>
              <Link to="/login" className="links">
                <button className="n_btn">LOGIN</button>
              </Link>
              <Link to="/login" className="links">
                <button className="n_btn">LOGIN FOR FREE</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* <Navbar>
          <NavItems>
            <Logo>
              <h1>LOGO</h1>

            </Logo>
            <MobileIcons>

              <MenuIcon onclick={handleclick} click={click} />

              <MobileMenu>
                <li>Home</li>

              </MobileMenu>

              

            </MobileIcons>

          </NavItems>

        </Navbar> */}
    </>
  );
};

export default Nav;
