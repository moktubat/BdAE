import About from "../About/About";
import Exhibitor from "../Exhibitor/Exhibitor";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Objectives from "../Objectives/Objectives";
import Organized from "../Organized/Organized";
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Experience></Experience>
            <About></About>
            <Objectives></Objectives>
            <Organized></Organized>
            <Exhibitor></Exhibitor>
        </div>
    );
};

export default Home;