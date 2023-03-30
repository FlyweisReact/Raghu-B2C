/** @format */

import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../images/person 1.jpg";
import UserDashModal from "../Modals/UserDashModal";
import LoginModal from "../Modals/LoginModal";

function SideBarCanvas(props) {
  const token = localStorage.getItem("token");
  const [userDetailModal, setUserDetailModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (

    <>
          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <UserDashModal
        show={userDetailModal}
        onHide={() => setUserDetailModal(false)}
      />
      
    </>

  );
}

export default SideBarCanvas;
