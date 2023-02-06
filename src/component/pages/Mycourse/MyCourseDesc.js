/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Topbar from "../../navigation/Topbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Header from "../../Header/Header";

const MyCourseDesc = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [video, setVideo] = useState("");

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/level/${id}`
      );
      setData(data);
      console.log(data);
      setVideo(data.message[0].maninvideo);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  console.log("viedi vinfoe  vidno ");
  console.log(video);

  const CourseName =  data?.message?.[0]?.mainInfo?.aboutcourse?.heading

  function ModalVideo(data) {
    setVideo(data.video);
    fetchHandler();
  }
  const navigate = useNavigate();

  const addToCart = async () => {
    try {
      const data = await axios.post(
        "https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/cart",
        {
          courseId: id,
          qua: 1,
          pri: 500,
          name : CourseName
        }
      );
      navigate("/cart")
      alert('Added to Cart')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />

      <div className="NewTeoSec">
        <div className="left">
          <p className="CourseHead">
            {" "}
            {data?.message?.[0]?.mainInfo?.aboutcourse?.heading}{" "}
          </p>
          <video controls src={video}>
            {/* <source src={video} type="video/mp4" /> */}
            Your browser does not support HTML video.
          </video>
          <div className="Over">
            <p className="Overview">Overview</p>
            <hr />
          </div>

          <div className="desc">
            <p className="about-head">About This Course</p>
            <p className="about-desc">
              {data?.message?.[0]?.mainInfo?.aboutcourse?.desc}
            </p>
            <p className="about-head">
              {data?.message?.[0]?.mainInfo?.level?.heading}
            </p>
            <p className="course-desc">
              {data?.message?.[0]?.mainInfo?.level?.desc}
            </p>
            <p className="include-head">This course includes the following:</p>
            <ul>
              {data?.message?.[0]?.mainInfo?.include?.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="CourseHead">
            Course Content{" "}
            <span>
              <button
                style={{
                  backgroundColor: "#ff9900",
                  color: "#fff",
                  width: "200px",
                  border: "1px solid #ff9900",
                  padding: "10px",
                  fontSize: "20px",
                  marginLeft: "50px",
                }}
                // onClick={() => navigate("/cart")}
                onClick={() => addToCart()}
              >
                Add to Cart
              </button>
            </span>{" "}
          </div>

          {data?.message?.[0]?.content?.map((i, index) => (
            <div className="accord">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="bold-p">{i.section}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="bold-p">
                    <div className="Dess" onClick={() => setVideo(i.video)}>
                      <input type={"checkbox"} />
                      <img
                        src={
                          "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                        }
                        alt=""
                        className="img-thumbnail"
                      />
                      <p style={{ maxWidth: "100px" }}>{i.desc}</p>
                    </div>
                    <button className="centerBtn">Document</button>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}

          {/* <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p">
                  Section 1 : Course Model Video
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p">
                  Section 2 : Beginner level Model Video
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p">
                  Section 3 : Python Introduction
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 4 : Python Basic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 5 : Python Basic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 6 : Python Functions & Arrays{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 7 : Python DataStructures
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 8 : Python OOP
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 9 : Python Modules
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 10 : Python Input Output
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 11 : Python Date & Time
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 12 : Conclusion
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="accord">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="bold-p blurT">
                  Section 13 : Documentation
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bold-p blurT">
                  <div className="Dess">
                    <input type={"checkbox"} />

                    <img
                      src={
                        "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg"
                      }
                      alt=""
                      className="img-thumbnail"
                    />
                    <p>
                      Course <br /> Model <br /> Video
                    </p>
                  </div>
                  <button className="centerBtn">Document</button>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MyCourseDesc;
