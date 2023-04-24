/** @format */

import { Modal } from "react-bootstrap";

function EditProfileModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className="loginDiv">
            <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
          </div>

          <div className="loginDiv2">
            <h1>Edit Profile</h1>
          </div>
          <div className="loginDiv3">
            <form>
              <div className="mb-3  ">
                <p>First Name</p>
                <input type="text" placeholder="React" />
              </div>
              <div className="mb-3">
                <p>Last Name</p>
                <input type="text" placeholder="Developer" />
              </div>
              <div className="mb-3  ">
                <p>Email Address</p>
                <input type="email" placeholder="ReactDeveloper@gmail.com" />
              </div>
              <div className="mb-3  ">
                <p>Phone Number</p>
                <input type="tel" pattern="[0-9]{10}" placeholder=""/>
              </div>
             
              <button type="submit">Edit</button>
            </form>
          </div>

          <div className="loginDiv4"></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfileModal;
