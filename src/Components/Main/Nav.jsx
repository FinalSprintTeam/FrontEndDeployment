import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "./images/logo.png";
import Card from "../../UI/Card";

export default function NavBar() {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  const [isNavCollaspsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollaspsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid fs-2">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Our Logo"
            width="80rem"
            height="80rem"
            className="d-inline-block align-text-centre me-4 rounded-1 "
          />

          <h1 className="d-inline">Happy Gilmore Fairway</h1>
        </Link>
        <button
          onClick={handleNavCollapse}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollaspsed ? true : false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            isNavCollaspsed ? `collapse` : ""
          } navbar-collapse justify-content-end`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-4 text-center ">
            <li className="nav-item px-2">
              <NavLink
                className="nav-link clickable h3"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink className="nav-link clickable h3" to="/members">
                Members
              </NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink className="nav-link clickable h3" to="/tournaments">
                Tournaments
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
