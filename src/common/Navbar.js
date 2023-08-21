import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Dashboard/AuthContext";

const Navbar = () => {
  const { authenticated, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Travel App
      </Link>
      <ul className="navbar-nav ml-auto">
        {authenticated ? (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/add-destination">
                Add Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleSignOut}>
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
