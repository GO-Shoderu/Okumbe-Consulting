import "./Team.css";
import teamImage from "../../../../assets/image/pexels-pixabay-416405.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Team = () => {
  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      const width = window.innerWidth;
      const dataAos = width < 1200 ? "fade-up" : "fade-left"; // Example breakpoint at 992px

      document.getElementById("teamDiv").setAttribute("data-aos", dataAos);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
            src={teamImage}
            alt="Team"
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
          id="teamDiv"
        >
          <div className="card bg-light">
            <div className="card-body text-center text-xl-start">
              <h2 className="card-title text-primary">OUR TEAM</h2>
              <br />
              <p className="card-text">
                At Okumbe Consulting, we are proud to have a dedicated team of
                professionals who are committed to delivering exceptional
                service and expertise to our clients. Our team members bring a
                wealth of experience and qualifications to every project,
                ensuring that we meet and exceed our clients' expectations. Get
                to know the individuals who make up our dynamic team
              </p>
              <br />
              <div
                className="text-center text-xl-start"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <Link to="/teams" className="btn btn-primary ">
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

export default Team;
