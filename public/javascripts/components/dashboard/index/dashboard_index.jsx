import React from 'react';

import DashboardIndexStatsContainer from './dashboard_index_stats_container';
import DashboardIndexEmployees from './dashboard_index_employees';
import DashboardIndexSomething from './dashboard_index_something';

const DashboardIndex = () => (
  <div className="dashboard-index-container">
    <DashboardIndexStatsContainer />
    <DashboardIndexEmployees />
    <DashboardIndexSomething />
  </div>
);

export default DashboardIndex;