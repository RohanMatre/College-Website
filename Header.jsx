import React from "react";

function Header() {
  return <header>
  <nav>
  <input type="checkbox" id="check"></input>
  <label for="check" className="checkbtn">
    <i className="fas fa-bars"></i>
  </label>

    <label class= "logo">
        <a href="/"> 
        <img src="images/PDEU.png" alt="pdeu gandhinagar"></img>
        </a>
    </label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">Department</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Faculty</a></li>
        <li><a href="#">Contact us</a></li>
    </ul>  
    </nav>
  </header>
}

export default Header;
