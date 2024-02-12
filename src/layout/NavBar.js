import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" template clear ">
      <div className="header-left">
        <h2>journey</h2>
      </div>

      <Link to="/" className="nav-link" id="active">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/tour" className="nav-link">
        Tour
      </Link>
      <Link to="/gallery" className="nav-link">
        Gallery
      </Link>
      <Link to="/faq" className="nav-link">
        FAQ
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/more" className="nav-link">
        More
      </Link>
    </nav>
  );
};

export default NavBar;
