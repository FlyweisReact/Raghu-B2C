/** @format */

import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function ResourceModal(props) {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [slot, setSlot] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/demo/register",
        { email, mobile, name, course, slot }
      );
      alert(`${data.message.name} Successfully Registered for Course`);
    } catch (err) {
      console.log(
        err.response.data.message ===
         ` E11000 duplicate key error collection: test.users index: email_1 dup key: { email: {email} }
          ? "change"
          : "dsad"
      );
    }
  };





  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ padding: "0px" }}
    >
      <Modal.Body style={{ padding: "0px" }}>
        <div
          className="registerForm"
          id="reg"
          style={{
            padding: "0px",
            margin: "0px",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          <p className="head">Register Now</p>
          <form onSubmit={Register}>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Email Id"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              onChange={(e) => setMobile(e.target.value)}
            />
            <br />
            <div className="two">
              <select onChange={(e) => setCourse(e.target.value)}>
                <option>Select Course</option>
                {data?.map((i, index) =>
                  i.levels.map((a, index) => (
                    <option value={a.title} key={index}>
                      {a.title}{" "}
                    </option>
                  ))
                )}
              </select>
              <input
                type="date"
                placeholder="Select Time Slot"
                onChange={(e) => setSlot(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ResourceModal;
