import React from 'react';

const ContactPage = () => (
  <div className="contact-page-container">
    <ul className="team-list animated bounceInLeft">
      <li className="team-member">
        <img
          src="https://media.licdn.com/dms/image/C5103AQG3yhiDLVqLqw/profile-displayphoto-shrink_800_800/0?e=1541030400&v=beta&t=qgACwJSC2LdxpbxUMb2hf_SIpPd9WZz7TXz_nxahjYw"
          alt="Victor Yang"
          className="profile-pic"
        />
        <section>
          <h3>Victor Yang</h3>
          <p>Tells people to do things</p>
          <a
            className="github"
            href="https://github.com/yang968"
            target="_blank"
          >
            <img src={require("../../../images/github-logo.png")} />
          </a>
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/yang53/"
            target="_blank"
          >
            <img src={require("../../../images/linkedin-logo.png")} />
          </a>
        </section>
      </li>
      <li className="team-member">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQF6tR4XvjrqNw/profile-displayphoto-shrink_800_800/0?e=1541030400&v=beta&t=dVG3HDMlTWjGe86gXm43XVb4wlLDmGoWJ4pntWIp1I0"
          alt="Victor Yang"
          className="profile-pic"
        />
        <section>
          <h3>Nick Matison</h3>
          <p>Does things</p>
          <a
            className="github"
            href="https://github.com/nmatison"
            target="_blank"
          >
            <img src={require("../../../images/github-logo.png")} />
          </a>
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/nicholas-matison-066359108/"
            target="_blank"
          >
            <img src={require("../../../images/linkedin-logo.png")} />
          </a>
        </section>
      </li>
      <li className="team-member">
        <img
          src="https://media.licdn.com/dms/image/C5603AQGRnxPhvez6MQ/profile-displayphoto-shrink_800_800/0?e=1541030400&v=beta&t=7c6lq6eYvLQmW2Lj8g2DcX90yi7l0VyDO68LiiuSYeM"
          alt="Victor Yang"
          className="profile-pic"
        />
        <section>
          <h3>Mark Lee</h3>
          <p>Does things in Korean</p>
          <a
            className="github"
            href="https://github.com/marklee9"
            target="_blank"
          >
            <img src={require("../../../images/github-logo.png")} />
          </a>
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/m-arklee/"
            target="_blank"
          >
            <img src={require("../../../images/linkedin-logo.png")} />
          </a>
        </section>
      </li>
      <li className="team-member">
        <img
          src="https://media.licdn.com/dms/image/C5603AQG5UmY5n1ZSLA/profile-displayphoto-shrink_800_800/0?e=1541030400&v=beta&t=OXNQq8F30zs7qcK0gIts51MUpuaPmCr2r3UpGl4IP-M"
          alt="Victor Yang"
          className="profile-pic"
        />
        <section>
          <h3>Jordan Yu</h3>
          <p>Does things</p>
          <a
            className="github"
            href="https://github.com/JordanYu4"
            target="_blank"
          >
            <img src={require("../../../images/github-logo.png")} />
          </a>
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/jordan-yu-a7119b80/"
            target="_blank"
          >
            <img src={require("../../../images/linkedin-logo.png")} />
          </a>
        </section>
      </li>
    </ul>
  </div>
);

// Here be contacts:
// githubs: https://github.com/nmatison
// https://github.com/marklee9 https://github.com/yang968
// https://github.com/JordanYu4 Linked Ins:
// https://www.linkedin.com/in/nicholas-matison-066359108/
// https://www.linkedin.com/in/jordan-yu-a7119b80/
// https://www.linkedin.com/in/m-arklee/ https://www.linkedin.com/in/yang53/

export default ContactPage;