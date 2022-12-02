import React from "react";
import aboutimage from "../images/mobileDemo1.webp";

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image" />
      </div>
      <div className="about-text">
        <h2>Store Auditing</h2>
        <p>
           ShelfWise store auditing app is designed to collect all shop
          display data in seconds. Using Image Recognition technology field
          sales force just take photo of store shelves and get complete list of
          all SKUs visible for customers as well as advanced analytics about
          shelf share. You can also create and assign custom tasks to check any
          promotion materials and execute your market
        </p>
        <button>GO TO STORE AUDITING</button>
      </div>
    </div>
  );
}

export default About;
