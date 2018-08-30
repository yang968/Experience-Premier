import React from 'react';
import { Link } from 'react-router-dom';

class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.currentUser = this.props.currentUser;
  }

  render() {
    return (
      <div className="dashboard-sidebar-container">
        <div className="dashboard-sidebar">
          <Link to="dashboard" className="dashboard-home-link">
            <i className="icon-dashboard" />
            <h1>ExP</h1>
          </Link>
          <nav className="dashboard-sidebar-nav-container">
            <ul className="dashboard-sidebar-nav">
              <li>
                <Link to="call">Record call</Link>
              </li>
              <li>
                <Link to="performance">Performance</Link>
              </li>
              <li>
                <Link to="employees">Employees</Link>
              </li>
              <li>
                <Link to="/">Log out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default DashboardSidebar;