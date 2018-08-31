import React from 'react';

import DashboardIndexStatsContainer from './dashboard_index_stats_container';
import DashboardIndexEmployeesContainer from './dashboard_index_employees_container';
import DashboardIndexSomething from './dashboard_index_something';

const DashboardIndex = () => (
  <div className="dashboard-index-container">
    <DashboardIndexStatsContainer />
    <DashboardIndexEmployeesContainer />
    <DashboardIndexSomething />
  </div>
);

export default DashboardIndex;