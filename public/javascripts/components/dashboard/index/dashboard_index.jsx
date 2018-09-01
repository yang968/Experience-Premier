import React from "react";

import DashboardIndexStatsContainer from "./dashboard_index_stats_container";
import DashboardIndexEmployeesContainer from "./dashboard_index_employees_container";
import DashboardIndexCallHistoryContainer from "./dashboard_index_call_history_container";

const renderEmployees = (employees) => {
  if (employees.length > 0) return <DashboardIndexEmployeesContainer />;
  return null;
};

const DashboardIndex = ({employees}) => (
  <div className="dashboard-index-container">
    <DashboardIndexStatsContainer />
    {renderEmployees(employees)}
    <DashboardIndexCallHistoryContainer />
  </div>
);

export default DashboardIndex;