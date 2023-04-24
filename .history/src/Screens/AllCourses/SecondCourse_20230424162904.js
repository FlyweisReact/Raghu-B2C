/** @format */

import React, { useCallback, useEffect, useState } from "react";
import img from "../../images/cert.png";
import img2 from "../../images/courses.png";
import img3 from "../../images/learn.png";
import Footer from "../../Footer";
import { useNavigate } from "react-router";
import Header from "../../Header/Header";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import LoginModal from "../../Modals/LoginModal";

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
  const [courseId, setCourseId] = useState("");
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [purchaseData, setPurchaseData] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [levelId, setLevelId] = useState("");
  const [allCourse, setAllCourse] = useState("My Courses");
  const [openModal, setOpenModal] = useState(false);
  const [countPercentage, setCountPercentage] = useState("");
  const today = new Date().toISOString().substr(0, 10);
  const [ query , setQuery ] = useState("")

  const Register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/demo/register",
        { email, mobile, name, course, slot }
      );
      setName("");
      setCourse("");
      setEmail("");
      setMobile("");
      setSlot("");
      console.log(data);
      alert("Successfully Registered");
      window.scrollTo(0, 0);
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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPurchase = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/${userId}`
      );
      setPurchaseData(data.result.courseId);
    } catch (e) {
      console.log(e);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
    fetchPurchase();
    window.scrollTo(0, 0);
  }, [fetchPurchase]);

  function AddToCart(props) {
    const AddCart = async () => {
      if (userId) {
        try {
          const data = await axios.post(
            `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart`,
            {
              courseId: courseId,
              quantity: 1,
              level: levelId,
              userId,
            }
          );
          props.onHide();
          console.log(data);
          alert(`Course Added to Cart`);
        } catch (err) {
          alert(err.response.data.error);
          props.onHide();
        }
      } else {
        alert("Please Login First");
        props.onHide();
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
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add To Cart
          </h4>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button variant="outline-danger" onClick={() => props.onHide()}>
              Decline
            </Button>
            <Button variant="outline-success" onClick={() => AddCart()}>
              Confirm
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  function FullVideo(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ padding: "0", marginBottom: "5%" }}>
          <div className="VideoModal">
            <video controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    );
  }


  const filterData = !query ? data : data
   console.log(filterData)


   const array = [
    {
      about :  "About" , 
      levels  : [
        {
          about
: 
"About"
actualPrice
: 
450
content
: 
"content"
discount
: 
50
image
: 
"http://res.cloudinary.com/dbcnha741/image/upload/v1680614189/digitalworld_apidba.jpg"
includes
: 
[]
level
: 
"Beginner"

        }
      ]
    }
   ]




  return (
    <>
      <AddToCart show={modalShow} onHide={() => setModalShow(false)} />
      <FullVideo show={show} onHide={() => setShow(false)} />
      <LoginModal show={openModal} onHide={() => setOpenModal(false)} />
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
        {token ? (
          <a href="#allCoursses" onClick={() => setAllCourse("All Courses")}>
            <button>EXPLORE MORE COURSES</button>
          </a>
        ) : (
          <button onClick={() => navigate("/freeTrial")}>
            START FREE TRIAL
          </button>
        )}
      </div>

      <a href="#allCoursses">
        <button
          className="centerBtn"
          style={{ cursor: "pointer", width: "400px", padding: "10px" }}
        >
          {token ? "MY COURSES" : " EXPLORE OUR COURSES"}
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

      <section id="allCoursses">
        <div className="courseFiveSec">
          <p>EXPERT-WORKS COURSES</p>
          <select onClick={(e) => setAllCourse(e.target.value)}>
            {token ? (
              <>
                {" "}
                <option value="My Courses">My Courses</option>
                <option value="All Courses">All Courses</option>
              </>
            ) : (
              <>
                {" "}
                <option>All Courses</option>
              </>
            )}
          </select>
          <button onClick={() => setQuery("Beginner")}>Beginner</button>
          <button>Intermediate</button>
          <button>Expert</button>
        </div>
      </section>

      <div className="courseCarousel">
        {token ? (
          <>
            {allCourse === "All Courses"
              ? data?.map((i) =>
                  i.levels.map((a, index) => (
                    <div className="mainDiv" key={index}>
                      <img
                        src={a.image}
                        alt=""
                        onClick={() => navigate(`/particularCourse/${i._id}`)}
                        style={{ cursor: "pointer" }}
                      />
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "25px",
                          textAlign: "center",
                        }}
                      >
                        {a.title}
                      </p>
                      <p
                        style={{
                          maxWidth: "300px",
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        {a.about?.substring(0, 200) + "..."}
                      </p>
                      <div className="btnDiv">
                        <button
                          style={{
                            border: "1px solid #FDCA71",
                            backgroundColor: "#FDCA71",
                            color: "black",
                          }}
                          onClick={() => navigate("/cart")}
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
                            setCourseId(i._id);
                            setLevelId(a._id);
                            setModalShow(true);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))
                )
              : ""}

            {allCourse === "My Courses"
              ? purchaseData?.map((i) =>
                  i.course?.levels?.map((item, index) => (
                    <div className="mainDiv" key={index}>
                      <img
                        src={item.image}
                        alt=""
                        style={{ cursor: "pointer" }}
                      />
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "25px",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        {item.title}{" "}
                      </p>
                      <p
                        style={{
                          maxWidth: "300px",
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        {item.about?.substring(0, 200) + "..."}
                      </p>
                      <div className="btnDiv">
                        <button
                          style={{
                            border: "1px solid #FDCA71",
                            backgroundColor: "#FDCA71",
                            color: "black",
                            width: "90%",
                            fontWeight: "bold",
                          }}
                          onClick={() => {
                            setVideoUrl(item.video);
                            setShow(true);
                          }}
                        >
                          PLAY
                        </button>
                      </div>
                    </div>
                  ))
                )
              : ""}
          </>
        ) : (
          <>
            {" "}
            {data?.map((i) =>
              i.levels.map((a, index) => (
                <div className="mainDiv" key={index}>
                  <img
                    src={a.image}
                    alt=""
                    onClick={() => navigate(`/particularCourse/${i._id}`)}
                    style={{ cursor: "pointer" }}
                  />
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      textAlign: "center",
                    }}
                  >
                    {a.title}
                  </p>
                  <p
                    style={{
                      maxWidth: "300px",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    {a.about?.substring(0, 200) + "..."}
                  </p>
                  <div className="btnDiv">
                    <button
                      style={{
                        border: "1px solid #FDCA71",
                        backgroundColor: "#FDCA71",
                        color: "black",
                      }}
                      // onClick={() => navigate("/cart")}
                      onClick={() => setOpenModal(true)}
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
                        setModalShow(true);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}{" "}
          </>
        )}
      </div>

      {token ? (
        <Link to="">
          <button
            className="centerBtn"
            style={{ width: "400px", padding: "10px" }}
          >
            Frequently Viewed
          </button>
        </Link>
      ) : (
        <Link to="/allCourses">
          <button
            className="centerBtn"
            style={{ width: "400px", padding: "10px" }}
          >
            VIEW ALL COURSES
          </button>
        </Link>
      )}

      <div className="courseViewd">
        <div className="left">
          <div
            onClick={() => setCountPercentage("50")}
            style={{ cursor: "pointer" }}
          >
            <p>JAVA</p>
          </div>
          <div
            onClick={() => setCountPercentage("70")}
            style={{ cursor: "pointer" }}
          >
            <p>PYTHON</p>
          </div>
          <div
            onClick={() => setCountPercentage("90")}
            style={{ cursor: "pointer" }}
          >
            <p>POWER BI</p>
          </div>
        </div>
        <div className="right">
          <div>
            {token ? (
              <p>
                {" "}
                Course <br /> Completion status <br /> {countPercentage}%
              </p>
            ) : (
              <p>
                Java is <br /> viewed <br /> {countPercentage}%
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="registerForm" id="reg">
        <p className="head">Register Now</p>
        <form onSubmit={Register}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email Id"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <br />
          <PhoneInput
            defaultCountry="IN"
            value={mobile}
            onChange={setMobile}
            placeholder="Enter Your Phone Number"
            maxLength={15}
            minLength={8}
            required
            style={{ width: "90%", marginLeft: "5%" }}
          />
          <br />
          <div className="two">
            <select
              onChange={(e) => setCourse(e.target.value)}
              required
              value={course}
            >
              <option value="">Select Course</option>
              {data?.map((i) =>
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
              required
              value={slot}
              min={today}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SecondCourse;
