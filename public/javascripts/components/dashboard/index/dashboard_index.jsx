import React from "react";

import DashboardIndexStatsContainer from "./team_stats/dashboard_index_stats_container";
import DashboardIndexEmployeesContainer from "./employee_list/dashboard_index_employees_container";
import DashboardIndexCallHistoryContainer from "./call_history/dashboard_index_call_history_container";
import CallPerformanceContainer from '../call_performance/call_performace_container';

const renderEmployees = (employees) => {
  if (employees.length > 0) return <DashboardIndexEmployeesContainer />;
  return <CallPerformanceContainer />;
};

const DashboardIndex = ({employees}) => (
  <div className="dashboard-index-container">
    <DashboardIndexStatsContainer />
    {renderEmployees(employees)}
    <DashboardIndexCallHistoryContainer />
  </div>
);

export default DashboardIndex;