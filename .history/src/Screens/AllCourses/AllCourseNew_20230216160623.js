/** @format */

import React, { useEffect, useState } from "react";
import img from "../../images/cert.png";
import img2 from "../../images/courses.png";
import img3 from "../../images/learn.png";
import Footer from "../../Footer";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import axios from "axios";
import auth from "../../Auth";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";

const AllCourseNew = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [slot, setSlot] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const userId = localStorage.getItem("UserId");
  const [ courseName , setCourseName ] = useState("")
  const [ courseId , setCourseId ] = useState("")
  const  [ coursePrice , setCoursePrice ] = useState("")

  const Register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/demo/register",
        { email, mobile, name, course, slot }
      );
      console.log(data)
      alert("Successfully Registered");
      window.scrollTo(0 , 0)
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const AddCart = async (e) => {
    try {
      const data = await axios.post(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}`,
        {
          courseId: courseId,
          qua: 1,
          pri: coursePrice,
          name: courseName,
        },
        auth
      );
      console.log(data);
      alert(`${courseName} Course Added to Cart`);
    } catch (err) {
      console.log(err);
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


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add To Cart</h4>
          <div>
            <Button variant>Decline</Button>
            <Button variant="outline-success">Confirm</Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }


  return (
    <>
     <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Header />
      <div className="courseBanner">
        <p>Live training session in 23hrs:35mins:44sec </p>
        <a href="#reg">
          <button style={{ cursor: "pointer" }}>Register now</button>
        </a>
      </div>
      <div className="allNewCourse">
        <p className="head">
          Upskills your skills <br /> with Expert-Works{" "}
        </p>
        <button>EXPLORE MORE COURSES</button>
      </div>

      <a href="#allCoursses">
        <button className="centerBtn" style={{ cursor: "pointer" }}>
          MY COURSES
        </button>
      </a>

      <div className="courseThreeSec">
        <div>
          <img src={img3} alt="" />
          <p>LEARN AT YOUR OWN PACE</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p>ALL THE TRENDING COURSE </p>
        </div>
        <div>
          <img src={img} alt="" />
          <p>GET CERTIFIED</p>
        </div>
      </div>

      <div className="courseFiveSec" id="allCoursses">
        <p>EXPERT-WORKS COURSES</p>
        <select>
          <option>My Courses</option>
          <option>All Courses</option>
        </select>
        <button>Beginner</button>
        <button>Intermediate</button>
        <button>Expert</button>
      </div>

      <div className="courseCarousel">
        {data?.message?.map((i, index) =>
          i.levels.map((a, index) => (
            <div className="mainDiv" key={index}>
              <img
                src={a.image}
                alt={a.level}
                onClick={() => navigate("/NewCoursePage")}
              />
              <p
                style={{
                  maxWidth: "300px",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                {a.about}
              </p>
              <div className="btnDiv">
                <button
                  style={{
                    border: "1px solid #FDCA71",
                    backgroundColor: "#FDCA71",
                    color: "black",
                  }}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    border: "1px solid #000",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  onClick={() => {
                    setCourseName(i.title)
                    setCourseId(i._id)
                    setCoursePrice(i.price)
                    setModalShow(true)
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <button className="centerBtn" style={{ width: "400px" }}>
        Frequently Viewed
      </button>

      <div className="courseViewd">
        <div className="left">
          <div>
            <p>JAVA</p>
          </div>
          <div>
            <p>PYTHON</p>
          </div>
          <div>
            <p>POWER BI</p>
          </div>
        </div>
        <dv className="right">
          <div>
            <p>
              {" "}
              Java is <br /> viewed %
            </p>
          </div>
        </dv>
      </div>

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
      <Footer />
    </>
  );
};

export default AllCourseNew;
