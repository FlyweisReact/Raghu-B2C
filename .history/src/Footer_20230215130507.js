/** @format */

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="NewFooter">
        <div>
       
          <ul>
          <p className="head">Contact</p>
            <li>Expert Technologies LLC</li>
            <li>1205 BMC Drive Suite 1803-E, Cedar Park, TX 78613.</li>
            <li>+1 (646) 727 9169</li>
            <li>sales@expert-works.com</li>
            <li className=""> 
              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <i
                  class="fa-brands fa-square-facebook"
                  style={{ fontSize: "2rem", color: "#426fec" }}
                ></i>
                <i
                  class="fa-brands fa-square-twitter"
                  style={{ fontSize: "2rem", color: "#1c96e8" }}
                ></i>
                <i
                  class="fa-brands fa-square-instagram"
                  style={{ fontSize: "2rem", color: "#8441b0" }}
                ></i>
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
            <li>About us </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
