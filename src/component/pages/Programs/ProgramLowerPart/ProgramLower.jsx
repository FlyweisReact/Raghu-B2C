import React from 'react'

import { GoPlus } from "react-icons/go";
import './lower.scss'

const ProgramLower = () => {
  return (
    <>

        <div className="main_container_lowerpart">

            <div className="lowerpart_content_holder">

                <div className="leftside_lower_container">
                    <div className="all_content_wrapper">

                        <div className="intro">
                            <h3>Introduction 

                                <GoPlus/>
                            </h3>

                        </div>
                        <div className="intro">
                            <h3>Introduction 

                                <GoPlus/>
                            </h3>

                        </div>
                        <div className="intro">
                            <h3>Unit -1 

                                <GoPlus/>
                            </h3>

                        </div>
                        <div className="intro">
                            <h3>Introduction 

                                <GoPlus/>
                            </h3>

                        </div>

                    </div>

                </div>
                        {/* ----------right-side------------- */}
                <div className="right-side_lower_container">
                <div className="all_content_wrapper">

                           <div className="intro">
                                  <h3>Unit -1 Imporving Command Line Productivity

                                        <GoPlus/>
                                  </h3>

                             </div>                      
                           <div className="intro">
                                  <h3> Unit-3 Tuning System Performance

                                        <GoPlus/>
                                  </h3>

                             </div>                      
                           <div className="intro">
                                  <h3>Unit-5 managing SELinux Security

                                        <GoPlus/>
                                  </h3>

                             </div>                      
                           <div className="intro">
                                  <h3>Unit-7 Managing Local Volumes 

                                        <GoPlus/>
                                  </h3>

                             </div>                      
                    </div>

                </div>

            </div>



        </div>

        
    
    
    </>
  )
}

export default ProgramLower