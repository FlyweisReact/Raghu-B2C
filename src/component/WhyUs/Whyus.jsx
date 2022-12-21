import React from 'react';
import { BiCheckbox } from "react-icons/bi";

import './why.scss'

import WhyImg from '../../images/why_choose_us.png'

const Whyus = () => {
  return <>
        <div className="why_us_main_containers">

        

            <div className="whyus_container">
                <div className="whyus_left_side">
                    <div className="why_left_side_container">
                        <img src={WhyImg} alt="why choose us" />

                    </div>

                </div>
                <div className="whyus_right_side">
                    <div className="why_right_side_container">

                        <h2>Why You Should <br />
                            <span> Choose Us___</span> </h2>


                            <p>

                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, iusto! Ab iste voluptates quam laborum cupiditate! Eaque unde quo expedita!
                            </p>

                            <div className="listitems">

                                <li> <BiCheckbox className='boxs'/> 24,00+ online couses</li>
                                <li> <BiCheckbox className='boxs'/>Expert Instruction</li>
                                <li> <BiCheckbox className='boxs'/>Unlimited Access</li>
                                <li> <BiCheckbox className='boxs'/>Comfortable Prices</li>
                                <li> <BiCheckbox className='boxs'/>Free 2 months trail</li>
                                <li> <BiCheckbox className='boxs'/>Review System</li>
                               
                            </div>

                    </div>

                </div>

                <figure class="circless"></figure>
          <figure class="circless2"></figure>
          <figure class="circless3"></figure>

            </div>




        </div>
  

  </>;
};

export default Whyus;
