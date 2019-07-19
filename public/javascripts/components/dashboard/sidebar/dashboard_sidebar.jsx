import React from 'react';
import { 
  Link,
} from 'react-router-dom';

class DashboardSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout(this.props.currentUser.token);
    window.localStorage.currentUser = "undefined";
    window.localStorage.token = "undefined";
  };


  render() {
    return <div className="dashboard-sidebar-container container-shadow">
        <div className="dashboard-sidebar">
          <Link to="/dashboard" className="dashboard-home-link">
            <i className="icon-dashboard" />
            <h1>ExP</h1>
          </Link>
          <nav className="welcome-message animated slideInLeft">
            Hello {this.props.currentUser.firstName}
          </nav>
          <nav className="dashboard-sidebar-nav-container">
            <ul className="dashboard-sidebar-nav-list">
              <li className="dashboard-sidebar-nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="dashboard-sidebar-nav-item">
                <Link to="/dashboard/call">Record call</Link>
              </li>
              <li className="dashboard-sidebar-nav-item">
                <Link to="/dashboard/text-analysis">Text Analysis</Link>
              </li>
              <li className="dashboard-sidebar-nav-item">
                <button onClick={this.handleLogout}>Log out</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>;
  }
}

export default DashboardSidebar;