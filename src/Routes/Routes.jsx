import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home/Home";
import Register from "../pages/Register/Register/Register";
import Email from "../pages/Email/Email";
import About from "../pages/About/About";
import Agenda from "../pages/Agenda/Agenda";
import Speakers from "../pages/Speakers/Speakers";
import Exhibitors from "../pages/Exhibitors/Exhibitors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/agenda",
        element: <Agenda></Agenda>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/speakers",
        element: <Speakers></Speakers>,
      },
      {
        path: "/exhibitors",
        element: <Exhibitors></Exhibitors>,
      },
      {
        path: "/email",
        element: <Email></Email>,
      },
    ],
  },
]);
