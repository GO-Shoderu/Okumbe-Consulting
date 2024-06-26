import React from "react";
import data from "../../../../assets/static_data/about.json";
import aboutImageOkumbe from "../../../../assets/image/pexels-thisisengineering-3862377.jpg";
import "./AboutContent.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  const aboutOkumbeConsulting = data["aboutOkumbeConsulting"];

  const sections = Object.entries(aboutOkumbeConsulting).map(([key, value]) =>
    key === "values" ? (
      <div
        key={key}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h2 className="text-primary text-capitalize">{key}</h2>
        <p>
          At Okumbe Consulting, our values form the foundation of everything we
          do. We uphold the highest standards of <b> Professionalism </b> in our
          interactions with clients and colleagues, ensuring that every project
          is approached with diligence and expertise. <b> Integrity </b> is at
          the core of our business, guiding us to always act ethically and
          transparently in all our endeavors. <b> Confidentiality </b> is
          paramount, as we prioritize safeguarding sensitive information and
          maintaining the trust of our clients. We embrace <b> Innovation </b>,
          continuously seeking creative solutions to challenges and striving for
          excellence in all aspects of our work. <b> Collaboration </b> is key
          to our success, as we foster strong partnerships with clients and
          stakeholders to achieve shared goals. Finally, <b> Fairness </b> is
          ingrained in our culture, as we promote equality, respect, and justice
          in every aspect of our operations.
        </p>
      </div>
    ) : (
      <div
        key={key}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h2 className="text-primary text-capitalize">{key}</h2>
        <p>{value}</p>
      </div>
    )
  );

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      const width = window.innerWidth;
      const dataAos = width < 1200 ? "fade-up" : "fade-left";

      document.getElementById("aboutOkumDiv").setAttribute("data-aos", dataAos);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container-fluid py-3 mt-3">
      {/* <h2
        className="text-primary text-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        WHO WE ARE
      </h2> */}
      <div className="row mt-5">
        <div
          className="col d-none d-xl-flex justify-content-center px-5 image-container"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <img
            src={aboutImageOkumbe}
            alt="About"
            className="rounded cropped-image"
          />
        </div>
        <div
          className="col px-5 text-center text-xl-start h-100"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          id="aboutOkumDiv"
        >
          {sections}
          <br />
          <div
            className="text-center text-xl-start"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <Link to="/teams" className="btn btn-primary ">
              Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
