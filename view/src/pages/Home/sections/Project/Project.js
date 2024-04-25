import data from "../../../../assets/static_data/projects.json";
import img_1 from "../../../../assets/image/pexels-pixabay-273250.jpg";
import img_2 from "../../../../assets/image/pexels-pixabay-415980.jpg";
import img_3 from "../../../../assets/image/pexels-expect-best-323780.jpg";

import "./Project.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const getRandomValue = () => (Math.random() < 0.5 ? 500 : 800);

  const numOfProjects = 3;

  return (
    <div className="container py-3 mt-4 bg-light">
      <h2
        className="text-primary text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
      >
        FEATURED PROJECTS
      </h2>
      <div className="row justify-content-center">
        {data.projects.slice(0, numOfProjects).map((project, iter) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4 mt-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={getRandomValue().toString()}
            key={project.name}
          >
            <div className="card  h-100 d-flex flex-column bg-body-secondary">
              {iter === 0 && (
                <img
                  src={img_1}
                  className="card-img-top"
                  alt={project.name + " image"}
                />
              )}
              {iter === 1 && (
                <img
                  src={img_2}
                  className="card-img-top"
                  alt={project.name + " image"}
                />
              )}
              {iter === 2 && (
                <img
                  src={img_3}
                  className="card-img-top"
                  alt={project.name + " image"}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-primary text-uppercase">
                  {project.name}
                </h6>
                <p className="card-text flex-grow-1">{project.address}</p>
                <p className="card-text flex-grow-1">{project.country}</p>
                {/* <div className="text-center text-sm-start">
                  <a href="./" className="btn btn-primary ">
                    Read More
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <Link to="/project" className="btn btn-primary ">
          More
        </Link>
      </div>
    </div>
  );
};

export default Project;
