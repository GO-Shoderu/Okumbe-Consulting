import "./About.css";
import aboutImage from "../../../../assets/image/pexels-pixabay-273250.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      const width = window.innerWidth;
      const dataAos = width < 1200 ? "fade-up" : "fade-left"; // Example breakpoint at 992px

      document.getElementById("aboutDiv").setAttribute("data-aos", dataAos);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container py-3 mt-5">
      <h2 className="text-primary text-center">ABOUT US</h2>
      <div className="row mt-5">
        <div
          className="col d-none d-xl-flex justify-content-center px-5"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <img
            src={aboutImage}
            alt="About"
            width={580}
            height={387}
            className="rounded"
          />
        </div>
        <div
          className="col"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          id="aboutDiv"
        >
          <div className="card bg-light">
            <div className="card-body text-center text-xl-start">
              <h5 className="card-title text-primary">WHO WE ARE</h5>
              <br />
              <p className="card-text">
                Okumbe Consulting (Pty) Ltd is a trusted provider of cost
                consulting services, specializing in quantity surveying and
                project management. Established in 2015 to address the growing
                demand for chartered licensed quantity surveying services, we
                have since built a reputation for excellence and reliability.
              </p>
              <p className="card-text">
                Driven by a passion for excellence and a commitment to
                delivering unparalleled service, Okumbe Consulting has earned a
                reputation for reliability, accuracy, and innovation. Over the
                years, we have successfully completed numerous projects, ranging
                from small-scale renovations to large-scale infrastructure
                developments, earning the trust and loyalty of our clients.
              </p>
              <br />
              <div
                className="text-center text-xl-start"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <Link to="/about" className="btn btn-primary ">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
