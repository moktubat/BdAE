import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home/Home";
import Register from "../pages/Register/Register/Register";
import Email from "../pages/Email/Email";
import About from "../pages/About/About";

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/email",
        element: <Email></Email>,
      }
    ],
  },
]);
