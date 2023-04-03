/** @format */

import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserDashModal(props) {
  const navigate = useNavigate();
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

          <Link to="/account">
            <button type="button">My Account</button>
          </Link>

          <button type="button" onClick={() => navigate("/wishlist")}>
            Wishlist
          </button>
          <button type="button" onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
          <Link to="/secondCourse">
            <button type="button">My Courses</button>
          </Link>

          <button type="button" onClick={() => SignOut()}>
            Sign out
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UserDashModal;
