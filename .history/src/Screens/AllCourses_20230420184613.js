/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import LoginModal from "../Modals/LoginModal";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);

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

  const navigate = useNavigate();


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
        props.onHide()
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

  return (
    <>
      <LoginModal show={show} onHide={() => setShow(false)} />

      <p className="AllCourse0" onClick={() => navigate(-1)}>
        BACK
      </p>

      <div className="AllCourse1">
        {data?.map((i) =>
          i.levels.map((a, index) => (
            <div className="mainDiv" key={index}>
              <img src={a.image} alt="" style={{ cursor: "pointer" }} />
              <p>{a.about?.substring(0, 200) + "..."}</p>
              <div className="btnDiv">
                <button
                  style={{
                    border: "1px solid #FDCA71",
                    backgroundColor: "#FDCA71",
                    color: "black",
                  }}
                  onClick={() => {
                    token ?  navigate("/cart") : setShow(true);
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
                    navigate("/bought");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AllCourses;
