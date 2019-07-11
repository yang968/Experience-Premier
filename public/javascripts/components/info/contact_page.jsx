import React from "react";

const ContactPage = () => (
  <div className="contact-page-container">
    <ul className="team-list animated slideInLeft">
      <li className="team-member">
        <img
          src={require("../../../images/victor-pro-pic.jpg")}
          alt="Victor Yang"
          className="profile-pic"
        />
        <section>
          <h3>Victor Yang</h3>
          <div className="logo-div animated fadeIn">
            <a
              className="github"
              href="https://github.com/yang968"
              target="_blank"
            >
              <img
                className="github-image"
                src={require("../../../images/github-logo.png")}
              />
            </a>
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/yang53/"
              target="_blank"
            >
              <img
                className="linkedin-image"
                src={require("../../../images/linkedin-logo.png")}
              />
            </a>
          </div>
        </section>
      </li>
      <li className="team-member">
        <img
          src={require("../../../images/nick-pro-pic.jpg")}
          alt="Nick Matison"
          className="profile-pic"
        />
        <section>
          <h3>Nick Matison</h3>
          <div className="logo-div animated fadeIn">
            <a
              className="github"
              href="https://github.com/nmatison"
              target="_blank"
            >
              <img
                className="github-image"
                src={require("../../../images/github-logo.png")}
              />
            </a>
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/nicholas-matison-066359108/"
              target="_blank"
            >
              <img
                className="linkedin-image"
                src={require("../../../images/linkedin-logo.png")}
              />
            </a>
          </div>
        </section>
      </li>
      <li className="team-member">
        <img
          src={require("../../../images/mark-pro-pic.jpg")}
          alt="Mark Lee"
          className="profile-pic"
        />
        <section>
          <h3>Mark Lee</h3>
          <div className="logo-div animated fadeIn">
            <a
              className="github"
              href="https://github.com/marklee9"
              target="_blank"
            >
              <img
                className="github-image"
                src={require("../../../images/github-logo.png")}
              />
            </a>
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/m-arklee/"
              target="_blank"
            >
              <img
                className="linkedin-image"
                src={require("../../../images/linkedin-logo.png")}
              />
            </a>
          </div>
        </section>
      </li>
      <li className="team-member">
        <img
          src={require("../../../images/jordan-pro-pic.jpg")}
          alt="Jordan Yu"
          className="profile-pic"
        />
        <section>
          <h3>Jordan Yu</h3>
          <div className="logo-div animated fadeIn">
            <a
              className="github"
              href="https://github.com/JordanYu4"
              target="_blank"
            >
              <img
                className="github-image"
                src={require("../../../images/github-logo.png")}
              />
            </a>
            <a
              className="linked-in"
              href="https://www.linkedin.com/in/jordan-yu-a7119b80/"
              target="_blank"
            >
              <img
                className="linkedin-image"
                src={require("../../../images/linkedin-logo.png")}
              />
            </a>
          </div>
        </section>
      </li>
    </ul>
  </div>
);

export default ContactPage;
