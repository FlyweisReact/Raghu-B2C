/** @format */

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";

function UserDashModal(props) {

  const [ show , setShow ] = useState()

  function SignOut() {
    localStorage.clear();
    window.location.reload();
    alert("You've been logged out");
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Userinfo">
          <Link to="/account">
            <button type="button">My Account</button>
          </Link>

          <Link to="/wishlist">
            <button type="button">Wishlist</button>
          </Link>

          <Link to="/cart">
            <button type="button">Go to Cart</button>
          </Link>
          <Link to="/secondCourse">
            <button type="button">My Courses</button>
          </Link>
            <button type="button">Edit Profile</button>
        

          <button type="button" onClick={() => SignOut()}>
            Sign out
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UserDashModal;
