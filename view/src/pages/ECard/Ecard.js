import React from "react";
import eCard from "../../assets/eCard/eCard.jpg";
import "./Ecard.css";

const Ecard = () => {
  return (
    <div className="container">
      <img src={eCard} className="ecard" alt="Electronic Business Card" />
    </div>
  );
};

export default Ecard;
