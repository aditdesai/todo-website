//import React from 'react';
//import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Navbar() { //props passed from parent component to child component

  //while adding from bootstrap, tags with no closing tags should end with /
  //and change class -> className
  //to make optimised web page, use react bootstrap
  
  return (
    <div>
      <div className="collapse" id="navbarToggleExternalContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item mx-3">
            <Link className="nav-link fs-5 text-secondary" to="/">Home</Link>
          </li>

          <li className="nav-item mx-3">
            <Link className="nav-link fs-5 text-secondary" to="/about">About</Link>
          </li>

        </ul>

      </div>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

/*
Navbar.defaultProps = {
  title: "Your title here",
  //searchBar: true
} //default values

Navbar.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired //will never throw error if a default value is set for it
} //just to make it more robust
*/