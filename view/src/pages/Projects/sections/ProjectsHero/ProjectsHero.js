import "./ProjectsHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectsHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="projectsHero">
      <div className="projectsHero-overlay"></div>
      <div className="container projectsHero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 data-aos="fade-right" data-aos-duration="3000">
            Our Featured Projects
          </h1>
          <p
            className="lead"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Showcasing Our Success Stories: Completed Projects <br />
            That Define Excellence in Construction
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
