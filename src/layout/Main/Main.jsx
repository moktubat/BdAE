import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Shared/Navbar/Navbar";
import Footer from "../../pages/Home/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="md:w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;