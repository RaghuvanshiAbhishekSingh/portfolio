import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import Skills from "../Components/Skills";
import ServiceSection from "../Components/ServiceSection";
import design from "../img/design.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skills-container">
        <Skills skill={"JavaScript"} progress={"85%"} />
        <Skills skill={"React"} progress={"70%"} />
        <Skills skill={"Jquery"} progress={"80%"} />
        <Skills skill={"Html"} progress={"60%"} />
        <Skills skill={"CSS"} progress={"50%"} />
        <Skills skill={"GIT"} progress={"80%"} />
      </div>
      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServiceSection image={design} text={"I'm a good weeb designer with a fair knowledge of Html and CSS"} title={"Web design"}/>
        <ServiceSection image={design} text={"I'm a good weeb designer with a fair knowledge of Html and CSS"} title={"Web design"}/>
        <ServiceSection image={design} text={"I'm a good weeb designer with a fair knowledge of Html and CSS"} title={"Web design"}/>
        <ServiceSection image={design} text={"I'm a good weeb designer with a fair knowledge of Html and CSS"} title={"Web design"}/>
      </div>
    </div>
  );
}

export default AboutPage;
