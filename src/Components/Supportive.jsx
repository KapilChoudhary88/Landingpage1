import React from "react";
import Supportivebox from "./Supportivebox";
import supportiveimage1 from "../images/download1.png";
import supportiveimage2 from "../images/download2.png";
import supportiveimage3 from "../images/download4.png";

function Supportive() {
  return (
    <div className="supportive">
      <div className="a-heading">
        <h1>Our Product</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          placeat?
        </p>
      </div>
      <div className="b-container">
        <Supportivebox image={supportiveimage1} name="AI/ML" />
        <Supportivebox image={supportiveimage2} name="App Development" />
        <Supportivebox image={supportiveimage3} name="Web Development" />
      </div>
    </div>
  );
}

export default Supportive;
