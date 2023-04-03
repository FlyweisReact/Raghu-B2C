/** @format */

import React, { useCallback, useEffect, useState } from "react";
import img from "../images/cart 5.png";
import img1 from "../images/play-button-icon-png-18921 10.png";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import axios from "axios";

const AccountDetail = () => {
  const [open, setOpen] = useState(false);
  const { id , title } = useParams()
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] = useState([])
const [ video , setVideoUrl] = useState("")

  const fetch = useCallback( async() => {
    try { 
      const { data } = await axios.get(`https://52pv9t2fl3.execute-api.ap-south-1.amazonaws.com/dev/api/v1/level/${id}`)
      setData(data)
    }catch(e) { 
      console.log(e)
    }
  },[id])

  useEffect(() => {
    fetch()
  },[fetch])

  function FullVideo(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: "0" }}>
          <div className="VideoModal">
            <video controls>
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    );
  }


  return (
    <>
      <FullVideo show={modalShow} onHide={() => setModalShow(false)} />
      <div className="CourseDetail">
        <p className="head">{title} Sessions</p>
        <ul>
          <li>Introduction</li>
          {data?.result?.[0]?.content?.map((i, index) => (
            <li key={index}> {i.section} </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)}>
          Documents <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
        {open ? (
          <div className="document">
            <p>Mini Projects</p>
            <p>Assignments</p>
            <p>Q&A</p>
            <p>Reference Links</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="particualCourseHeader">
        <div></div>
        <p> {title} </p>
        <div className="bigOne">
          <img src={img} alt="" />
          <div className="empty"></div>
        </div>
      </div>

      <div className="courseDeatil2">
        <p>Introduction Video</p>
        <img src={img1} alt="" />
      </div>

      <div className="courseDetail3">
        {data?.result?.[0]?.content?.map((i, index) => (
          <div className="main" onClick={() => {
            setVideoUrl(i.video)
            setModalShow(true)}} key={index}>
            <p> {i.section} </p>
            <img src={img1} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default AccountDetail;
