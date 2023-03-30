import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";


function MyVerticallyCenteredModal(props) {
    const navigate = useNavigate();
  
    function SignOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("UserId");
      props.onHide();
    }
  
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
            <button type="button" onClick={() => SignOut()}>
              Sign out
            </button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }