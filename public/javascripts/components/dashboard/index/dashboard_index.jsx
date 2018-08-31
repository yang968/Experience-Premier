import React from 'react';

import DashboardIndexStats from './dashboard_index_stats';
import DashboardIndexEmployees from './dashboard_index_employees';
import DashboardIndexSomething from './dashboard_index_something';

const DashboardIndex = () => (
  <div className="dashboard-index-container">
    <DashboardIndexStats />
    <DashboardIndexEmployees />
    <DashboardIndexSomething />
  </div>
);

export default DashboardIndex;