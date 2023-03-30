import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from './'
function SideBarCanvas(props) {
    const token = localStorage.getItem("token");

  return (
    <Offcanvas {...props} >
    <Offcanvas.Body>
    <div
          className="sideMenuRes"
          style={{ marginLeft: "10px" }}
        >
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About </li>
            <Link to={"/allCou"}>
              <li>Courses</li>
            </Link>
            <li>Resources</li>
            {token ? (
              <>
                <li>
                  <img
                    src={img1}
                    alt=""
                    className="personImg"
                    style={{ width: "80px" }}
                    onClick={() => {
                      setOpen(false);
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
                  onClick={() => {
                    setOpen(false);
                    setModalShow(true);
                    setUserDetailModal(false);
                  }}
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
  );
}


export default SideBarCanvas

