import {useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../Images/logo.png";

const Navbar = () => {
  const location = useLocation();
   const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  // Function to collapse menu after click (for mobile)
  const handleNavClick = () => {
    const navbar = document.getElementById("navbarNavDropdown");
    if (navbar.classList.contains("show")) {
      new window.bootstrap.Collapse(navbar, {
        toggle: true,
      });
    }
  };

  // Check if current path is under "Services" or any sub-service path
  const isServicePath = [
    "/services",
    "/web-development",
    "/app-development",
    "/ui-ux-design",
    "/software-development",
    "/digital-marketing",
    "/ecommerce-development",
    "/desktop-apps",
  ].includes(location.pathname);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/work", label: "Work" },
    { to: "/blogs", label: "Blogs" },
    { to: "/about", label: "About Us" },
    { to: "/career", label: "Career" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="bg-white sticky-top shadow-sm">
      <nav
        className="navbar navbar-expand-lg w-100 px-3 py-2 mx-auto"
        style={{ maxWidth: "1840px" }}
      >
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Agariss IT Logo" style={{ height: "120px" }} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100 justify-content-around fs-4 text-center">
            {navItems.map((item, index) => {
              const isActive =
                item.to === "/services"
                  ? isServicePath // make "Services" tab active for all related routes
                  : location.pathname === item.to;

              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.to}
                    onClick={handleNavClick}
                    className={`nav-link fw-semibold ${
                      isActive ? "text-highlight fw-bold" : "text-dark"
                    }`}
                    style={isActive ? { color: "#B88338" } : { color: "#333" }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
