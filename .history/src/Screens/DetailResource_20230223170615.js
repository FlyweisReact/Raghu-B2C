/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/103.png";
import img2 from "../images/102.png";

const data = [
  {
    image: img2,
    head: "1. ARTIFICIAL INTELLIGENCE",
    desc: [
      "Any human-like intelligence exhibited by a computer, robot, or any other machine, is referred to as Artificial intelligence or AI. Artificial intelligence is everywhere, and the most common applications of AI include Natural Language Processing (NLP), Image recognition, Real-time recommendations, speech recognition, virus and spam prevention, ride-share services, autopilot technology, and household robots.",
      "AI jobs have enormously increased in recent years. It’s a great option to learn AI to boost your career and get a high-paying job.",
    ],
  },
  {
    image: img2,
    head: "2. MACHINE LEARNING",
    desc: [
      "Any human-like intelligence exhibited by a computer, robot, or any other machine, is referred to as Artificial intelligence or AI. Artificial intelligence is everywhere, and the most common applications of AI include Natural Language Processing (NLP), Image recognition, Real-time recommendations, speech recognition, virus and spam prevention, ride-share services, autopilot technology, and household robots.",
      "AI jobs have enormously increased in recent years. It’s a great option to learn AI to boost your career and get a high-paying job.",
    ],
  },
  {
    image: img2,
    head: "3.	UI PATH",
    desc: [
      "Any human-like intelligence exhibited by a computer, robot, or any other machine, is referred to as Artificial intelligence or AI. Artificial intelligence is everywhere, and the most common applications of AI include Natural Language Processing (NLP), Image recognition, Real-time recommendations, speech recognition, virus and spam prevention, ride-share services, autopilot technology, and household robots.",
      "AI jobs have enormously increased in recent years. It’s a great option to learn AI to boost your career and get a high-paying job.",
    ],
  },
  {
    image: img2,
    head: "4.	AWS",
    desc: [
      "AWS has customers from more than 190 countries, out of which around 5000 are education institutions, 2000 are government agencies and 17500 are non-profit organizations. Millions of customers use AWS to run their applications, ranging from fastest-growing startups to the largest companies in the world like Reddit, Expedia, Netflix and NSA. Also, 31% of cloud infrastructure as a service of the market is owned by AWS. AWS offers a wide range of services, right from infrastructure technologies like compute and storage to emerging technologies like machine learning and artificial intelligence. ",
      "AWS offers over 200 fully-featured services, and is also the only cloud provider that offers the highest number of services and respective features.",
    ],
  },
  {
    image: img2,
    head: "5.	SALESFORCE DEVELOPER",
    desc: [
      "Salesforce is an American cloud computing company, known for Customer Relationship Management (CRM). It is used to manage the customer interactions, and its products are used for administrator, consulting, and development. Salesforce has a lot of important applications like financial services cloud, health cloud, sales cloud, App cloud, service cloud, Force.com, chatter, commerce cloud, and marketing cloud. ",
      "Most of the Fortune 500 companies look for salesforce professionals to increase their Return-On-Investment or ROI. Salesforce developers are in huge demand everywhere, especially in the IT industry. Salesforce experts are paid very high, as they help the companies maintain a good relationship with the customers, market their products/services, and generate revenue. "
    ],
  },
];

const DetailResource = () => {
  return (
    <>
      <Header />
      <div className="detailResourceFirst">
        <img src={img} alt="" />
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

export default DetailResource;
