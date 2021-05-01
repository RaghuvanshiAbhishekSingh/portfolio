import React from "react";

function ContactItem({ icon, description, text1 }) {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-container">
          <h6>{description}</h6>
          <p>{text1}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
