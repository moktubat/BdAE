import logo from "../../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaXmark } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    }
  }, [isMenuOpen]);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium text-base leading-none transition-colors duration-200 ${isActive ? "text-[#A81F25]" : "text-[#231F20] hover:text-[#A81F25]"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/agenda"
          className={({ isActive }) =>
            `font-medium text-base leading-none transition-colors duration-200 ${isActive ? "text-[#A81F25]" : "text-[#231F20] hover:text-[#A81F25]"
            }`
          }
        >
          Agenda
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/speakers"
          className={({ isActive }) =>
            `font-medium text-base leading-none transition-colors duration-200 ${isActive ? "text-[#A81F25]" : "text-[#231F20] hover:text-[#A81F25]"
            }`
          }
        >
          Speakers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exhibitors"
          className={({ isActive }) =>
            `font-medium text-base leading-none transition-colors duration-200 ${isActive ? "text-[#A81F25]" : "text-[#231F20] hover:text-[#A81F25]"
            }`
          }
        >
          Exhibitors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `font-semibold text-base leading-none px-9 py-[18px] rounded-lg border transition-all duration-200 ${isActive
              ? "bg-[#A81F25] text-white border-[#A81F25]"
              : "bg-white text-[#231F20] border-[#231F20] hover:bg-[#A81F25] hover:border-[#A81F25] hover:text-white"
            }`
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="md:w-[1200px] mx-auto py-4 md:py-8 px-4 md:px-0">
      <div className="font-inter relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src={logo} className="w-[168px] h-[48px]" alt="logo" />
        </Link>

        {/* Nav Items Section (Large Devices) */}
        <ul className="items-center hidden space-x-8 lg:flex">{navLinks}</ul>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
            className="z-20 relative"
          >
            <TfiMenuAlt className="w-8 text-[#A81F25]" />
          </button>

          {/* Mobile Menu (Animated via GSAP) */}
          <div
            ref={mobileMenuRef}
            className={`absolute top-full left-0 w-full z-10 mt-2 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
            style={{ opacity: 0, transform: "translateY(-20px)" }}
          >
            <div className="p-5 bg-white border-2 border-[#A81F25] rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <img src={logo} className="w-[168px] h-[48px]" alt="logo" />
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;