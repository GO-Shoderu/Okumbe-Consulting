import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Project from "./sections/Project/Project";
import Service from "./sections/Service/Service";
import Team from "./sections/Team/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Project />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
