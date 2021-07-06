/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter, useHistory, Link } from "react-router-dom";

const NavBar = (props) => {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <div style={{ marginBottom: 40 }}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link className="nav-item nav-link" to="/">
          <a className="navbar-brand" href="#">
            User Forum
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              <Link
                className="nav-item nav-link"
                to={pathname === "/" ? "/users" : "/"}
              >
                {pathname === "/" ? "Users" : "Posts"}
              </Link>
            </a>
          </div>
        </div> */}
      </nav>
    </div>
  );
};

withRouter(NavBar);
export { NavBar };
