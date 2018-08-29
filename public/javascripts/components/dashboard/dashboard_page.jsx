import React from 'react';

import DashboardSidebarContainer from './dashboard_sidebar_container';
import DashboardMain from './dashboard_main';

const DashboardPage = () => (
  <div className="dashboard-page-container">
    <DashboardSidebarContainer />
    <DashboardMain />
  </div>
);

export default DashboardPage;