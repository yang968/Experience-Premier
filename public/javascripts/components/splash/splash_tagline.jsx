import React from "react";
import { Link } from "react-router-dom";

const Tagline = () => (
  <div className="splash-tagline">
    <section className="splash-tagline-box">
      <h1>Take your customer service to the next level with ExP</h1>
      <p>
        ExP lets you analyze your own customer interactions and 
        visualize your data so that you know how to move forward 
        and never stop improving. 
      </p>
      <Link to="/signup" className="session-button">
        Sign Up - It's free
      </Link>
      <span>
        Already use ExP?&nbsp;
        <Link to="/login">Log in.</Link>
      </span>
    </section>
  </div>
);

export default Tagline;
