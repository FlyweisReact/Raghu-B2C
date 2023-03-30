/** @format */

import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../images/person 1.jpg";
import UserDashModal from "../Modals/UserDashModal";

function SideBarCanvas(props) {
  const token = localStorage.getItem("token");
  const [userDetailModal, setUserDetailModal] = useState(false);


  return (
    <>
      <UserDashModal
        show={userDetailModal}
        onHide={() => setUserDetailModal(false)}
      />
      <Offcanvas {...props}>
        <Offcanvas.Body>
          <div className="sideMenuRes" style={{ marginLeft: "10px" }}>
            <ul>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/allCou"}>
                <li>Courses</li>
              </Link>
              <li>Resources</li>
              {token ? (
                <>
                  <li>
                    <img
                      src={img}
                      alt=""
                      className="personImg"
                      style={{ width: "80px" }}
                      onClick={() => {
                        setUserDetailModal(true);
                      }}
                    />
                  </li>
                </>
              ) : (
                <>
                  <li
                    style={{ fontWeight: "bold" }}
                    className="normalList"
                
                  >
                    Login
                  </li>
                  <Link to={"/freeTrial"}>
                    <button>Free Trial </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBarCanvas;
