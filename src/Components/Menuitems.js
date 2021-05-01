import React from "react";

function Menuitems({ menuItems }) {
  return (
    <div className="portfolios">
      {menuItems.map((item) => {
        return (
          <div className="portfolio">
            <div className="image-data">
              <img src={item.img} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Place holder text</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menuitems;
