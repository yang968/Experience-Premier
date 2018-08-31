import React from 'react';

import DashboardSidebarContainer from "./sidebar/dashboard_sidebar_container";
import DashboardMain from './dashboard_main';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    // this.currentUser = null;
  }

  componentDidMount() {
    // this.currentUser = JSON.parse(window.localStorage.currentUser);
    // console.log(this.currentUser.FirstName);
  }

  render() {

    return(
      <div className="dashboard-page-container">
        <DashboardSidebarContainer />
        <DashboardMain />
      </div>
    );
  }
};

export default DashboardPage;