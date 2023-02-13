/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import img from "./images/cart 5.png";
import { Modal } from "react-bootstrap";
import { margin } from "@mui/system";

const NewCoursePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);


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

  useEffect(() => {
    Allcourses();
  }, []);

  // Course By Id
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        fullscreen={true}
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
                <p>BEGINNER</p>
                <i class="fa-solid fa-bars"></i>
              </div>

              <div className="about">
                <p className="head">About</p>
                <p className="desc">
                  {" "}
                  publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. Wikipedia
                </p>
              </div>

              <div className="about">
                <p className="head">Course Content</p>
                <p className="desc">
                  {" "}
                  publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. Wikipedia
                </p>
              </div>
            </div>

            <div className="right">
              <p className="CourseName">Java Beginner level Course</p>
              <video
                controls
                src={
                  "https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
                }
              >
                {/* <source src={video} type="video/mp4" /> */}
                Your browser does not support HTML video.
              </video>
              <div className="price">
                <p className="actualP">$9.99</p>
                <p className="fakeP">$49.95</p>
                <p className="off">80.00% off</p>
              </div>

              <div className="btns">
                <button
                  className="first"
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    props.onHide();
                    setOpen(true);
                  }}
                >
                  Add to cart
                </button>
                <button className="second">Buy Now</button>
              </div>

              <div className="includes">
                <p className="head">Includes</p>
                <p className="desc">
                  publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available. Wikipedia
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
                  <div>
                    <p>AWS</p>
                  </div>

                  <div>
                    <p>POWER BI</p>
                  </div>

                  <div>
                    <p>PYTHON</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <p className="CourseName">Java Beginner level Course</p>
              <video
                controls
                src={
                  "https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
                }
              >
                {/* <source src={video} type="video/mp4" /> */}
                Your browser does not support HTML video.
              </video>
              <div className="price">
                <p className="actualP">$9.99</p>
                <p className="fakeP">$49.95</p>
                <p className="off">80.00% off</p>
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

      <div className="NewCourseThree">
        {data?.message?.map((i, index) => (
          <div className="main" key={index}>
            <button className="list"> {i.title} </button>
            <div className="hoverElement specialDiv">
              {i.levels?.map((a, index) => (
                <div
                  className="bigOne"
                  key={index}
                  onClick={() => setModalShow(true)}
                >
                  <p>{a.level} </p>
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
