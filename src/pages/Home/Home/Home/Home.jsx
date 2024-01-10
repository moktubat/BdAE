import About from "../About/About";
import Exhibitor from "../Exhibitor/Exhibitor";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Objectives from "../Objectives/Objectives";
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Experience></Experience>
            <About></About>
            <Objectives></Objectives>
            <Exhibitor></Exhibitor>
        </div>
    );
};

export default Home;