
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Function for displaying the error page with the error message
 * @returns {JS} - the error message
 */

const Error = () => {
  return (
    <div className="error-message">
      <h2>Sorry, the page you are looking doesn't exist</h2>
      <NavLink to={"/"} className="button-text">
        <p>go back to the home page</p>
      </NavLink>
    </div>
  );
};

export default Error;
