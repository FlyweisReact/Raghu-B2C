/** @format */

import axios from "axios";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function EditProfileModal(props) {
  const userId = localStorage.getItem("UserId")
  const [ first , setFirst ] = useState()
  const [ last , stLast] = useState()
  const [ email  , setEmail  ] = useState()
  const [ mobile , setMobile ] = useState()

  const EditHandler = async (e) => {
    e.preventDefault()
    try{
      const { data } = await axios.put(` https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/edit/${userId}` , {
        first , last , email , mobile
      })
      console.log(data)
      alert("")
      }catch(e){
      console.log(e)
    }
  }

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
                <input type="tel" pattern="[0-9]{10}" placeholder="4511245412"/>
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
