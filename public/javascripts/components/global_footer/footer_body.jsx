import React from "react";

import FooterLinks from "./footer_links.jsx";
import SocialMediaLinks from "./social_media_links.jsx";

const FooterBody = () => (
  <div className="footer-body">
    <a href="/" className="home-link">
      <i className="icon-home"></i>
      ExP
    </a>
    <FooterLinks />
    <SocialMediaLinks />
  </div>
);

export default FooterBody;
