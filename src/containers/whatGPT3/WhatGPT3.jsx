import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div id="compassia" className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is COMPASSIA"
          text="COMPASSIA is an advanced AI chatbot solution designed to revolutionize customer support and engagement. Powered by cutting-edge Natural Language Processing and Machine Learning technologies, COMPASSIA offers businesses a seamless way to automate customer interactions."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          <a href="#blog">Explore The Library</a>
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Our AI-powered platform enhances chatbot capabilities, enabling them to deliver personalized and efficient interactions with users."
        />
        <Feature
          title="Knowledgebase"
          text="Our AI-driven solution transforms how you organize, search, and deliver information, ensuring your knowledgebase is a valuable asset for your users."
        />
        <Feature
          title="Education"
          text="Our AI technology enhances learning by providing personalized assistance, answering questions, and facilitating engagement for students and educators alike."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
