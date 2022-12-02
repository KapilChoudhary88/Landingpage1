import React from "react";
// import Navbar from './Navbar';

function Header() {
  return (
    <div className="header">
      {/* <Navbar /> */}
      <div className="intro">
        <p>This is an header area</p>
        <h1>
          <span>DISHA CONTENT</span>
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptatem voluptatibus dolor sapiente, veniam pariatur atque maiores
          provident sint alias quidem similique, blanditiis iure at amet vero
          saepe consectetur ipsa nisi suscipit rerum, deserunt ea aspernatur
          illo? At mollitia quia nostrum, iure iste esse ea eius unde, ullam
          illo eum.
        </p>
        <a href="#" className="header-btn">
          Details
        </a>
      </div>
      <div className="headerImage"></div>
    </div>
  );
}

export default Header;
