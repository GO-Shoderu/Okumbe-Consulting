import React from "react";
import eCard from "../../assets/eCard/eCard.jpg";
import eCardPdf from "../../assets/eCard/eCard.pdf";
import "./Ecard.css";

const ECard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-0 pb-0">
          <img
            src={eCard}
            className="ecard rounded-4"
            alt="Electronic Business Card"
          />
        </div>
        <div className="col-12 text-center mt-0 pt-0">
          {" "}
          {/* Adjust mt-3 based on your desired vertical spacing */}
          <div className="btn-group">
            <a
              href={eCardPdf}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary active"
              aria-current="page"
            >
              Download a copy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECard;
