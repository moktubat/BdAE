import logo from "../../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    <>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "navActive" : "navDefault")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/agenda"
          className={({ isActive }) => (isActive ? "navActive" : "navDefault")}
        >
          Agenda
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/speakers"
          className={({ isActive }) => (isActive ? "navActive" : "navDefault")}
        >
          Speakers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "navActive border border-[#231F20] rounded-lg px-9 py-4" : "navDefault border border-[#231F20] rounded-lg px-9 py-4")}
        >
          Register
        </NavLink>
      </li>
    </>,
  ];
  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-12 px-4 md:px-0">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src={logo} className="w-[168px] h-12" alt="logo" />
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">{navLinks}</ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <TfiMenuAlt className="w-8 text-[#A81F25]" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border-2 border-[#A81F25]  rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img src={logo} className="w-[168px] h-12" alt="logo" />
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaXmark className="w-5 text-[#A81F25]" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">{navLinks}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
