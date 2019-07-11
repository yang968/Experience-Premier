import React from "react";

const ContactPage = () => (
  <div className="contact-page-container">
    <ul className="team-list animated slideInLeft">
      <li className="team-member">
        <img src={require("../../../images/victor-pro-pic.jpg")}
          alt="Victor Yang"
          className="profile-pic"
        />
        <section>
          <h3>Victor Yang</h3>
          <div className="logo-div animated fadeIn">
            <a href="https://github.com/yang968"
              className="github"
              target="_blank"
            >
              <img src={require("../../../images/github-logo.png")}
                className="github-image"
              />
            </a>
            <a href="https://www.linkedin.com/in/yang53/"
              className="linked-in"
              target="_blank"
            >
              <img src={require("../../../images/linkedin-logo.png")}
                className="linkedin-image"
              />
            </a>
          </div>
        </section>
      </li>
      <li className="team-member">
        <img src={require("../../../images/nick-pro-pic.jpg")}
          alt="Nick Matison"
          className="profile-pic"
        />
        <section>
          <h3>Nick Matison</h3>
          <div className="logo-div animated fadeIn">
            <a href="https://github.com/nmatison"
              className="github"
              target="_blank"
            >
              <img src={require("../../../images/github-logo.png")}
                className="github-image"
              />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-matison-066359108/"
              className="linked-in"
              target="_blank"
            >
              <img src={require("../../../images/linkedin-logo.png")}
                className="linkedin-image"
              />
            </a>
          </div>
        </section>
      </li>
      <li className="team-member">
        <img src={require("../../../images/mark-pro-pic.jpg")}
          alt="Mark Lee"
          className="profile-pic"
        />
        <section>
          <h3>Mark Lee</h3>
          <div className="logo-div animated fadeIn">
            <a href="https://github.com/marklee9"
              className="github"
              target="_blank"
            >
              <img src={require("../../../images/github-logo.png")}
                className="github-image"
              />
            </a>
            <a href="https://www.linkedin.com/in/m-arklee/"
              className="linked-in"
              target="_blank"
            >
              <img src={require("../../../images/linkedin-logo.png")}
                className="linkedin-image"
              />
            </a>
          </div>
        </section>
      </li>
      <li className="team-member">
        <img src={require("../../../images/jordan-pro-pic.jpg")}
          alt="Jordan Yu"
          className="profile-pic"
        />
        <section>
          <h3>Jordan Yu</h3>
          <div className="logo-div animated fadeIn">
            <a href="https://github.com/JordanYu4"
              className="github"
              target="_blank"
            >
              <img src={require("../../../images/github-logo.png")}
                className="github-image"
              />
            </a>
            <a href="https://www.linkedin.com/in/jordan-yu-4400/"
              className="linked-in"
              target="_blank"
            >
              <img src={require("../../../images/linkedin-logo.png")}
                className="linkedin-image"
              />
            </a>
          </div>
        </section>
      </li>
    </ul>
  </div>
);

export default ContactPage;
