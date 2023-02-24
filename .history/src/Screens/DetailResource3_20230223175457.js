/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/5 Tips Resume.jpg";
import img2 from "../images/resume tips 2.jpg";
import img3 from "../images/resume tips 4.jpg";
import img4 from "../images/resume tips 3 (1).jpg"
import img5 from "../images/resume tips 1.jpg"
import img6 from "../images/resume tips 5.jpg"

const data = [
  {
    image: img2,
    head: "Make your resume easy to read     ",
    desc: [
      "Employers spend around 10 seconds for each resume they receive, so it's important to grab their attention by making it easier for them to read. You need to increase the readability of your resume by choosing a good font style and size. It's always better to go with Arial or Times New Roman and 12 points font size. The line spacing should be either 1.15 or 1.5 to make your resume look professional and neat. Also, use one-inch margin size on all the sides of your resume. Keep the subheadings and key points in bold. "
    ],
  },
  {
    image: img3,
    head: "Use keywords mentioned in the job postings ",
    desc: [
      "key points mentioned in the job postings. They're so desperate to get a job and never go through the job postings thoroughly. So, they end up applying for the job positions in a hurry. Never ever do this, especially when you're mailing your resume to a Fortune 500 company.  ", "Read the job postings thoroughly and circle all the key points mentioned. These key points should be there in your resume because that's what your employer actually needs. For example, if a job posting mentions key points such as, must know MS excel and should have excellent communication skills, then you should highlight these points if you master those skills.       "
    ],
  },
  {
    image: img4,
    head: "Prioritise the important information first     ",
    desc: [
      " Since the attention span of the employers is very short, you need to mention the important points first before mentioning any other information. Try to put your work experience, relevant skills and achievements related to the job position you're applying for on the top of your first page. You can always mention your other achievements and volunteer work later or at the bottom. But remember to highlight the most relevant information first.      ", "Bonus tip: Make use of power words such as achieved, accomplished, earned, completed, designed, established, and improved to highlight your achievements and work experience. If you've completed any project at your previous organization or even your college, try to mention the result as well. Highlight the results or work experience in actual numbers to increase the effectiveness of your work. Show your employer how you can make a difference with your skills and experience.       "
    ],
  },
  {
    image: img5,
    head: "Proofread and edit     ",
    desc: [
      "Always, always proofread and edit your resume before you send it out. Never use the same resume or format for every job position. You need to proofread and edit the resume according to the requirements of the new job position. So, never submit the same stuff everywhere. Don't make your employer feel that you're not serious about your job.       ",
    ],
  },
  {
    image: img6,
    head: "Optimize your resume     ",
    desc: [
      "You need to make sure that you give crisp answers, without beating around the bush. Some people try to answer even if they don’t have any clue regarding what they’ve been asked about. It’s better to be honest and admit clearly if you don’t know the answer, in a polite and professional manner. But do express your interest in knowing the answer and your passion to learn more ",
      "Stay positive, believe in yourself, and follow all these 5 tips to crack any job interview. ",
    ],
  },
];

const DetailResource3 = () => {
    return (
        <>
          <Header />
          <div className="detailResourceFirst">
            <img src={img} alt="" />
            <h1 style={{marginTop :'20px'}}>5 Tips for an impressive Resume or CV  </h1>
            <p style={{fontSize : '1.4rem' , marginTop : '20px'}}>A resume is the first thing your employer sees before even hiring you. You need to make sure that your resume stands out from the rest. It's absolutely crucial to make your resume impressive for that first impression. It's always good to refer to a few templates or sample resumes online but make sure that you don't copy them exactly. You need to design your resume according to the job role/title you're applying for. So, never copy any template exactly the way it is. Read the following 5 tips for an impressive resume. </p>
          </div>
    
    
          {data.map((i, index) => (
            <div className="detailResourceSecond" key={index}>
              <p className="head"> {i.head} </p>
              <img src={i.image} alt="" />
              {i.desc.map((a, index) => (
                <p className="desc" key={index}>
                  {a}
                </p>
              ))}
            </div>
          ))}
        </>
      );
    };

export default DetailResource3