import React from 'react';

import DashboardIndexStatsContainer from './dashboard_index_stats_container';
import DashboardIndexEmployeesContainer from './dashboard_index_employees_container';
import DashboardIndexCallHistoryContainer from './dashboard_index_call_history_container';

const DashboardIndex = () => (
  <div className="dashboard-index-container">
    <DashboardIndexStatsContainer />
    <DashboardIndexEmployeesContainer />
    <DashboardIndexCallHistoryContainer />
  </div>
);

export default DashboardIndex;