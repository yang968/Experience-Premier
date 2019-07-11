import React from "react";
import { Link, withRouter } from "react-router-dom";
import LoginFormContainer from "./login_form_container";

class TagLine extends React.Component {

  constructor (props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
    this.stageLoginModal = this.stageLoginModal.bind(this);
  }

  componentDidMount() {
    this.stageLoginModal();
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { email: "mscarn@difflin.com", password: "managermanager" };
    this.props.login(demoUser).then(obj => {
      window.localStorage.currentUser = JSON.stringify(obj.payload.currentUser);
      window.localStorage.token = obj.payload.currentUser.token;
    });
  }

  stageLoginModal(e) {
    // e.preventDefault();
    if (!this.props.currentUser) {
      let modal = document.querySelector(".modal");
      let modalOverlay = document.querySelector(".modal-overlay");
      let openButton = document.querySelector(".js-modal-open2");
      let closeButtons = document.getElementsByClassName("js-modal-close");

      openButton.addEventListener("click", function () {
        modal.classList.toggle("is-open", true);
        modalOverlay.classList.toggle("is-open", true);
      });

      for (let i=0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function () {
          modal.classList.toggle("is-open", false);
          modalOverlay.classList.toggle("is-open", false);
        })
      }
    }
  }


  render() {
    return <div className="splash-tagline">
        <LoginFormContainer />
        <section className="splash-tagline-box animated fadeIn">
          <h1>Take your customer service to the next level with ExP</h1>
          <p>
            ExP lets you analyze your own customer interactions and
            visualize your data so you know how to move forward and never
            stop improving.
          </p>
          <Link to="/dashboard" onClick={this.demoLogin} className="session-button">
            Demo ExP - It's free
          </Link>
          <span>
            Already use ExP?&nbsp;
            <button className="session-button js-modal-open2">
              Log in.
            </button>
          </span>
        </section>
      </div>;
  } 
}


export default withRouter(TagLine);
