import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => (
  <div className="footer-links-container">
    <ul className="footer-links">
      <li>
        <a href="https://github.com/yang968/ExP">About</a>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
      <li>
        <Link to="/terms">Terms</Link>
      </li>
      <li>
        <Link to="/privacy">Privacy</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {/* <li>
        <Link to="/blog">
          Blog
        </Link>
      </li> */}
    </ul>
  </div>
);

export default FooterLinks;
