import React from "react";
import Title from "../Components/Title";
import Category from "../Components/Category";
import Menuitems from "../Components/Menuitems";
import port from "../img/port1.jpg";
function PortfolioPage() {
  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolio"} span={"Portfolios"} />
      </div>
      <Category />
      <Menuitems
        menuItems={[
          {
            img: port,
            link1: "www.youtube.com",
            link2: "www.google.com",
            title: "Portfolio 1",
            icon1: "G",
            icon2: "Y",
          },
          {
            img: port,
            link1: "www.youtube.com",
            link2: "www.google.com",
            title: "Portfolio 1",
            icon1: "G",
            icon2: "Y",
          },
        ]}
      />
    </div>
  );
}

export default PortfolioPage;
