/** @format */

import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import img from "../../images/about us image.png";
import Footer from "../../Footer";
import axios from "axios";
import ResourceModal from "./ResourceModal";

const About = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/experts/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ResourceModal show={modalShow} onHide={() => setModalShow(false)} />
      <Header />
      <div className="courseBanner">
        <p>Live training session in 23hrs:35mins:44sec </p>

        <button
          style={{ cursor: "pointer" }}
          onClick={() => setModalShow(true)}
        >
          Register now
        </button>
      </div>

      <div className="abouttwo-sec">
        <div className="left">
          <p style={{ color: "#5c8de5" }} className="head">
            ABOUT US
          </p>
          <p className="desc">
            Our emphasis is on delivering a remrkable and productive <br />
            experience by utilizing the top-of-the-line technologies <br />
            available in the industry
          </p>
          <hr />
          <p className="desc2">
            Expert - Works is a leading edu-tech platform, providing quailty and
            industry <br />
            standard training is in the on-demand technologies to Bench Sales
            companies <br /> and tech entusiasts all over the world. We are
            known for providing the <br />
            flexibility of self-paced learning and real-time content, allwing
            everyone to <br />
            learn any technology conviently
          </p>
        </div>

        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="aboutFirst">
        <p className="head">Our Team</p>
        <p className="meet">MEET OUR EXPERTS</p>
        <hr />
        <p className="desc">
          <span style={{ color: "#6697bf" }}>Expert-Works</span> is made up of a
          diverse group of proffesionals with background and skill <br /> sets,
          but we all share a common goal: to deliver expectional results and
          exceed our client's expecta-
        </p>
      </div>

      <div className="aboutSecond">
        {data?.data?.map((i, index) => (
          <div className="main" key={index}>
            <img src={i.image} alt="" />
            <div className="desc">
              <p> {i.name} </p>
              <p> {i.position} </p>
              <div>
                <a
                  href={i.facebook}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#aaaaaa" }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href={i.twitter}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#aaaaaa" }}
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href={i.others}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#aaaaaa" }}
                >
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </>
  );
};

export default About;
