import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai_3.png";
const Header = () => {
  return (
    <div id="home" className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with Compassia AI
        </h1>
        <p>
          Step into a world of heartfelt interactions with Compassia AI an ai
          chatbot, where every conversation is a journey of understanding and
          connection. Our AI companion is here to listen, empathize, and provide
          support like a true friend.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
