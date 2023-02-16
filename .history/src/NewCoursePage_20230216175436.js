/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";
import { Modal } from "react-bootstrap";
import auth from "./Auth";

const NewCoursePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [tradingCourse, setTradingCourse] = useState([]);

  const userId = localStorage.getItem("UserId");

  const goBack = () => {
    navigate(-1);
  };

  // Beginner Course Datail
  const getCourseDatail = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/level/${id}`
      );
      setCourseData(data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  // All Courses
  const Allcourses = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/study/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Tranding Curses
  const GetTrading = async () => {
    try {
      const { data } = await axios.get(
        " https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/trade"
      );
      setTradingCourse(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Allcourses();
    GetTrading();
    if (modalShow === true) {
      getCourseDatail();
    }
  }, [getCourseDatail, modalShow]);

  // Course By Id
  function MyVerticallyCenteredModal(props) {
    const AddCart = async (e) => {
      try {
        const data = await axios.post(
          `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart/${userId}`,
          {
            courseId: courseData?.data?._id,
            qua: 1,
            pri: courseData?.data?.actualprice,
            name: courseData?.data?.level,
          },
          auth
        );
        console.log(data);
        alert(`${courseData?.data?.level} Course Added to Cart`);
        props.onHide();
        setOpen(true);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "9999" }}
      >
        <Modal.Body
          style={{
            border: "5px solid #3fa0fc",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "0px",
          }}
        >
          <div className="CourseDescrip">
            <div className="left">
              <div className="courseLevel">
                <p> {courseData?.data?.level} </p>
                <i class="fa-solid fa-bars"></i>
              </div>

              <div className="about">
                <p className="head">About</p>
                <p className="desc">{courseData?.data?.about}</p>
              </div>

              <div className="about">
                <p className="head">Course Content</p>
                <p className="desc">{courseData?.data?.content}</p>
              </div>
            </div>

            <div className="right">
              <p className="CourseName">{courseData?.data?.title}</p>
              <video controls src={courseData?.data?.video}>
                {/* <source src={video} type="video/mp4" /> */}
                Your browser does not support HTML video.
              </video>
              <div className="price">
                <p className="actualP">${courseData?.data?.actualprice} </p>
                <p className="fakeP">${courseData?.data?.price}</p>
                <p className="off">{courseData?.data?.discount}%off</p>
              </div>

              <div className="btns">
                <button
                  className="first"
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => AddCart()}
                >
                  Add to cart
                </button>
                <button className="second">Buy Now</button>
              </div>

              <div className="includes">
                <p className="head">Includes</p>
                <p className="desc">
                  {courseData?.data?.include?.map((a, index) => a)}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  // Cart
  function AddToCart(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "9999" }}
      >
        <Modal.Body
          style={{ border: " 5px solid #3fa0fc", backgroundColor: "#faf4f4" }}
        >
          <div className="frequentlyBought">
            <div className="left">
              <div className="tog">
                <p className="bigHead">Frequently Bought Together</p>

                <div className="courseNN">
                  <div className="two-sec">
                    <div className="leftUnder">
                      <img
                        src={
                          "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                        }
                        alt=""
                      />
                    </div>

                    <div className="rightUnder">
                      <p className="head">Java Intermediate level Course</p>
                      <div className="prices">
                        <p className="realprice">$9.99</p>
                        <p className="fakeP">$49.99</p>
                        <input type={"checkbox"} />
                      </div>
                    </div>
                  </div>

                  <div className="two-sec">
                    <div className="leftUnder">
                      <img
                        src={
                          "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                        }
                        alt=""
                      />
                    </div>

                    <div className="rightUnder">
                      <p className="head">Java Expert level Course</p>
                      <div className="prices">
                        <p className="realprice">$9.99</p>
                        <p className="fakeP">$49.99</p>
                        <input type={"checkbox"} />
                      </div>
                    </div>
                  </div>

                  <div className="lastD">
                    <div className="total">
                      <p className="TotalP">Total: </p>
                      <p className="price">$30</p>
                      <p className="fakep">$100</p>
                    </div>
                    <div className="btn">
                      <button>Add all to cart</button>
                    </div>
                  </div>
                </div>

                <p className="bigHead" style={{ marginTop: "10px" }}>
                  Trending Courses
                </p>

                <div className="trending">
                  {tradingCourse?.map((i, index) => (
                    <div key={index}>
                      <p> {i.name} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="right">
              <p className="CourseName">{courseData?.data?.title}</p>
              <video controls src={courseData?.data?.video}>
                {/* <source src={video} type="video/mp4" /> */}
                Your browser does not support HTML video.
              </video>
              <div className="price">
                <p className="actualP">${courseData?.data?.actualprice} </p>
                <p className="fakeP">${courseData?.data?.price}</p>
                <p className="off">{courseData?.data?.discount}%off</p>
              </div>

              <div className="btns">
                <button
                  className="first"
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Go to cart
                </button>
                <button
                  className="second"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  function Wishlist(props) {
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
        <h4 style={{textAlign : 'center' , marginBottom : '20px'}}>Add To Cart</h4>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button variant="outline-danger" onClick={() => props.onHide()}>Decline</Button>
            <Button variant="outline-success" onClick={() => AddCart()}>Confirm</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <AddToCart show={open} onHide={() => setOpen(false)} />

      <div className="NewCourse">
        <p>ABOUT</p>
      </div>

      <div className="NewCourseHeader">
        <img src={img} alt="" />
        <div></div>
      </div>

      <div className="goBackBtn">
        <button onClick={() => goBack()}>
          Go Back{" "}
          <span style={{ position: "absolute", right: "10px" }}>{"<<"}</span>
        </button>
      </div>

      <div className="NewCourseThree">
        {data?.message?.map((i, index) => (
          <div className="main" key={index}>
            <button className="list newPP"> {i.title} </button>
            <div className="hoverElement specialDiv">
              {i.levels?.map((a, index) => (
                <div className="bigOne" key={index}>
                  <p
                    onClick={() => {
                      setId(a._id);
                      setModalShow(true);
                    }}
                  >
                    {a.level}{" "}
                  </p>
                  <div className="last">
                    <i class="fa-solid fa-heart"> </i>
                    <img src={img} alt="Cart" style={{ width: "30px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewCoursePage;
