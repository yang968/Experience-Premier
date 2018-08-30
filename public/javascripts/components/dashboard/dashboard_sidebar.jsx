import React from 'react';
import { Link } from 'react-router-dom';

class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {

  }

  handleLogout() {
    this.props.logout(this.props.currentUser.token);
    window.localStorage.currentUser = "undefined";
    window.localStorage.token = "undefined";
    this.props.history.push("/")
  };


  render() {
    return (
      <div className="dashboard-sidebar-container">
        <div className="dashboard-sidebar">
          <Link to="/dashboard" className="dashboard-home-link">
            <i className="icon-dashboard" />
            <h1>ExP</h1>
          </Link>
          <nav className="dashboard-sidebar-nav-container">
            <ul className="dashboard-sidebar-nav">
              <li>
                <Link to="/dashboard/call">Record call</Link>
              </li>
              <li>
                <Link to="/dashboard/performance">Performance</Link>
              </li>
              <li>
                <Link to="/dashboard/employees">Employees</Link>
              </li>
              <li>
                <Link to="/" onClick={this.handleLogout}>Log out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default DashboardSidebar;