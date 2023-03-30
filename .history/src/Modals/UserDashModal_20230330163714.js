/** @format */

import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";

function UserDashModal(props) {
  const navigate = useNavigate();
  function SignOut() {
    localStorage.clear();
    props.onHide();
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Userinfo">
          <button type="button" onClick={() => navigate("/NewCoursePage")}>
            My Account
          </button>
          <button type="button" onClick={() => navigate("/wishlist")}>
            Wishlist
          </button>
          <button type="button" onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
          <a href='secondCourse#allCoursses'
          <button type="button">
          My Courses
          </button>
          <button type="button" onClick={() => SignOut()}>
            Sign out
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}


export default UserDashModal