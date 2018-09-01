import React from "react";

import DashboardIndexStatsContainer from "./team_stats/dashboard_index_stats_container";
import DashboardIndexEmployeesContainer from "./employee_list/dashboard_index_employees_container";
import DashboardIndexCallHistoryContainer from "./call_history/dashboard_index_call_history_container";
import CallPerformanceContainer from '../call_performance/call_performace_container';

class DashboardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderEmployees = this.renderEmployees.bind(this);
  }

  componentDidMount() {
    this.props.getDashboard(this.props.token);
  }

  renderEmployees(employees) {
    if (employees.length > 0) return <DashboardIndexEmployeesContainer />;
    return <CallPerformanceContainer />;
  }

  render() {
    return (
      <div className="dashboard-index-container">
        <DashboardIndexStatsContainer />
        { this.renderEmployees(this.props.employees) }
        <DashboardIndexCallHistoryContainer />
      </div>
    );
  }
}

export default DashboardIndex;