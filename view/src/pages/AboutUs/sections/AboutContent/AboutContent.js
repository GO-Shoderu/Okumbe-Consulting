import React from "react";
import data from "../../../../assets/static_data/about.json";
import aboutImageOkumbe from "../../../../assets/image/pexels-thisisengineering-3862377.jpg";
import "./AboutContent.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  const { overview, mission, approach, team } = data.aboutOkumbeConsulting;

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      const width = window.innerWidth;
      const dataAos = width < 1200 ? "fade-up" : "fade-left"; // Example breakpoint at 992px

      document.getElementById("aboutOkumDiv").setAttribute("data-aos", dataAos);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container-fluid py-3 mt-3">
      <h2
        className="text-primary text-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        WHO WE ARE
      </h2>
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
          <h2 className="text-primary">Overview</h2>
          <p>{overview}</p>

          <h2 className="text-primary">Mission</h2>
          <p>{mission}</p>

          <h2 className="text-primary">Approach</h2>
          <p>{approach}</p>

          <h2 className="text-primary">Team</h2>
          <p>{team}</p>

          <br />
          <div
            className="text-center text-xl-start"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <Link to="/team" className="btn btn-primary ">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
