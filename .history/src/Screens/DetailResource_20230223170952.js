/** @format */

import React from "react";
import Header from "../Header/Header";
import img from "../images/103.png";
import img2 from "../images/102.png";
import img3 from '../images/104.png'
import img4 from '../images/101.png'
import img5 from '../'

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
    image: img3,
    head: "2. MACHINE LEARNING",
    desc: [
      "Machine learning is the science of getting computers to act without being explicitly programmed. It’s used by chatbots, voice assistants, personalized marketing, self-driving cars, fraud detection, healthcare, process automation and transport optimization. Isn’t that a huge network?",
      "Machine learning makes the computer more similar to humans. It’s being used to develop business decisions, forecast weather, detect diseases, and increase productivity. Some of the applications of Machine Learning include Web Search Engine, Photo tagging applications, and spam detector. Search engines like Google and Bing are working so well, because the system has learnt how to rank pages with the help of a complex learning algorithm. ",
    ],
  },
  {
    image: img4,
    head: "3.	UI PATH",
    desc: [
      " UI Path develops a platform for robotic process automation, and has been contributing a lot to the digital world. It has helped companies adopt the digital strategies faster, and improve the way employees work through the power of automation.",
      "Robotic Process Automation offers a lot of benefits like improved efficiency, cost reduction, and greater accuracy. RPA is being used by almost all the industries. The IT professionals depend on RPA to monitor network devices and deploy applications. RPA is used in the Finance and Accounting department to streamline data entry time, and eliminate human errors. It helps simplify the workflow for the sales teams and Business process outsources (BPO). UI Path offers user-friendly software for content migration, web scraping, process automation, GUI testing, and many others. ",
    ],
  },
  {
    image: img2,
    head: "4.	AWS",
    desc: [
      "AWS has customers from more than 190 countries, out of which around 5000 are education institutions, 2000 are government agencies and 17500 are non-profit organizations. Millions of customers use AWS to run their applications, ranging from fastest-growing startups to the largest companies in the world like Reddit, Expedia, Netflix and NSA. Also, 31% of cloud infrastructure as a service of the market is owned by AWS. AWS offers a wide range of services, right from infrastructure technologies like compute and storage to emerging technologies like machine learning and artificial intelligence.     ",
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
