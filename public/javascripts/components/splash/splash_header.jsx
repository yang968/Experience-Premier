import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

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

  // handleLogout() {
  //   this.props.history.push("/"); // not working 
  //   this.props.logout();
  // };

  render() {
    const sessionLinks = () => (
      <nav className="header-login-signup">
        <button className="session-button" onClick={this.demoLogin}>Demo</button>
        {/* <button className="session-button" onClick={console.log("Demo not yet implemented")}>Demo</button> */}
        &nbsp;
        <Link to="/login" className="session-button">Log In</Link>
        &nbsp;
        <Link to="/signup" className="session-button">Sign Up</Link>
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
      </div>
    );
  }
};

export default withRouter(SplashHeader);
