import React from "react";
import { Link } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi I'm
          <span>Abhishek Singh</span>
        </h1>
        <p className="h-sub-text">
          I would like to be a part of an organization where we can satisfy each
          other and I could use and enhance my knowledge to pursue a highly
          rewarding career, seeking for a job in a challenging and healthy work
          environment where I can utilize my skills and talent for the
          development & success of both the organization and myself.
        </p>
        <p className="h-sub-text">
          I'm a goal-oriented Web Developer with strong commitment to
          collaboration and solutions-oriented problem-solving. Successful at
          maintaining customer satisfaction through effective customer support.
        </p>
        <div className="icons">
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
            </Link>
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
            </Link>
            <Link to="test" className="icon-holder">
              <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
            </Link>
        </div>
      </header>
    </div>
  );
}
