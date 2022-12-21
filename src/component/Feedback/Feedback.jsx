import React from 'react';
import './feedback.scss'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Feedback = () => {
  return <>
  <div className="feedback_main_container">

      <div className="feedback_container">

            <div className="feedback_header">
                <h1>
                    Enrolled student's <span>Feedback</span>
                </h1>

                <button>View more</button>
            </div>

            <div className="reviews">

                <div className="user_feedback">
                    <p> " Lorem, ipsum dolor sit amet
                         consectetur adipisicing elit. Similique 
                         commodi incidunt officiis provident, officia
                          doloribus voluptatum. Nemo mollitia
                           at inventore modi repudiandae, 
                    
                            voluptatem? "
                            </p>

                            <span>
                                Robia de-Patcharia
                            </span>

                            <h6>CEO of Company</h6>

                            <div className="arrow_icons">
                            <GrFormPreviousLink className='arrows'/>

                            <GrFormNextLink  className='arrows'/>

                            </div>

                </div>

            </div>

      </div>

  </div>
  
  </>;
};

export default Feedback;
