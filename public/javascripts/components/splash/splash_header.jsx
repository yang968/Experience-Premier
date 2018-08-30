import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import SessionForm from './session_form.jsx';
import LoginFormContainer from './login_form_container'

class SplashHeader extends React.Component { // ({ currentUser, logout, login }) => {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.sessionTriggers = this.sessionTriggers.bind(this)
  }

  demoLogin() {
    const demoUser = {
      email: 'manager@manager.com',
      password: '12341234'
    };
    this.props.login(demoUser).then(obj => {
      window.localStorage.currentUser = JSON.stringify(obj.payload.currentUser);
      window.localStorage.token = obj.payload.currentUser.token;
    });
  };

  componentDidMount() {
    this.sessionTriggers();
  }

  sessionTriggers(e) {
    // e.preventDefault();
    if (!this.props.currentUser) {
      let modal = document.querySelector(".modal");
      let modalOverlay = document.querySelector(".modal-overlay");
      let openButton = document.querySelector(".js-modal-open");
      let closeButton = document.querySelector(".js-modal-close")

      openButton.addEventListener("click", function() {
        modal.classList.toggle("is-open", true);
        modalOverlay.classList.toggle("is-open", true);
      });

      closeButton.addEventListener("click", function () {
        modal.classList.toggle("is-open", false);
        modalOverlay.classList.toggle("is-open", false);
      })
    }
  }

  handleLogout() {
    this.props.logout(this.props.currentUser.token);
    window.localStorage.currentUser = "undefined";
    window.localStorage.token = "undefined";
    this.props.history.push("/"); // not working 
  };

  render() {
    const sessionLinks = () => <nav className="header-login-demo">
        <Link to="/contact" className="session-button">
          Contact Us
        </Link>
        &nbsp;
        {/* <Link to="/" 
          className="session-button js-modal-open"
          disabled="true">
          Log In
        </Link> */}
        <button className="session-button js-modal-open" onClick={this.sessionTriggers}>Log In</button>
        &nbsp;
        <button className="session-button" onClick={this.demoLogin}>
          Experience the Glory
        </button>
      </nav>;

    const userNav = () => (
      <nav className="user-nav">
        <h2 className="header-name">{ this.props.currentUser.firstName }</h2>
        <h2 className="header-name">Test Username</h2>
        &nbsp;&nbsp;
        <button className="session-button" onClick={this.handleLogout}>Log Out</button>
      </nav>
    );

    return (
      <div className="splash-header-container">
        <header className="splash-header">
          <a href="/" className="home-link">
            <i className="icon-home"></i>
            ExP
          </a>
          {this.props.currentUser ? userNav() : sessionLinks()}
        </header>
        <section className="splash-header-spacer" />
        {/* <SessionForm /> */}
        <LoginFormContainer />
      </div>
    );
  }
};

export default withRouter(SplashHeader);
