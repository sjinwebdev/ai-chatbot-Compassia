import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "AI Chatbots",
    text: "COMPASSIA incorporates AI chatbots that offer efficient, round-the-clock customer support.",
  },
  {
    title: "Knowledge Integration",
    text: "Seamlessly integrate knowledgebases into your website with COMPASSIA's powerful tools.",
  },
  {
    title: "Educational Assistance",
    text: "COMPASSIA provides educational assistance, enhancing the learning experience for students.",
  },
  {
    title: "Conversational UX",
    text: "Achieve a superior conversational UX with COMPASSIA's natural language processing.",
  },
];
const Features = () => {
  return (
    <div id="features" className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
