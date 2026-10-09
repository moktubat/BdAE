import useTitle from "../../../../hook/useTitle";
import About from "../About/About";
import Exhibitor from "../Exhibitor/Exhibitor";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Objectives from "../Objectives/Objectives";
import Organized from "../Organized/Organized";
import Register from "../Register/Register";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Hero />

      <hr className="md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

      <Experience />

      <hr className="md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

      <About />

      <hr className="md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

      <Objectives />

      <hr className="md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

      <Organized />

      <hr className="md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

      <Exhibitor />

      <hr className="md:w-[1200px] mx-auto border-0 h-[1px] bg-[#808080]" />

      <Register />
    </div>
  );
};

export default Home;