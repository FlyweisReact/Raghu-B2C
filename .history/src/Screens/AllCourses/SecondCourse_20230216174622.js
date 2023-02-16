/** @format */

import React, { useEffect, useState } from "react";
import img from "../../images/cert.png";
import img2 from "../../images/courses.png";
import img3 from "../../images/learn.png";
import Footer from "../../Footer";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import img45 from "../../images/AA Beg.jpg";
import axios from "axios";
import auth from "../../Auth";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const SecondCourse = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [slot, setSlot] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const userId = localStorage.getItem("UserId");
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [coursePrice, setCoursePrice] = useState("");

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



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
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{textAlign : 'center' , marginBottom : '20px'}}>Add To Cart</h4>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button variant="outline-danger" onClick={() => props.onHide()}>Decline</Button>
            <Button variant="outline-success" onClick={() => AddCart()}>Confirm</Button>
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
        <button>START FREE TRIAL</button>
      </div>

      <a href="#allCoursses">
        <button
          className="centerBtn"
          style={{ cursor: "pointer", width: "400px", padding: "10px" }}
        >
          EXPLORE OUR COURSES
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
        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
                color : 'black'
              }}
            >
              Buy Now
            </button>
            <button      style={{
                border: "1px solid #000",
                backgroundColor: "#fff",
                color : '#000'
              }}>Add to Cart</button>
          </div>
        </div>

        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
                color : 'black'
              }}
            >
              Buy Now
            </button>
            <button      style={{
                border: "1px solid #000",
                backgroundColor: "#fff",
                color : '#000'
              }}>Add to Cart</button>
          </div>
        </div>

        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
                color : 'black'
              }}
            >
              Buy Now
            </button>
            <button      style={{
                border: "1px solid #000",
                backgroundColor: "#fff",
                color : '#000'
              }}>Add to Cart</button>
          </div>
        </div>


        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
                color : 'black'
              }}
            >
              Buy Now
            </button>
            <button      style={{
                border: "1px solid #000",
                backgroundColor: "#fff",
                color : '#000'
              }}>Add to Cart</button>
          </div>
        </div>


        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
                color : 'black'
              }}
            >
              Buy Now
            </button>
            <button      style={{
                border: "1px solid #000",
                backgroundColor: "#fff",
                color : '#000'
              }}>Add to Cart</button>
          </div>
        </div>

        <div className="mainDiv">
          <img src={img45} alt="" onClick={() => navigate("/NewCoursePage")} />
          <div className="btnDiv">
            <button
              style={{
                border: "1px solid #FDCA71",
                backgroundColor: "#FDCA71",
                color : 'black'
              }}
            >
              Buy Now
            </button>
            <button      style={{
                border: "1px solid #000",
                backgroundColor: "#fff",
                color : '#000'
              }}>Add to Cart</button>
          </div>
        </div>
      </div>

      <button className="centerBtn" style={{ width: "400px" }}>
      VIEW ALL COURSES
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
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <br />
          <input type="text" placeholder="Enter Your Email Id" />
          <br />
          <input type="text" placeholder="Enter Your Phone Number" />
          <br />
          <div className="two">
            <select>
              <option>Select Course</option>
              <option>----</option>
              <option>----</option>
            </select>
            <input type="text" placeholder="Select Time Slot" />
          </div>
          <button
            type="button"
            onClick={() => alert("Successfully Registered")}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SecondCourse;
