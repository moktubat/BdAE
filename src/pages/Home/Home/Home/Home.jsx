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
      <Hero></Hero>
      <Experience></Experience>
      <About></About>
      <Objectives></Objectives>
      <Organized></Organized>
      <Exhibitor></Exhibitor>
      <Register></Register>
    </div>
  );
};

export default Home;
