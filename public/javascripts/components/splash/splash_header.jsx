import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

// import LoginFormContainer from "./login_form_container";
import SessionForm from './session_form.jsx';

class SplashHeader extends React.Component { // ({ currentUser, logout, login }) => {
  constructor(props) {
    super(props);
    // this.handleLogout = this.handleLogout.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const demoUser = {
      email: 'manager@manager.com',
      password: '12341234'
    };
    // axios({
    //   method: 'POST', 
    //   url: 'http://localhost:5000/api/users/login',
    //   data: demoUser, 
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // })
    var instance = axios.create({
      loginUrl: '/api/users/login'
    });
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    instance.post("http://localhost:5000/api/users/login", {
        email: "manager@manager.com",
        password: "12341234"
      })
      .then(data => console.log(data), err => console.log(err));
    // .catch(err => console.log(err));
    // this.props.login(demoUser);
  };

  componentDidMount() {
    let modal = document.querySelector(".modal");
    let modalOverlay = document.querySelector(".modal-overlay");
    let openButton = document.querySelector(".js-modal-open");
    let closeButton = document.querySelector(".js-modal-close");

    closeButton.addEventListener("click", function () {
      modal.classList.toggle("is-open");
      modalOverlay.classList.toggle("is-open");
    });

    openButton.addEventListener("click", function () {
      modal.classList.toggle("is-open");
      modalOverlay.classList.toggle("is-open");
    });
  }

  // handleLogout() {
  //   this.props.history.push("/"); // not working 
  //   this.props.logout();
  // };

  render() {
    const sessionLinks = () => (
      <nav className="header-login-demo">
        <Link to="/contact" className="session-button">Contact Us</Link>
        &nbsp;
        <Link to="/" 
          className="session-button js-modal-open"
          disabled="true">
          Log In
        </Link>
        &nbsp;
        <button className="session-button" onClick={this.demoLogin}>Experience the Glory</button>
      </nav>
    );

    const userNav = () => (
      <nav className="user-nav">
        {/* <h2 className="header-name">{ this.props.currentUser.username }</h2> */}
        <h2 className="header-name">Test Username</h2>
        &nbsp;&nbsp;
        {/* <button className="session-button" onClick={this.handleLogout}>Log Out</button> */}
        <button className="session-button" onClick={"Logout not yet implemented"}>Log Out</button>
      </nav>
    );

    return <div className="splash-header-container">
        <header className="splash-header">
          <Link to="/" className="home-link">
            <i className="icon-home" />
            <h1>ExP</h1>
          </Link>
          {this.props.currentUser ? userNav() : sessionLinks()}
        </header>
        <section className="splash-header-spacer" />
        <SessionForm />
        {/* <LoginFormContainer /> */}
      </div>;
  }
};

export default withRouter(SplashHeader);
