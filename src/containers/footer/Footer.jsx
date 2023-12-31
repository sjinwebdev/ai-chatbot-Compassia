import React from "react";
import "./footer.css";
import compassia from "../../assets/compassia.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={compassia} alt="Compassia logo" />
          <p>SJ, India, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>India, Punjab</p>
          <p>0123-456789</p>
          <p>myemail@.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2023 COMPASSIA. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
