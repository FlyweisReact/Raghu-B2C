import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
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
  