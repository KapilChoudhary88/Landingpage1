import React from "react";
import logo from "../images/logo1.png";


function Navbar() {
  return (
    
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt = "logo" />
      </a>

      <input className = 'menu-btn' type ='checkbox' id='menu-btn'/>
      <label classsName = 'menu-icon' for='menu-btn'>
        <span className ='nav-icon'></span>

      </label>
      
    <ul>
        <li><a href ='#'>Home</a></li>
        <li><a href ='#'>About</a></li>
        <li><a href ='#'>Industry</a></li>
        <li><a href ='#'>Contact</a></li>
    </ul>
    
<a href = "#" className='RightCorner'>RightCorner</a>
    </nav>
    
  );
}

export default Navbar;
