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
        <div className="dashboard-sidebar-spacer"></div>
        <div className="dashboard-sidebar">
          <Link to="dashboard" className="dashboard-link">
            <i className="icon-dashboard" />
            <h1>ExP</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default DashboardSidebar;