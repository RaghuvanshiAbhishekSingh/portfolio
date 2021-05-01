import React from "react";
// import about from "../img/about.JPG";
function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        {/* <img src={about} alt="" /> */}
      </div>
      <div className="about-info">
        <h4>
          I am <span>Abhishek Singh</span>
        </h4>
        <p className="about-text">
          I'm a Senior software developer with Frontend dev skill set.
        </p>
        <div className="details">
          <div className="details-left">
            <p>Name</p>
            <p>DOB</p>
            <p>Tech Stack </p>
            <p>Total work Experience</p>
          </div>
          <div className="details-right">
            <p>: Abhishek Singh</p>
            <p>: 08-09-1995</p>
            <p>: React, Javascript, Jquery, Html, CSS, PHP</p>
            <p>: 4.10</p>
          </div>
        </div>
          <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
