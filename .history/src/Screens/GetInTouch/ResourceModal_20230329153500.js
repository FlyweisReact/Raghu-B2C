import { Modal } from "react-bootstrap";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {

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
          console.log(data);
          alert("Successfully Registered");
          window.scrollTo(0, 0);
        } catch (err) {
          console.log(err);
        }
      };


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        <div className="registerForm" id="reg">
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
              {data?.message?.map((i, index) =>
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
  