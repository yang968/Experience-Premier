import React from 'react';

import DashboardSidebarContainer from "./sidebar/dashboard_sidebar_container";
import DashboardMain from './dashboard_main';

const DashboardPage = () => {

  return (
    <div className="dashboard-page-container">
      <DashboardSidebarContainer />
      <DashboardMain />
    </div>
  );
};

export default DashboardPage;