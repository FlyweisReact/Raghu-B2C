import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function SideBarCanvas(props) {
  return (
    <Offcanvas {...props} >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <div
          className="sideMenuRes"
          style={{ marginLeft: "10px" }}
          ref={domNode}
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

