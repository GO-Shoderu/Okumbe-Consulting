import "./About.css";
import aboutImage from "../../../../assets/image/pexels-maarten-van-den-heuvel-4254892.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container py-3 mt-5">
      <div className="row">
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
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="card bg-light">
            <div className="card-body text-center text-xl-start">
              <h2 className="card-title text-primary">ABOUT US</h2>
              <br />
              <p className="card-text">
                Okumbe Consulting (Pty) Ltd is a trusted provider of cost
                consulting services, specializing in quantity surveying and
                project management. Established in 2010 to address the growing
                demand for chartered licensed quantity surveying services, we
                have since built a reputation for excellence and reliability.
              </p>
              <p className="card-text">
                Okumbe Consulting (Pty) Ltd is a trusted provider of cost
                consulting services, specializing in quantity surveying and
                project management. Established in 2010 to address the growing
                demand for chartered licensed quantity surveying services, we
                have since built a reputation for excellence and reliability.
              </p>
              <br />
              <a href="./" className="btn btn-primary">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
