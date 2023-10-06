import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility_3.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Unlocking the full potential of AI chatbots goes beyond mere
          expectations; it's about creating intelligent companions capable of
          understanding, assisting, and delighting users in ways previously
          unimagined. Our AI chatbot endeavors to redefine possibilities,
          offering seamless interactions and personalized experiences that leave
          users astonished by its capabilities.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
