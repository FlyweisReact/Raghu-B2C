import React from 'react';
import './footer.scss'
import { ImLinkedin2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return <>

    <div className="footer_main_container">
        <div className="footer_container">
            <div className="logoDiv">

                <h1>LOGO</h1>
            </div>
            <div className="sitemap">
                <h3>Sitemap</h3>
                <li>Home</li>
                <li>Courses</li>
                <li>Internship</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact Us</li>

            </div>
            <div className="support">

            <h3>Support</h3>
                <li>Terms & Condition</li>
                <li>Privasy & Policy</li>
                <li>Get help</li>
                
            </div>
            <div className="joinus">

                <h3>Join Us</h3>

                <li>Become Teacher</li>
                <li>Become Student</li>
            </div>
            <div className="followus">

                <h3>Follow us</h3>

                <div className="socialIcons">

                    <FaFacebookSquare className='social1'/>
                    <FiInstagram  className='social2'/>
                    <ImLinkedin2  className='social'/>

                </div>




            </div>

        </div>
        
    </div>
  
  </>;
};

export default Footer;
