import React from "react";
import PropTypes from "prop-types";
import MyFunctionComponent from "./MyFunctionComponent";
import MyClassComponent from "./MyClassComponent";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

export default function Navbar(props) {
  const navigate = useNavigate();
  const { userDetails } = useUser();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container-fluid">
          <button
            className="btn btn-warning"
            type="submit"
            onClick={handleLogin}
          >
            Back
          </button>
          <div>
            <h6>Welcome back {userDetails.name} &nbsp;</h6>
          </div>

          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.tab}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Dashboard />
      <MyFunctionComponent />
      <MyClassComponent />
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  tab: PropTypes.string,
};

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     tab: PropTypes.string.isRequired,
//   };

// Navbar.defaultProps = {
//   title: "Add Title Here",
//   tab: "Add Tab name",
// };
