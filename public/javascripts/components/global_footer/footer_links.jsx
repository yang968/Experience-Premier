import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => (
  <div className="footer-links-container">
    <ul className="footer-links">
      <li>
        <a href="https://github.com/yang968/ExP">Github</a>
      </li>
      <li>
        <Link to="">Careers</Link>
      </li>
      <li>
        <Link to="">Terms</Link>
      </li>
      <li>
        <Link to="">Privacy</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>
    </ul>
  </div>
);

export default FooterLinks;
