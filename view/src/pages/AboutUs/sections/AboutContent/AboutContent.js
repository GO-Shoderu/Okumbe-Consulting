import React from "react";
// import data from "../../../../assets/static_data/about.json";
import aboutImageOkumbe from "../../../../assets/image/pexels-thisisengineering-3862377.jpg";
import "./AboutContent.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  // const { overview, mission, approach, team } = data.aboutOkumbeConsulting;

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
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="text-primary">Overview</h2>
            <p>
              Okumbe Consulting (Pty) Ltd is a trusted provider of cost
              consulting services, specializing in quantity surveying and
              project management. Established in 2010 by Dr. James Ouko Okumbe,
              a distinguished Fellow Chartered Quantity Surveyor, our company
              was founded to meet the increasing need for professional quantity
              surveying services in the construction industry.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <h2 className="text-primary">Mission</h2>
            <p>
              Driven by a passion for excellence and a commitment to delivering
              unparalleled service, Okumbe Consulting has earned a reputation
              for reliability, accuracy, and innovation. Over the years, we have
              successfully completed numerous projects, ranging from small-scale
              renovations to large-scale infrastructure developments, earning
              the trust and loyalty of our clients.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <h2 className="text-primary">Approach</h2>
            <p>
              At Okumbe Consulting, we understand the complexities of the
              construction industry and the challenges our clients face. That's
              why we take a collaborative approach, working closely with each
              client to understand their unique needs and objectives. From
              estimating and cost advice to project management and dispute
              resolution, we offer a comprehensive suite of services designed to
              streamline the construction process and maximize value for our
              clients.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="text-primary">Team</h2>
            <p>
              Our team consists of highly skilled and experienced professionals,
              including chartered quantity surveyors, project managers, and
              technical experts, who bring a wealth of knowledge and expertise
              to every project. With a commitment to professionalism, integrity,
              and excellence, we strive to exceed our clients' expectations and
              deliver results that stand the test of time.
            </p>
          </div>

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
