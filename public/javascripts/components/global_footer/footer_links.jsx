import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => (
  <div className="footer-links">
    <ul>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/careers">
          Careers
        </Link>
      </li>
      <li>
        <Link to="/terms">
          Terms
        </Link>
      </li>
      <li>
        <Link to="/privacy">
          Privacy
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/press-kit">
          Press Kit
        </Link>
      </li>
      <li>
        <Link to="/shop">
          Shop ExP
        </Link>
      </li>
      <li>
        <Link to="/affiliates">
          Affiliate Program
        </Link>
      </li>
    </ul>
  </div>
);

export default FooterLinks;
