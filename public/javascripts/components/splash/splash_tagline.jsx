import React from "react";
import { Link, withRouter } from "react-router-dom";

class TagLine extends React.Component {

  constructor (props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const demoUser = { email: "manager@manager.com", password: "12341234" };
    this.props.login(demoUser).then(obj => {
      window.localStorage.currentUser = JSON.stringify(obj.payload.currentUser);
      window.localStorage.token = obj.payload.currentUser.token;
    });
  }

  render() {
    return (
      <div className="splash-tagline">
        <section className="splash-tagline-box">
          <h1>Take your customer service to the next level with ExP</h1>
          <p>
            ExP lets you analyze your own customer interactions and 
            visualize your data so you know how to move forward 
            and never stop improving. 
          </p>
          <Link to="/dashboard" onClick={this.demoLogin} className="session-button">
            Demo ExP - It's free
          </Link>
          <span>
            Already use ExP?&nbsp;
            <Link to="/login">Log in.</Link>
          </span>
        </section>
      </div>
    )
  } 
}


export default withRouter(TagLine);
