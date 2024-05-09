import React from "react";
import ASAQS from "../../../assets/banner/animated-logo.gif";
import BIARB from "../../../assets/banner/BIARB_Logo.webp";
import CIOB from "../../../assets/banner/CIOB_DESCRIPTOR_LOCKUP_BLUE_RGB_cakgkf.jpg";
import IBQS from "../../../assets/banner/IBQS-Logo-Final-Logo_2.webp";
import MRICS from "../../../assets/banner/MRICS_logo.png";
import RICS from "../../../assets/banner/Rics-Logo.png";
import SACQSP from "../../../assets/banner/sacqsp.png";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row banner align-items-center justify-content-center mt-md-5 mt-5">
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={ASAQS}
            alt="The Association of South African QS"
            className="img-fluid banner-image banner-img"
          />
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={BIARB}
            alt="Botswana Institute of Arbitrators"
            className="img-fluid banner-image banner-img"
          />
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={CIOB}
            alt="The Chartered Institute of Building"
            className="img-fluid banner-image banner-img"
          />
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={IBQS}
            alt="Institute of Botswana QS"
            className="img-fluid banner-image banner-img"
          />
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={MRICS}
            alt="MRICS"
            className="img-fluid banner-image banner-img"
          />
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={RICS}
            alt="RICS"
            className="img-fluid banner-image banner-img"
          />
        </div>
        <div className="col-3 col-md-1 d-flex justify-content-center">
          <img
            src={SACQSP}
            alt="The SA Counsil For The QS Profession"
            className="img-fluid banner-image banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
