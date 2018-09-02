import React from "react";

import DashboardIndexStatsContainer from "./team_stats/dashboard_index_stats_container";
import DashboardIndexEmployeesContainer from "./employee_list/dashboard_index_employees_container";
import DashboardIndexCallHistoryContainer from "./call_history/dashboard_index_call_history_container";
import SubordinateIndexContainer from './subordinate/subordinate_index_container';

class DashboardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderEmployees = this.renderEmployees.bind(this);
    this.renderCallHistory = this.renderCallHistory.bind(this);
  }

  componentDidMount() {
    this.props.getDashboard(this.props.token);
  }

  renderCallHistory (employees) {
    if (!this.props.managerTask && employees.length > 0) return (
      <DashboardIndexCallHistoryContainer />
    );
  }

  renderEmployees(employees) {
    if (!this.props.managerTask && employees.length > 0) return <DashboardIndexEmployeesContainer />;
  }

  renderSubordinateContainer(employees) {
    if (this.props.managerTask || employees.length === 0) return <SubordinateIndexContainer />;
  }

  render() {
    return (
      <div className="dashboard-index-container">
        <DashboardIndexStatsContainer />
        { this.renderEmployees(this.props.employees) }
        { this.renderCallHistory(this.props.employees) }
        { this.renderSubordinateContainer(this.props.employees) }
      </div>
    );
  }
}

export default DashboardIndex;