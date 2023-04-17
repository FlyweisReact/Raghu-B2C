/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./Modals/LoginModal";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <>
      <LoginModal show={open} onHide={() => setOpen(false)} />
      <div className="NewFooter">
        <div>
          <ul>
            <p className="head">Contact</p>
            <li>Expert Technologies LLC</li>
            <li>1205 BMC Drive Suite 1803-E, Cedar Park, TX 78613.</li>
            <li>+1 (646) 727 9169</li>
            <li>sales@expert-works.com</li>
            <li>
              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {/* Facebook icon */}
                <a
                  href="https://www.facebook.com/Expertworks2021"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: "black" }}
                >
                  <i
                    className="fa-brands fa-square-facebook"
                    style={{ fontSize: "2rem", color: "#426fec" }}
                  ></i>
                </a>
                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/expertworks2020/"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: "black" }}
                >
                  <i
                    className="fa-brands fa-square-instagram"
                    style={{ fontSize: "2rem", color: "#8441b0" }}
                  ></i>
                </a>

                {/* Linkedin icon */}
                <a
                  href="https://www.linkedin.com/company/expert-works/"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: "black" }}
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ color: "#0a66c2" , fontSize: "2rem" }}
                  ></i>
                </a>

                {/* Youtube icon */}
                <a
                  href="https://www.instagram.com/expertworks2020/"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: "black" }}
                >
                  <i
                    class="fa-brands fa-youtube"
                    style={{ color: "#fe0000" ,  fontSize: "2rem" }}
                  ></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="head">Quick Links</p>
            <li>Frequently asked questions </li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="head">More</p>
            <Link to="/about" style={{ color: "black" }}>
              <li>About us </li>
            </Link>
            {token ? (
              " "
            ) : (
              <li onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                Login
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
