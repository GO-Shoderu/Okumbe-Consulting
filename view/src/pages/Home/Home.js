import Footer from "../constant/Footer/Footer";
import Nav from "../constant/Nav/Nav";
import Scroll from "../constant/scroll/Scroll";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Project from "./sections/Project/Project";
import Service from "./sections/Service/Service";
import Team from "./sections/Team/Team";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Project />
      <Team />
      <Contact />
      <Scroll />
      <Footer />
    </div>
  );
};

export default Home;
